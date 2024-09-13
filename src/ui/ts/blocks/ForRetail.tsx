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

export default function ForRetail({setDialog}): React.JSX.Element {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
                entry.target.classList.add('animate__fadeInUp');
            }
        });
    });

    return <section
        style={{
            marginTop: 150,
            zIndex: 30
        }}
        onLoad={() => {
            const targetElement = document.querySelector(".wwrap");
            if (targetElement) {
                observer.observe(targetElement);
            }

            const header = document.querySelector(".line-center");
            if (header) {
                observer.observe(header);
            }

            const paragraph = document.querySelector(".line-center-p");
            if (paragraph) {
                observer.observe(paragraph);
            }
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
                className="line-center-p"
            >
                Краткое описание, пояснение в одном предложении
            </p>
        </article>
        <article className="line-center wwrap">
            <ForRetailCard
                Img={breadFirst}
                Name="Ляпун пшеничный на закваске"
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadSecond}
                Name="Чиабатта"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadFirst}
                Name="Витой багет"
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadSecond}
                Name="Портоболло мультизерновая"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadFirst}
                Name="Лаваш крымский"
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadSecond}
                Name="Чириолла на закваске"
                ShadowExt={true}
                setDialog={setDialog}
            />
        </article>
    </section>
}