import { reaction, set } from "mobx";
import GeneralStore from "../mobx/GeneralStore";
import { RootStore } from "../mobx/RootStore";

export function hydrateStore(generalStore: GeneralStore) {
  const jsonString = localStorage.getItem("generalStore");
  if (!jsonString) {
    return;
  }
  const json = JSON.parse(jsonString);
  let obj = Object.getOwnPropertyNames(generalStore);
  obj.forEach((property) => {
    if (json?.hasOwnProperty(property)) {
      set(generalStore, property, json[property]);
    }
  });
}

export function updateLocalStorageOnMobxStoreChange(rootStore: RootStore) {
  reaction(
    () => JSON.stringify(rootStore.generalStore),
    (json) => {
      localStorage.setItem("generalStore", json);
    }
  );
}
