import { makeAutoObservable } from "mobx";

export default class ShoppingCartStore {
  shoppingCartImageIds: number[] = [];
  hydrated: boolean = false;
  localStorageProps: string[] = ["shoppingCartItems"];
  constructor() {
    makeAutoObservable(this);
  }

  add(imageId: number) {
    this.shoppingCartImageIds.push(imageId);
  }

  remove(imageId: number) {
    this.shoppingCartImageIds = this.shoppingCartImageIds.filter(
      (shoppingCartImageId) => shoppingCartImageId !== imageId
    );
  }
}
