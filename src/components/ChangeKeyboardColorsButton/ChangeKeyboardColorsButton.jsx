import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import ChangeKeyboardColorsInput from "../Audio/ChangeKeyboardColorsInput/ChangeKeyboardColorsInput";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";

export default function ChangeKeyboardColorsButton() {
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
    width: "20rem",
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
        Change Keyboard Colors
      </button>
      <Dialog onClose={handleClose} open={openDialog}>
        <DialogTitle>
          <p>Please enter an RGB value for each of your desired colors</p>
          <p>Ex:(28,198,186)</p>
        </DialogTitle>
        <h3>
          <ChangeKeyboardColorsInput />
        </h3>
      </Dialog>
    </>
  );
}
