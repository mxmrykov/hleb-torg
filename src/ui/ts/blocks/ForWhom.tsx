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

export default function ForWhom(): React.JSX.Element {
    return <section
        className="col-center"
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
                    fontWeight: 400
                }}
            >
                Краткое описание, пояснение в одном предложении
            </p>
        </article>
        <article className="line-center">
            <span className="col-center">
                <img
                    alt="for-whom"
                    src={forWhomFirst}
                />
                <h3>
                    Кофейни
                </h3>
            </span>
            <span className="col-center">
                <img
                    alt="for-whom"
                    src={forWhomSecond}
                />
                <h3>
                    Рестораны
                </h3>
            </span>
            <span className="col-center">
                <img
                    alt="for-whom"
                    src={forWhomThird}
                />
                <h3>
                    Отели
                </h3>
            </span>
            <span className="col-center">
                <img
                    alt="for-whom"
                    src={forWhomFourth}
                />
                <h3>
                    Ритейл
                </h3>
            </span>
        </article>
    </section>
}