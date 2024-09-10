import * as React from "react"
// @ts-ignore
import HomeHeader from "../blocks/HomeHeader.tsx";
// @ts-ignore
import MainHome from "../blocks/MainHome.tsx";
// @ts-ignore
import ForWhom from "../blocks/ForWhom.tsx";
// @ts-ignore
import rect from "../../content/pics/Rectangle4.png"
// @ts-ignore
import ForRetail from "../blocks/ForRetail.tsx";

export default function Home(): React.JSX.Element {
    return <section className="home-page">
        <HomeHeader/>
        <MainHome/>
        <ForWhom/>
        <img
            src={rect}
            alt="rect"
            className="rect-divider"
        />
        <ForRetail/>
    </section>
}