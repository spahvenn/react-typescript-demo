import { createContext, ReactNode, useContext } from "react";
import GeneralStore from "./GeneralStore";
import ShoppingCartStore from "./ShoppingCartStore";

export class RootStore {
  generalStore: GeneralStore;
  shoppingCartStore: ShoppingCartStore;
  constructor() {
    this.generalStore = new GeneralStore();
    this.shoppingCartStore = new ShoppingCartStore();
  }
}

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);

export function RootStoreProvider({
  children,
  testStore,
}: {
  children: ReactNode;
  testStore?: RootStore;
}) {
  const root = testStore ? testStore : store ?? new RootStore();
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

export function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useRootStore must be used within RootStoreProvider");
  }

  return context;
}

export function useGeneralStore() {
  const { generalStore } = useRootStore();
  return generalStore;
}

export function useShoppingCartStore() {
  const { shoppingCartStore } = useRootStore();
  return shoppingCartStore;
}