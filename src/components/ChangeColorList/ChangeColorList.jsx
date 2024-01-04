import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useState } from "react";

export default function ChangeColorList() {
  const [style, setStyle] = useState("red");
  /**
   * handle backgroundColorOnClick or something that changes
   * the background color when the listItemButton is clicked
   * document.body.style.backgroundColor = "Whatever Color";
   * also gonna wanna have a save button that saves as preset -> later
   */

  const handleBackgroundColorOnClick = (e) => {
    const color = e.target.innerText;
    document.body.style.backgroundColor = color;
    
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <List>
        <ListItem disablePadding>
          <ListItemButton id="Red" onClick={handleBackgroundColorOnClick}>
            <ListItemText primary="Red" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton id="Blue" onClick={handleBackgroundColorOnClick}>
            <ListItemText primary="Blue" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton id="Green" onClick={handleBackgroundColorOnClick}>
            <ListItemText primary="Green" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton id="Yellow" onClick={handleBackgroundColorOnClick}>
            <ListItemText primary="Yellow" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );
}
