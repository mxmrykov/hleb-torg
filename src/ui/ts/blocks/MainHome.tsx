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

export default function MainHome(): React.JSX.Element {
    return <div className="main-home">
        <img
            src={rectFirst}
            alt="rectangle"
            className="rectangle-first"
        />
        <img
            src={breadFirst}
            alt="bread"
            className="bread-first"
        />
        <img
            src={breadBgFirst}
            alt="bread"
            className="bread-third"
        />
        <span>
            <h1>
                Ремесленные хлеба Fresh и шоковой заморозки для ритейла и HoReCa
            </h1>
            <button className="base-button">
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
            className="bread-second"
        />
        <img
            src={breadBgSecond}
            alt="bread"
            className="bread-fourth"
        />
    </div>
}