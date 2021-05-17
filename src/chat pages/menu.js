import React from 'react';
import '../App.css';
import useContextMenu from "./useContextMenu";

const Menu = ({ outerRef }) => {
        const { xPos, yPos, menu } = useContextMenu(outerRef);
      
        if (menu) {
          return (
            <ul className="menu" style={{ top: yPos, left: xPos }}>
              <li>Pin Chat</li>
              <li>Delete</li>
            </ul>
          );
          
        }
        return <></>;
    }

export default Menu;
