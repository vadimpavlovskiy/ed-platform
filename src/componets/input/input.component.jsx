import React from "react";
import './input.styles.scss';

export const Input = ({handleChange, ...otherProps}) => (
        <input {...otherProps} onChange={handleChange} className="input"/>
)