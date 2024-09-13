import * as React from "react";
import "../../css/elements/main-home.css"
// @ts-ignore
import rectFirst from "../../content/pics/Rectangle4.png"
// @ts-ignore
import breadFirst from "../../content/pics/1.png"
// @ts-ignore
import breadSecond from "../../content/pics/4.png"
// @ts-ignore
import breadBgFirst from "../../content/pics/5.png"
// @ts-ignore
import breadBgSecond from "../../content/pics/6.png"
import 'animate.css';

export default function MainHome({setDialog}): React.JSX.Element {
    return <div className="main-home">
        <img
            src={rectFirst}
            alt="rectangle"
            className="rectangle-first"
        />
        <img
            src={breadFirst}
            alt="bread"
            className="bread-first animate__animated animate__fadeInUp"
        />
        <img
            src={breadBgFirst}
            alt="bread"
            className="bread-third animate__animated animate__fadeInUp"
        />
        <span>
            <h1 className="main-home-h1 animate__animated animate__fadeInUp">
                Ремесленные хлеба Fresh и шоковой <br/> заморозки для ритейла и HoReCa
            </h1>
            <button
                onClick={setDialog}
                className="base-button main-home-btn animate__animated animate__fadeInUp"
            >
                Заказать дегустацию
            </button>
        </span>
        <img
            src={rectFirst}
            alt="rectangle"
            className="rectangle-second"
        />
        <img
            src={breadSecond}
            alt="bread"
            className="bread-second animate__animated animate__fadeInUp"
        />

        <img
            src={breadBgSecond}
            alt="bread"
            className="bread-fourth animate__animated animate__fadeInUp"
        />
    </div>
}