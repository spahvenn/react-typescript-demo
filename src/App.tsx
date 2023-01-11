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
import { reaction, set } from "mobx";

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
    reaction(
      () => JSON.stringify(rootStore.generalStore),
      (json) => {
        localStorage.setItem("generalStore", json);
      }
    );
    const jsonString = localStorage.getItem("generalStore");
    if (!jsonString) {
      return;
    }
    const json = JSON.parse(jsonString);
    let obj = Object.getOwnPropertyNames(generalStore);
    obj.forEach((property) => {
      if (json?.hasOwnProperty(property)) {
        set(generalStore, property, json[property]);
      }
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
});
