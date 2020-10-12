import React, { useState } from "react";
import { NavBar, SideBar } from "../../molecules";
import { HomeBody } from "../../organisms";
import "../../styles/HomePage/styles.css";

function HomePage(props) {
    const [x0, setX0] = useState(1);
    const [y0, setY0] = useState(10);
    const [X, setX] = useState(15);
    const [N, setN] = useState(10);

    return (
        <div className="home_page">
            <NavBar
                logo="Comp Prac"
                homeLink="#home"
                homeText="Plots"
                errorLink="/max_error"
                errorText="Max error"
            />
            <div className="home_content">
                <HomeBody />
                <SideBar
                    title="Initial Values"
                    x0={x0}
                    y0={y0}
                    X={X}
                    N={N}
                    setX0={setX0}
                    setY0={setY0}
                    setX={setX}
                    setN={setN}
                />
            </div>
        </div>
    );
}

export default HomePage;
