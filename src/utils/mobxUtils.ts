import { get, reaction, set } from "mobx";
import GeneralStore from "../mobx/GeneralStore";
import { RootStore } from "../mobx/RootStore";

function setHydrated(generalStore: GeneralStore) {
  set(generalStore, "hydrated", "true");
}

export function hydrateStore(generalStore: GeneralStore) {
  const jsonString = localStorage.getItem("generalStore");
  if (!jsonString) {
    setHydrated(generalStore);
    return;
  }
  const json = JSON.parse(jsonString);
  let obj = Object.getOwnPropertyNames(generalStore);
  obj.forEach((property) => {
    if (json?.hasOwnProperty(property)) {
      set(generalStore, property, json[property]);
    }
    setHydrated(generalStore);
  });
}

export function updateLocalStorageOnMobxStoreChange(rootStore: RootStore) {
  reaction(
    () => JSON.stringify(rootStore.generalStore),
    (json) => {
      const obj = JSON.parse(json);
      const newStoreJson: any = {};
      Object.keys(obj).map((key) => {
        if (rootStore.generalStore.localStorageProps[key]) {
          newStoreJson[key] = get(rootStore.generalStore, key);
        }
      });
      localStorage.setItem("generalStore", JSON.stringify(newStoreJson));
    }
  );
}
