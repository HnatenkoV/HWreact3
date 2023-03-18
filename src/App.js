import './App.css';
import {useState, useContext} from "react";
import CustomEdit from "./components/customInput";
import {ThemeContext} from "./providers/themeProvider";

function App() {
    const [isFieldInvalid, setIsFieldInvalid] = useState(false)
    const themeCtx = useContext(ThemeContext);

    const handleCustomChange = (value) => {
        if(!isNaN(value) && value !== '') {
            setIsFieldInvalid(false);
        }else {
            setIsFieldInvalid(true)
        }
    }

    const handleThemeChangeLight = () => {
        themeCtx.changeThemeL()
    }
    const handleThemeChangeDark = () => {
        themeCtx.changeThemeD()
    }

  return (
    <div className="App">
        <div className="first-div">
        <button className="btn" onClick={handleThemeChangeLight}>Light</button>
        <button className="btn" onClick={handleThemeChangeDark}>Dark</button>
        </div>
        <div className={themeCtx.theme ? 'Theme-dark' : 'Theme-light'}>
            <div className="theme-ind">
                <p>{themeCtx.theme ? 'Night' : 'Day'}</p>
            </div>
            <div className="input-block">
            <CustomEdit text="" placeHolder="some text_1" onChange={handleCustomChange} isNotValid={isFieldInvalid}/>
            <CustomEdit text="" placeHolder="some text_2" onChange={handleCustomChange} isNotValid={isFieldInvalid}/>
            </div>
        </div>
    </div>
  );
}

export default App;
