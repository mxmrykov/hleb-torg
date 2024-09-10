import * as React from "react";
// @ts-ignore
import logo from "../../content/logo/logo.png"
import "../../css/elements/home-header.css"
// @ts-ignore
import breadTop from "../../content/pics/2.png"

export default function HomeHeader(): React.JSX.Element {
    return <header className="home-header">
        <img
            src={logo}
            className="logo"
            alt="logo"
        />
        <img
            src={breadTop}
            className="bread-top"
            alt="bread"
        />
    </header>
}