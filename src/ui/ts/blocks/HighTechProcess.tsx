import * as React from "react";
// @ts-ignore
import rect from "../../content/pics/Rectangle 2.png"
// @ts-ignore
import HTFirst from "../../content/pics/high-tech/image 10.png"
// @ts-ignore
import HTSecond from "../../content/pics/high-tech/image 10-2.png"
// @ts-ignore
import HTThird from "../../content/pics/high-tech/image 10-3.png"
// @ts-ignore
import HTFourth from "../../content/pics/high-tech/image 10-4.png"
// @ts-ignore
import HighTechElemSlider from "../elements/HighTechElemSlider.tsx";

// @ts-ignore
import Line from "../tags/Line.tsx";

export default function HighTechProcess(): React.JSX.Element {
    return <section
        style={{
            marginTop: 150
        }}
        className="col-center"
    >
        <article style={{marginBottom: 50, maxWidth: "100%"}}>
            <span
                className="line-center"
                style={{textAlign: "center"}}
            >
                <h1
                    className="high-tech-header"
                    style={{display: "flex", alignItems: "start", justifyContent: "center"}}
                >
                    <img
                        src={rect}
                        alt="rect"
                        className="rect-top"
                        style={{
                            marginRight: 5
                        }}
                    />
                    Высокотехнологичный процесс
                </h1>
            </span>
        </article>

        <Line
            classname="for-whom-parent"
        >
            <Line
                classname="for-whom-child"
            >
                <HighTechElemSlider
                    HTFirst={HTFirst}
                    TextHeader="Натуральное качество"
                    TextParagraph="Только натуральные ингредиенты, без искусственных добавок, как это делали наши предки."
                />
                <HighTechElemSlider
                    HTFirst={HTSecond}
                    TextHeader="Здоровый выбор"
                    TextParagraph="Цельнозерновые ингредиенты и полезные свойства оказывают положительное влияние на здоровье."
                />
            </Line>
            <Line
                classname="for-whom-child"
            >
                <HighTechElemSlider
                    HTFirst={HTThird}
                    TextHeader="Ремесленное искусство"
                    TextParagraph="Выпекается вручную по старинным рецептам, которые проверены временем."
                />
                <HighTechElemSlider
                    HTFirst={HTFourth}
                    TextHeader="Историческое наследие"
                    TextParagraph="Наша продукция воплощает в себе  традиции, передаваемые из поколения в поколение."
                />
            </Line>
        </Line>
    </section>
}