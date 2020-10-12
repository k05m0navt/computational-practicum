import React from "react";
import { NavBar } from "../../molecules";

function ErrorPage() {
    return (
        <div className="error_page">
            <NavBar
                logo="Comp Prac"
                homeLink="/plots"
                homeText="Plots"
                errorLink="#max_error"
                errorText="Max error"
            />
        </div>
    );
}

export default ErrorPage;
