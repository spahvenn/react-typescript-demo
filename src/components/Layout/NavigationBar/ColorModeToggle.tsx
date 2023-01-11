import { Switch, Typography } from "@mui/material";
import { useGeneralStore } from "../../../mobx/RootStore";
import { observer } from "mobx-react-lite";

const ColorModeToggle = observer(() => {
  {
    const generalStore = useGeneralStore();
    return (
      <>
        <Typography>Dark mode:</Typography>
        <Switch
          sx={{ marginRight: 0.5 }}
          checked={generalStore.uiMode === "dark"}
          onChange={generalStore.toggleUIMode}
        />
      </>
    );
  }
});

export default ColorModeToggle;
