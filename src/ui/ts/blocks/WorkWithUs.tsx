import * as React from "react";
// @ts-ignore
import rect from "../../content/pics/Rectangle 2.png"
// @ts-ignore
import partnerFirst from "../../content/pics/work-with-us/image 11.png"
// @ts-ignore
import partnerSecond from "../../content/pics/work-with-us/image 12.png"
// @ts-ignore
import partnerThird from "../../content/pics/work-with-us/image 13.png"
// @ts-ignore
import partnerFourth from "../../content/pics/work-with-us/image 14.png"
// @ts-ignore
import partnerFifth from "../../content/pics/work-with-us/image 15.png"
import "../../css/elements/wwus.css"

export default function WorkWithUs(): React.JSX.Element {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
                entry.target.classList.add('animate__fadeInUp');
            }
        });
    });

    const observerLeft = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate__animated');
                entry.target.classList.add('animate__fadeInRight');
            }
        });
    });

    return <section
        style={{
            marginTop: 150
        }}
        onLoad={() => {
            const header = document.querySelector(".lch2");
            if (header) {
                observer.observe(header);
            }

            const targetElement_1 = document.querySelector(".wwus-parent");
            if (targetElement_1) {
                observerLeft.observe(targetElement_1);
            }
        }}
    >
        <article
            style={{
                marginBottom: 50
            }}
        >
            <span className="line-center lch2">
                <h1>
                    С нами работают
                </h1>
                <img
                    alt="rect"
                    src={rect}
                    className="rect-bottom"
                />
            </span>
        </article>
        <article className="line-center wwus-parent">
            <img
                src={partnerFirst}
                alt="ВкусВилл"
                className="partner-logo"
            />
            <img
                src={partnerSecond}
                alt="Азбука Вкуса"
                className="partner-logo"
            />
            <img
                src={partnerThird}
                alt="Перекресток"
                className="partner-logo"
            />
            <img
                src={partnerFourth}
                alt="Пятерочка"
                className="partner-logo"
            />
            <img
                src={partnerFifth}
                alt="Магнит"
                className="partner-logo"
            />
        </article>
    </section>
}