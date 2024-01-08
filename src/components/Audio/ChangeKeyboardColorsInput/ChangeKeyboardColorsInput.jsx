import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

export default function ChangeKeyboardColorsInput() {
  const [style, setStyle] = useState("red");
  /**
   * handle backgroundColorOnClick or something that changes
   * the background color when the listItemButton is clicked
   * document.body.style.backgroundColor = "Whatever Color";
   * also gonna wanna have a save button that saves as preset -> later
   */

  const handleSavingKeyboardColorsOnClick = (e) => {
    e.preventDefault();
  };
  /**
   * TODO:
   * Make input for changing keyboard colors actually change color of keyboard
   * TODO:
   * Make user able to type input without activitating piano keys
   * probably just add disabled class to keyboard
   */
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <form>
        <label for="WhiteKeyColour">WhiteKeyColour:</label>
        <input type="number" />
        <label for="BlackKeyColour">BlackKeyColour:</label>
        <input type="number" />
        <label for="ActiveKeyColour">ActiveKeyColour:</label>
        <input type="number" />
        <label for="ColourSchemeName">ColourSchemeName:</label>
        <input type="text" />
        <button onClick={handleSavingKeyboardColorsOnClick}>Save Colors</button>
      </form>
    </Box>
  );
}
