import { makeAutoObservable } from "mobx";
import { ShoppingCartItem } from "../types";

export default class ShoppingCartStore {
  shoppingCartItems: ShoppingCartItem[] = [];
  hydrated: boolean = false;
  localStorageProps: string[] = ["shoppingCartItems"];
  constructor() {
    makeAutoObservable(this);
  }

  add(item: ShoppingCartItem) {
    this.shoppingCartItems.push(item);
  }

  remove(item: ShoppingCartItem) {
    this.shoppingCartItems = this.shoppingCartItems.filter(
      (shoppingCartItem) => shoppingCartItem.id !== item.id
    );
  }
}
