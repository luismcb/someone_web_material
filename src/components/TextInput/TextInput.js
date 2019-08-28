import React from 'react'

export default function TextInput(props) {
    return (
        <div className={`form-group ${props.labelDirection==="side"?"row":""}`} >
            <label htmlFor={props.name  || ""}>{props.label || ""}</label>
            <input type="text" className="form-control" id={props.id || ""} name={props.name || ""} maxLength={props.maxlen || ""}  onChange={props.onChangeHandler || undefined} />
        </div>
    )
}
