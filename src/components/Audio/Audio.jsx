import "./Audio.css";
import Osc1 from "../Osc1/Osc1";
import Osc from "../../classes/Osc";
import Filter from "../Filter/Filter";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { height } from "@mui/system";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Keyboard from "../Keyboard/Keyboard";

import QwertyHancock from "qwerty-hancock";
import ChangeColorPresetButton from "../ChangeColorPresetButton/ChangeColorPresetButton";


export default function Audio() {
  const appState = useSelector((store) => store.AudioReducer1);


  const [openDialog, handleDisplay] = React.useState(false);
  /**
   * convert to modern react
   */

  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };
  const changeStyle = () => {
    if (style !== "red") {
      document.body.style.backgroundColor = "red";
      setStyle("red");
    } else {
      document.body.style.backgroundColor = "blue";
      setStyle("blue");
    }
  };

  const dialogStyle = {
    padding: "20px",
  };
  const buttonStyle = {
    width: "10rem",
    fontsize: "1.5rem",
    height: "2rem",
    padding: "5px",
    borderRadius: "10px",
    backgroundColor: "blue",
    color: "White",
    border: "2px solid yellow",
  };

  return (
    <div className="audio">
      {/* <ChangeColorPresetButton /> */}
      <Osc1 />
      <Filter />
      <Keyboard />
    </div>
  );
}
