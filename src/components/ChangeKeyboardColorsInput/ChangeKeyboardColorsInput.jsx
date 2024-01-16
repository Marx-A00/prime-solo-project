import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import ColorSchemeList from '../ColorSchemeList/ColorSchemeList'

export default function ChangeKeyboardColorsInput() {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const [whiteKeyColor, setWhiteKeyColor] = useState(0);
  const [blackKeyColor, setBlackKeyColor] = useState(0);
  const [activeKeyColor, setActiveKeyColor] = useState(0);
  const [colorSchemeName, setColorSchemeName] = useState("");

  /**
   * handle backgroundColorOnClick or something that changes
   * the background color when the listItemButton is clicked
   * document.body.style.backgroundColor = "Whatever Color";
   * also gonna wanna have a save button that saves as preset -> later
   */

  const handleSavingKeyboardColorsOnClick = (event) => {
    event.preventDefault();
    dispatch({
      type: "SAGA/SET_USER_COLOR_DETAILS",
      payload: {
        id: user.id,
        data: {
          whiteKeyColor: whiteKeyColor,
          blackKeyColor: blackKeyColor,
          activeKeyColor: activeKeyColor,
          colorSchemeName: colorSchemeName,
        },
      },
    });
  };
  /**
   * TODO:
   * Make input for changing keyboard colors actually change color of keyboard
   * FIXME:
   * Make user able to type input without activitating piano keys
   * probably just add disabled class to keyboard
   */
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <form onSubmit={handleSavingKeyboardColorsOnClick}>
        <label for="WhiteKeyColour">WhiteKeyColour:</label>
        <input
          value={whiteKeyColor}
          onChange={(event) => {
            setWhiteKeyColor(event.target.value);
          }}
          type="number"
        />
        <label for="BlackKeyColour">BlackKeyColour:</label>
        <input
          value={blackKeyColor}
          onChange={(event) => {
            setBlackKeyColor(event.target.value);
          }}
          type="number"
        />
        <label for="ActiveKeyColour">ActiveKeyColour:</label>
        <input
          value={activeKeyColor}
          onChange={(event) => {
            setActiveKeyColor(event.target.value);
          }}
          type="number"
        />
        <label for="ColourSchemeName">ColourSchemeName:</label>
        <input
          value={colorSchemeName}
          onChange={(event) => {
            setColorSchemeName(event.target.value);
          }}
          type="text"
        />
        <button>Save Colors</button>
      </form>
      <ColorSchemeList />

    </Box>
  );
}
