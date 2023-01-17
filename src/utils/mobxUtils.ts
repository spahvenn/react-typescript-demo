import { get, reaction, runInAction, set } from "mobx";
import GeneralStore from "../mobx/GeneralStore";
import { RootStore } from "../mobx/RootStore";
import ShoppingCartStore from "../mobx/ShoppingCartStore";

function setHydrated(store: GeneralStore | ShoppingCartStore) {
  runInAction(() => {
    set(store, "hydrated", "true");
  });
}

export function hydrateStores(rootStore: RootStore) {
  hydrateStore(rootStore.generalStore, "generalStore");
  hydrateStore(rootStore.shoppingCartStore, "shoppingCartStore");
}

export function hydrateStore(
  store: GeneralStore | ShoppingCartStore,
  storeName: string
) {
  const jsonString = localStorage.getItem(storeName);
  if (!jsonString) {
    setHydrated(store);
    return;
  }
  const json = JSON.parse(jsonString);
  Object.keys(store).forEach((property) => {
    if (json?.hasOwnProperty(property)) {
      set(store, property, json[property]);
    }
    setHydrated(store);
  });
}

export function updateLocalStorageOnMobxStoreChange(rootStore: RootStore) {
  reaction(
    () => JSON.stringify(rootStore.generalStore),
    (json) => {
      updateLocalStorage(rootStore.generalStore, "generalStore", json);
    }
  );
  reaction(
    () => JSON.stringify(rootStore.shoppingCartStore),
    (json) => {
      updateLocalStorage(
        rootStore.shoppingCartStore,
        "shoppingCartStore",
        json
      );
    }
  );
}

function updateLocalStorage(
  store: GeneralStore | ShoppingCartStore,
  storeName: string,
  value: any
) {
  const obj = JSON.parse(value);
  const newStoreJson: any = {};
  Object.keys(obj).forEach((key) => {
    if (store.localStorageProps.find((prop) => prop === key)) {
      newStoreJson[key] = get(store, key);
    }
  });
  localStorage.setItem(storeName, JSON.stringify(newStoreJson));
}