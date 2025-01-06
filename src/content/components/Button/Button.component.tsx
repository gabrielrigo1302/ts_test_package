import React from "react"
import { IButton } from "../../../__types__/components"


export const Button = ({
    onClick,
    text
}: IButton) => {
    return <button onClick={onClick}>{text}</button>
}