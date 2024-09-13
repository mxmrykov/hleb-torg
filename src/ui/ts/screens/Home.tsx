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
import {useState} from "react";
// @ts-ignore
import Dialog from "../blocks/Dialog.tsx";

export default function Home(): React.JSX.Element {

    const [dialogActive, setDialogActive] = useState<boolean>()
    const [firstLoad, setFirstLoad] = useState<boolean>(true)

    const setUpdate = () => {
        setFirstLoad(false)
        setDialogActive(!dialogActive)
    }

    const cancel = () => {
        setDialogActive(false)
    }

    return <section className="home-page">
        <Dialog
            active={dialogActive}
            cancel={cancel}
            firstLoad={firstLoad}
        />
        <HomeHeader/>
        <MainHome
            setDialog={setUpdate}
        />
        <ForWhom
        />
        <img
            src={rect}
            alt="rect"
            className="rect-divider"
        />
        <ForRetail
            setDialog={setUpdate}
        />
        <img
            src={rect}
            alt="rect"
            className="rect-divider-right"
        />
        <HighTechProcess/>
        <ForHoREC
            setDialog={setUpdate}
        />
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
        <Footer
            setDialog={setUpdate}
        />
    </section>
}