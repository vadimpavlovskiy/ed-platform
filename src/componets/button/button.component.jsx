import React from "react";

import './button.styles.scss'

const Button = ({handleSubmit,children}) => (
    <button onClick={handleSubmit} className="custom_button">
        {children}
    </button>
)

export default Button