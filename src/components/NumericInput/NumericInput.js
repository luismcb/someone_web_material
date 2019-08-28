import React from 'react'

export default function NumericInput(props) {
    return (
        <input type="number" className="form-control" id={props.id || ""} name={props.name || ""} onChange={props.onChangeHandler || undefined} />
    )
}
