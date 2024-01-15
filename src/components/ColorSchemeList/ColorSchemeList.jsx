import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ColorSchemeList() {
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.userAudioDetailsReducer);
  const colorSchemes = userDetails.colorSettings;

  const handleColorSchemeDelete = (itemId) => {
    console.log('itemId:', itemId)
    dispatch({
      type: "SAGA/DELETE_COLOR_SCHEME",
      payload: itemId,
    });
  };

  return (
    <div>
      <h1>Color Settings</h1>
      <ul>
        {colorSchemes &&
          colorSchemes.map((colorScheme) => (
            <li key={colorScheme.id}>
              <ul>
                <li>Color Scheme Name: {colorScheme.color_scheme_name} </li>
                <li>White Key Color: {colorScheme.whiteKeyColor} </li>
                <li>black Key Color: {colorScheme.blackKeyColor} </li>
                <li>active Key Color: {colorScheme.activeKeyColor} </li>
                <button onClick={() => handleColorSchemeDelete(colorScheme.id)}>
                  Delete Color Scheme
                </button>
                <br />
                <br />
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
}
