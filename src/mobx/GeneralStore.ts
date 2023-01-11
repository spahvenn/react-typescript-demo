import { makeAutoObservable } from "mobx";

export default class GeneralStore {
  uiMode: "light" | "dark" = "light";
  constructor() {
    makeAutoObservable(this);
  }

  toggleUIMode = () => {
    this.uiMode = this.uiMode === "light" ? "dark" : "light";
  };
}
