import React, { useState } from "react";
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from "recharts";
import "../styles/Plot/styles.css";

function Plot(props) {
    const [opacity, setOpacity] = useState({
        em: 0.5,
        iem: 0.5,
        rkm: 0.5,
        sol: 0.5,
    });

    function handleMouseEnter(o) {
        const { dataKey } = o;
        setOpacity((prev) => {
            return {...prev, [dataKey]: 1}
        });
    }

    function handleMouseLeave(o) {
        const { dataKey } = o;
        setOpacity((prev) => {
            return {...prev, [dataKey]: 0.5}
        });
    }

    return (
        <div className='plot'>
            <h2>{props.title}</h2>
            <LineChart
                width={props.width}
                height={props.height}
                data={props.data}
            >
                <XAxis dataKey={props.axisX} />
                <YAxis />
                <CartesianGrid stroke='#eee' strokeDasharray='5 5' />
                <Tooltip />
                <Legend
                    height={"0"}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />
                <Line
                    type='monotone'
                    strokeOpacity={opacity.em}
                    dataKey={props.firstDataKey}
                    stroke='#8884d8'
                />
                <Line
                    type='monotone'
                    strokeOpacity={opacity.iem}
                    dataKey={props.secondDataKey}
                    stroke='#82ca9d'
                />
                <Line
                    type='monotone'
                    strokeOpacity={opacity.rkm}
                    dataKey={props.thirdDataKey}
                    stroke='#993366'
                />
                <Line
                    type='monotone'
                    strokeOpacity={opacity.sol}
                    dataKey={props.fourthDataKey}
                    stroke='#999900'
                />
            </LineChart>
        </div>
    );
}

export default Plot;
