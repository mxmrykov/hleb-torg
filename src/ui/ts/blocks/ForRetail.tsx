import * as React from "react";
// @ts-ignore
import rect from "../../content/pics/Rectangle 2.png"
import "../../css/elements/for-retail.css"
// @ts-ignore
import breadFirst from "../../content/pics/for-retail/bread-1.png"
// @ts-ignore
import breadSecond from "../../content/pics/for-retail/bread-2.png"
// @ts-ignore
import ForRetailCard from "../elements/ForRetailCard.tsx";

export default function ForRetail(): React.JSX.Element {
    return <section
        style={{
            marginTop: 150,
            zIndex: 30
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
                    fontWeight: 400,
                    textAlign: "center",
                    maxWidth: "95%"
                }}
            >
                Краткое описание, пояснение в одном предложении
            </p>
        </article>
        <article className="line-center wwrap">
            <ForRetailCard
                Img={breadFirst}
                Name="Ляпун пшеничный на закваске"
            />
            <ForRetailCard
                Img={breadSecond}
                Name="Чиабатта"
                ShadowExt={true}
            />
            <ForRetailCard
                Img={breadFirst}
                Name="Витой багет"
            />
            <ForRetailCard
                Img={breadSecond}
                Name="Портоболло мультизерновая"
                ShadowExt={true}
            />
            <ForRetailCard
                Img={breadFirst}
                Name="Лаваш крымский"
            />
            <ForRetailCard
                Img={breadSecond}
                Name="Чириолла на закваске"
                ShadowExt={true}
            />
        </article>
    </section>
}