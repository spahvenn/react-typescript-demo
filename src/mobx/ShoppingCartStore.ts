import { makeAutoObservable } from "mobx";
import { ShoppingCartItem } from "../types";

export default class ShoppingCartStore {
  shoppingCartItems: ShoppingCartItem[] = [];
  hydrated: boolean = false;
  localStorageProps: { [key: string]: boolean } = { shoppingCartItems: true };
  constructor() {
    makeAutoObservable(this);
  }

  add(item: ShoppingCartItem) {
    console.log("adding to shoppingCart");
    this.shoppingCartItems.push(item);
  }

  remove(item: ShoppingCartItem) {
    this.shoppingCartItems = this.shoppingCartItems.filter(
      (shoppingCartItem) => shoppingCartItem.id !== item.id
    );
  }
}
