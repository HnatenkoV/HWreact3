import {useState} from "react";

const CustomEdit = (props) => {
    const [value, setValue] = useState(props.text)

    const onType = (event) => {
        setValue(event.target.value);
        props.onChange(event.target.value);
    }

    return (
        <>
            <input className='bg' type="text" placeholder={props.placeHolder} value={value} onChange={onType}/>
            {props.isNotValid && <p className="input-plhdr">this field is invalid</p>}
        </>
    )
}

export default CustomEdit