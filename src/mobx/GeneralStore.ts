import { makeAutoObservable } from "mobx";

export default class GeneralStore {
  uiMode: "light" | "dark" = "light";
  hydrated: boolean = false;
  localStorageProps: { [key: string]: boolean } = { uiMode: true };
  constructor() {
    makeAutoObservable(this);
  }

  toggleUIMode = () => {
    this.uiMode = this.uiMode === "light" ? "dark" : "light";
  };
}
