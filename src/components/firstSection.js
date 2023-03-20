import React, {useContext, useState} from 'react';
import CustomEdit from "./customInput";
import {ThemeContext} from "../providers/themeProvider";

function FirstSection () {
    const [isFieldInvalid, setIsFieldInvalid] = useState(false)
    const themeCtx = useContext(ThemeContext);

    const handleCustomChange = (value) => {
        if(!isNaN(value) && value !== '') {
            setIsFieldInvalid(false);
        }else {
            setIsFieldInvalid(true)
        }
    }

    return(
        <div className={themeCtx.theme ? 'Theme-dark' : 'Theme-light'}>
            <div className="theme-ind">
                <p>{themeCtx.theme ? 'Night' : 'Day'}</p>
            </div>
            <div className="input-block">
                <CustomEdit text="" placeHolder="some text_1" onChange={handleCustomChange} isNotValid={isFieldInvalid}/>
                <CustomEdit text="" placeHolder="some text_2" onChange={handleCustomChange} isNotValid={isFieldInvalid}/>
            </div>
        </div>
    )
}

export default FirstSection;