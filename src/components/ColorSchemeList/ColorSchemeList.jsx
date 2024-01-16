import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ColorSchemeList() {
  const dispatch = useDispatch();
  const userDetails = useSelector((store) => store.userAudioDetailsReducer);
  const colorSchemes = userDetails.colorSettings;

  const handleColorSchemeDelete = (itemId) => {
    console.log("itemId:", itemId);
    dispatch({
      type: "SAGA/DELETE_COLOR_SCHEME",
      payload: itemId,
    });
  };

  return (
    <div>
      <table className="table-presets">
        <thead>
          <tr>
            <th>Color Scheme Name</th>
            <th>White Key Color</th>
            <th>Black Key Color</th>
            <th>Active Key Color</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {colorSchemes &&
            colorSchemes.map((colorScheme) => (
              <tr key={colorScheme.id}>
                <td>{colorScheme.color_scheme_name}</td>
                <td>{colorScheme.whiteKeyColor}</td>
                <td>{colorScheme.blackKeyColor}</td>
                <td>{colorScheme.activeKeyColor}</td>
                <button onClick={() => handleColorSchemeDelete(colorScheme.id)}>
                  Delete color
                </button>

                <td></td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
{
  /*
        {colorSchemes &&
          colorSchemes.map((colorScheme) => (
            <li key={colorScheme.id}>
              /* <ul>
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
      </ul> */
}
