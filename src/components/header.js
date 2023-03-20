import React, {useContext} from 'react';
import {ThemeContext} from "../providers/themeProvider";


function Header () {
    const themeCtx = useContext(ThemeContext);

    const handleThemeChangeLight = () => {
        themeCtx.changeThemeL()
    }
    const handleThemeChangeDark = () => {
        themeCtx.changeThemeD()
    }

    return (
        <div className="first-div">
            <button className="btn" onClick={handleThemeChangeLight}>Light</button>
            <button className="btn" onClick={handleThemeChangeDark}>Dark</button>
        </div>
    )
}

export default Header;