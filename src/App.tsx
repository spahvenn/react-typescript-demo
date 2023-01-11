import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import router from "./utils/router";
import { RouterProvider } from "react-router-dom";
import { RootStoreProvider, useGeneralStore } from "./mobx/RootStore";
import { useMemo } from "react";
import { observer } from "mobx-react-lite";

export function App() {
  return (
    <RootStoreProvider>
      <AppWithStoreAccess />
    </RootStoreProvider>
  );
}

const AppWithStoreAccess = observer(() => {
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
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
});
