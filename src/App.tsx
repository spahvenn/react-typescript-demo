import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import router from "./utils/router";
import { RouterProvider } from "react-router-dom";
import {
  RootStoreProvider,
  useGeneralStore,
  useRootStore,
} from "./mobx/RootStore";
import { useEffect, useMemo } from "react";
import { observer } from "mobx-react-lite";
import {
  hydrateStore,
  updateLocalStorageOnMobxStoreChange,
} from "./utils/mobxUtils";

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
    hydrateStore(generalStore);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
});
