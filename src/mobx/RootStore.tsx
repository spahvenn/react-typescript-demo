import { createContext, ReactNode, useContext } from "react";
import GeneralStore from "./GeneralStore";

export class RootStore {
  generalStore: GeneralStore;
  constructor() {
    this.generalStore = new GeneralStore();
  }
}

let store: RootStore;
const StoreContext = createContext<RootStore | undefined>(undefined);

export function RootStoreProvider({ children }: { children: ReactNode }) {
  const root = store ?? new RootStore();
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
