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
// @ts-ignore
import HighTechProcess from "../blocks/HighTechProcess.tsx";
// @ts-ignore
import ForHoREC from "../blocks/ForHoREC.tsx";
// @ts-ignore
import WorkWithUs from "../blocks/WorkWithUs.tsx";
// @ts-ignore
import Footer from "../blocks/Footer.tsx";
import "../../css/adapt/adapt.css"
// @ts-ignore
import rightBread from "../../content/pics/5-3.png";
// @ts-ignore
import Img from "../tags/Img.tsx";

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
        <img
            src={rect}
            alt="rect"
            className="rect-divider-right"
        />
        <HighTechProcess/>
        <ForHoREC/>
        <img
            src={rect}
            alt="rect"
            className="rect-divider wwus"
        />
        <WorkWithUs/>
        <Img
            src={rightBread}
            classname="abs-bread-footer"
        />
        <Footer/>
    </section>
}