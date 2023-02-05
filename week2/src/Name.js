import React, { Component, useState } from "react";

const Name = () => {
    const [state, setState] = useState("Abhi");
    return (
        <>
        <h1>The name is :{state.name}</h1></>
    )
}
export default Name;