import React, { useEffect, useState } from "react";
import { NavBar, SideBar } from "../../molecules";
import { HomeBody } from "../../organisms";
import {
    EulerMethod,
    ImprovedEulerMethod,
    RungeKuttaMethod,
    solution,
} from "../../mathFunc";
import "../../styles/HomePage/styles.css";

function GenerateData(setData, x0, y0, X, N) {
    var h = (X - x0) / N;
    var c1 = (1 / (Math.sqrt(x0) + Math.sqrt(y0 - x0))) ** 2;
    console.log(
        "c1: %f, sqrt(x): %f, sqrt(y-x): %f",
        c1,
        Math.sqrt(x0),
        Math.sqrt(y0 - x0)
    );
    var y_sol = y0;
    var y_em = y0;
    var y_iem = y0;
    var y_rkm = y0;
    var x = x0;
    var newData = [];

    for (var i = 0; i < N; i++) {
        y_em = EulerMethod(x, y_em, h);
        y_iem = ImprovedEulerMethod(x, y_iem, h);
        y_rkm = RungeKuttaMethod(x, y_rkm, h);
        y_sol = solution(x, c1);
        x += h;

        y_em = Math.round(y_em * 1000) / 1000;
        y_iem = Math.round(y_iem * 1000) / 1000;
        y_rkm = Math.round(y_rkm * 1000) / 1000;
        y_sol = Math.round(y_sol * 1000) / 1000;
        newData.push({
            x: Math.round(x * 1000) / 1000,
            em: y_em,
            iem: y_iem,
            rkm: y_rkm,
            sol: y_sol,
        });
    }
    newData.map((el) => setData((oldArray) => [...oldArray, el]));
}

function HomePage(props) {
    const [x0, setX0] = useState(1);
    const [y0, setY0] = useState(10);
    const [X, setX] = useState(15);
    const [N, setN] = useState(10);
    const [click, setClick] = useState(false);
    const [data, setData] = useState([
        { x: x0, em: y0, iem: y0, rkm: y0, sol: y0 },
    ]);
    useEffect(() => {
        setData([{ x: x0, em: y0, iem: y0, rkm: y0, sol: y0 }]);
        GenerateData(setData, x0, y0, X, N);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [click]);

    return (
        <div className='home_page'>
            <NavBar
                logo='Comp Prac'
                homeLink='/plots'
                homeText='Plots'
                errorLink='/max_error'
                errorText='Max error'
            />
            <div className='home_content'>
                <HomeBody
                    data={data}
                    axisX='x'
                    firstDataKey='em'
                    secondDataKey='iem'
                    thirdDataKey='rkm'
                    fourthDataKey='sol'
                />
                <SideBar
                    title='Initial Values'
                    x0={x0}
                    y0={y0}
                    X={X}
                    N={N}
                    setX0={setX0}
                    setY0={setY0}
                    setX={setX}
                    setN={setN}
                    setClick={setClick}
                />
            </div>
        </div>
    );
}

export default HomePage;
