import * as React from "react";
// @ts-ignore
import ForRetailCard from "../elements/ForRetailCard.tsx";
// @ts-ignore
import rect from "../../content/pics/Rectangle 2.png"
// @ts-ignore
import breadFirst from "../../content/pics/for-retail/bread-1.png"
// @ts-ignore
import breadSecond from "../../content/pics/for-retail/bread-2.png"

export default function ForHoREC(): React.JSX.Element {
    return <section
        style={{
            marginTop: 150
        }}
    >
        <article className="col-center">
            <span className="line-center">
                <h1>
                    Хлеб для HoRECа
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
            <ForRetailCard
                Img={breadFirst}
                Name="Ляпун для сэндвичей пшеничный"
            />
            <ForRetailCard
                Img={breadSecond}
                Name="Ляпун для сэндвичей ржаной"
                ShadowExt={true}
            />
            <ForRetailCard
                Img={breadFirst}
                Name="Ляпун для сендвичей гречневый"
            />
            <ForRetailCard
                Img={breadSecond}
                Name="Ляпун для сендвичей пшеничный"
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