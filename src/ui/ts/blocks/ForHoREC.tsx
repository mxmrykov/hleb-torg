import * as React from "react";
// @ts-ignore
import ForRetailCard from "../elements/ForRetailCard.tsx";
// @ts-ignore
import rect from "../../content/pics/Rectangle 2.png"
// @ts-ignore
import breadFirst from "../../content/pics/for-retail/bread-1.png"
// @ts-ignore
import breadSecond from "../../content/pics/for-retail/bread-2.png"

export default function ForHoREC({setDialog}): React.JSX.Element {

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
            marginTop: 75
        }}
        onLoad={() => {
            const targetElement = document.querySelector(".lcw");
            if (targetElement) {
                observer.observe(targetElement);
            }

            const header = document.querySelector(".lch1");
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
            <span className="line-center lch1">
                <h1>
                    Хлеб для HoRECа
                </h1>
                <img
                    alt="rect"
                    src={rect}
                    className="rect-bottom"
                />
            </span>
        </article>
        <article className="line-center wwrap lcw">
            <ForRetailCard
                Img={breadFirst}
                setDialog={setDialog}
                Name="Ляпун для сэндвичей пшеничный"
            />
            <ForRetailCard
                Img={breadSecond}
                setDialog={setDialog}
                Name="Ляпун для сэндвичей ржаной"
                ShadowExt={true}
            />
            <ForRetailCard
                Img={breadFirst}
                setDialog={setDialog}
                Name="Ляпун для сендвичей гречневый"
            />
            <ForRetailCard
                Img={breadSecond}
                setDialog={setDialog}
                Name="Ляпун для сендвичей пшеничный"
                ShadowExt={true}
            />
            <ForRetailCard
                Img={breadFirst}
                setDialog={setDialog}
                Name="Лаваш крымский"
            />
            <ForRetailCard
                Img={breadSecond}
                setDialog={setDialog}
                Name="Чириолла на закваске"
                ShadowExt={true}
            />
        </article>
    </section>
}