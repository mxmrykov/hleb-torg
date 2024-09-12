import * as React from "react";
// @ts-ignore
import rect from "../../content/pics/Rectangle 2.png"
// @ts-ignore
import forWhomFirst from "../../content/pics/for-whom/image-2.png"
// @ts-ignore
import forWhomSecond from "../../content/pics/for-whom/image-3.png"
// @ts-ignore
import forWhomThird from "../../content/pics/for-whom/image-4.png"
// @ts-ignore
import forWhomFourth from "../../content/pics/for-whom/image-5.png"

import "../../css/elements/for-whom.css"
// @ts-ignore
import ForWhomCard from "../elements/ForWhomCard.tsx";
// @ts-ignore
import Line from "../tags/Line.tsx";

export default function ForWhom(): React.JSX.Element {
    return <section
        className="col-center sec-screen"
        style={{
            marginTop: 25
        }}
    >
        <article>
            <span className="line-center">
                <img
                    alt="rect"
                    src={rect}
                    className="rect-top"
                />
                <h1>
                    Для кого
                </h1>
            </span>
            <p
                style={{
                    color: "grey",
                    fontWeight: 400,
                    textAlign: "center",
                    maxWidth: "95%"
                }}
            >
                Краткое описание, пояснение в одном предложении
            </p>
        </article>
        <Line
            classname="for-whom-parent"
        >
            <Line
                classname="for-whom-child"
            >
                <ForWhomCard
                    src={forWhomFirst}
                    text="Кофейни"
                />
                <ForWhomCard
                    src={forWhomSecond}
                    text="Рестораны"
                />
            </Line>
            <Line
                classname="for-whom-child"
            >
                <ForWhomCard
                    src={forWhomThird}
                    text="Отели"
                />
                <ForWhomCard
                    src={forWhomFourth}
                    text="Ритейл"
                />
            </Line>
        </Line>
    </section>
}