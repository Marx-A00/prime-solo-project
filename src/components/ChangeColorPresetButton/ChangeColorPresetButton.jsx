import { useState } from "react";
import "./ChangeColorPresetButton.css";
import ChangeColorList from "../ChangeColorList/ChangeColorList";
import * as React from "react";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
/**
 * Use material UI for this
 * Material UI components needed:
 * List
 */

export default function ChangeColorPresetButton() {
  const [open, setOpen] = useState(false);
  const [openDialog, handleDisplay] = React.useState(false);
  const handleClickToOpen = (e) => {
    setOpen(true);
  };
  const handleToClose = (e) => {
    setOpen(false);
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
    backgroundColor: "green",
    color: "White",
    border: "2px solid yellow",
  };

  const handleClose = () => {
    handleDisplay(false);
  };

  const openDialogBox = () => {
    handleDisplay(true);
  };

  return (
    <>
      <button style={buttonStyle} onClick={openDialogBox}>
        Colors
      </button>
      <Dialog onClose={handleClose} open={openDialog}>
        <DialogTitle> Demo Dialog </DialogTitle>
        <h3 style={dialogStyle}>
          <ChangeColorList />
        </h3>
      </Dialog>
    </>
  );
}
