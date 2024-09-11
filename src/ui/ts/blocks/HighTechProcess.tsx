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

export default function HighTechProcess(): React.JSX.Element {
    return <section
        style={{
            marginTop: 150
        }}
        className="col-center"
    >
        <article style={{marginBottom: 50}}>
            <span className="line-center">
                <img
                    src={rect}
                    alt="rect"
                    className="rect-top"
                    style={{
                        marginRight: 5
                    }}
                />
                <h1>
                    Высокотехнологичный процесс
                </h1>
            </span>
        </article>
        <article className="line-center">
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
        </article>
    </section>
}