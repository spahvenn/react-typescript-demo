import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import router from "./utils/router";
import { RouterProvider } from "react-router-dom";
import {
  RootStoreProvider,
  useGeneralStore,
  useRootStore,
  useShoppingCartStore,
} from "./mobx/RootStore";
import { useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";
import {
  hydrateStores,
  updateLocalStorageOnMobxStoreChange,
} from "./utils/mobxUtils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <RootStoreProvider>
      <AppWithStoreAccess />
    </RootStoreProvider>
  );
}

const AppWithStoreAccess = observer(() => {
  const rootStore = useRootStore();
  const generalStore = useGeneralStore();
  const shoppingCartStore = useShoppingCartStore();
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: generalStore.uiMode,
        },
      }),
    [generalStore.uiMode]
  );

  useEffect(() => {
    updateLocalStorageOnMobxStoreChange(rootStore);
    hydrateStores(rootStore);
  }, []);

  return (
    <>
      {generalStore.hydrated && shoppingCartStore.hydrated && (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <ToastContainer />
          <RouterProvider router={router} />
        </ThemeProvider>
      )}
    </>
  );
});
