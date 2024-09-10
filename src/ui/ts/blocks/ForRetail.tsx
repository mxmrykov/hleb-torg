import * as React from "react";
// @ts-ignore
import rect from "../../content/pics/Rectangle 2.png"
import "../../css/elements/for-retail.css"
// @ts-ignore
import breadFirst from "../../content/pics/for-retail/bread-1.png"

export default function ForRetail(): React.JSX.Element {
    return <section
        style={{
            marginTop: 150
        }}
    >
        <article className="col-center">
            <span className="line-center">
                <h1>
                    Хлеб для ритейла
                </h1>
                <img
                    alt="rect"
                    src={rect}
                    className="rect-bottom"
                />
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
        <article className="line-center wwrap">
            <li
                className="list-item-menu"
            >
                <span
                    className={"col-center"}
                >
                    <img
                        src={breadFirst}
                        alt="bread"
                        style={{
                            zIndex: 2
                        }}
                    />
                    <span className="shadow_yel"/>
                </span>
                <p
                    style={{
                        fontSize: 24,
                        fontWeight: 600
                    }}
                >
                    Ляпун пшеничный на закваске
                </p>
                <button className="base-button">
                    Заказать
                </button>
            </li>
            <li
                className="list-item-menu"
            >
                <span
                    className={"col-center"}
                >
                    <img
                        src={breadFirst}
                        alt="bread"
                        style={{
                            zIndex: 2
                        }}
                    />
                    <span className="shadow_yel"/>
                </span>
                <p
                    style={{
                        fontSize: 24,
                        fontWeight: 600
                    }}
                >
                    Ляпун пшеничный на закваске
                </p>
                <button className="base-button">
                    Заказать
                </button>
            </li>
            <li
                className="list-item-menu"
            >
                <span
                    className={"col-center"}
                >
                    <img
                        src={breadFirst}
                        alt="bread"
                        style={{
                            zIndex: 2
                        }}
                    />
                    <span className="shadow_yel"/>
                </span>
                <p
                    style={{
                        fontSize: 24,
                        fontWeight: 600
                    }}
                >
                    Ляпун пшеничный на закваске
                </p>
                <button className="base-button">
                    Заказать
                </button>
            </li>
            <li
                className="list-item-menu"
            >
                <span
                    className={"col-center"}
                >
                    <img
                        src={breadFirst}
                        alt="bread"
                        style={{
                            zIndex: 2
                        }}
                    />
                    <span className="shadow_yel"/>
                </span>
                <p
                    style={{
                        fontSize: 24,
                        fontWeight: 600
                    }}
                >
                    Ляпун пшеничный на закваске
                </p>
                <button className="base-button">
                    Заказать
                </button>
            </li>
            <li
                className="list-item-menu"
            >
                <span
                    className={"col-center"}
                >
                    <img
                        src={breadFirst}
                        alt="bread"
                        style={{
                            zIndex: 2
                        }}
                    />
                    <span className="shadow_yel"/>
                </span>
                <p
                    style={{
                        fontSize: 24,
                        fontWeight: 600
                    }}
                >
                    Ляпун пшеничный на закваске
                </p>
                <button className="base-button">
                    Заказать
                </button>
            </li>
            <li
                className="list-item-menu"
            >
                <span
                    className={"col-center"}
                >
                    <img
                        src={breadFirst}
                        alt="bread"
                        style={{
                            zIndex: 2
                        }}
                    />
                    <span className="shadow_yel"/>
                </span>
                <p
                    style={{
                        fontSize: 24,
                        fontWeight: 600
                    }}
                >
                    Ляпун пшеничный на закваске
                </p>
                <button className="base-button">
                    Заказать
                </button>
            </li>
        </article>
    </section>
}