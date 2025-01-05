import React from "react"
import { IButton } from "../../__types__/components/Button"


const Button = ({
    onClick,
    text
}: IButton) => {
    return <button onClick={onClick}>{text}</button>
}