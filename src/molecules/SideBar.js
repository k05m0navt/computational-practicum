import React from "react";
import { InputWithHeader } from "../atoms";
import "../styles/SideBar/styles.css";

function SideBar(props) {
    return (
        <div className="side_bar">
            <h2>{props.title}</h2>
            <InputWithHeader title="x0:" value={props.x0} setValue={props.setX0} />
            <InputWithHeader title="y0:" value={props.y0} setValue={props.setY0} />
            <InputWithHeader title="X_:" value={props.X} setValue={props.setX} />
            <InputWithHeader title="N_:" value={props.N} setValue={props.setN} />
        </div>
    );
}

export default SideBar;
