import * as React from "react";
// @ts-ignore
import rect from "../../content/pics/Rectangle 2.png"
import "../../css/elements/for-retail.css"
// @ts-ignore
import breadFirst from "../../content/pics/for-retail/bread-1.jpg"
// @ts-ignore
import breadSecond from "../../content/pics/for-retail/bread-2.jpg"
// @ts-ignore
import breadThird from "../../content/pics/for-retail/bread-3.jpg"
// @ts-ignore
import breadFourth from "../../content/pics/for-retail/bread-4.jpg"
// @ts-ignore
import breadFifth from "../../content/pics/for-retail/bread-5.jpg"
// @ts-ignore
import breadSixth from "../../content/pics/for-retail/bread-6.jpg"
// @ts-ignore
import breadSeventh from "../../content/pics/for-retail/bread-7.jpg"
// @ts-ignore
import breadEight from "../../content/pics/for-retail/bread-8.jpg"
// @ts-ignore
import breadNinth from "../../content/pics/for-retail/bread-9.jpg"
// @ts-ignore
import breadTenth from "../../content/pics/for-retail/bread-10.jpg"

// @ts-ignore
import bread11 from "../../content/pics/for-retail/Хлеб00087.jpg"
// @ts-ignore
import bread12 from "../../content/pics/for-retail/Хлеб00101.jpg"
// @ts-ignore
import bread13 from "../../content/pics/for-retail/Хлеб00111.jpg"
// @ts-ignore
import bread14 from "../../content/pics/for-retail/Хлеб00128.jpg"
// @ts-ignore
import bread15 from "../../content/pics/for-retail/Хлеб00161.jpg"
// @ts-ignore
import bread16 from "../../content/pics/for-retail/Хлеб00175.jpg"
// @ts-ignore
import bread17 from "../../content/pics/for-retail/Хлеб00186.jpg"
// @ts-ignore
import bread18 from "../../content/pics/for-retail/Хлеб00195.jpg"
// @ts-ignore
import bread19 from "../../content/pics/for-retail/Хлеб00217.jpg"
// @ts-ignore
import bread20 from "../../content/pics/for-retail/Хлеб00242.jpg"
// @ts-ignore
import bread21 from "../../content/pics/for-retail/Хлеб00204.jpg"
// @ts-ignore
import bread22 from "../../content/pics/for-retail/Хлеб00233.jpg"
// @ts-ignore
import bread23 from "../../content/pics/for-retail/Хлеб00271.jpg"
// @ts-ignore
import bread24 from "../../content/pics/for-retail/Хлеб00290.jpg"
// @ts-ignore
import bread25 from "../../content/pics/for-retail/Хлеб00319.jpg"
// @ts-ignore
import bread26 from "../../content/pics/for-retail/Хлеб00330.jpg"
// @ts-ignore
import bread27 from "../../content/pics/for-retail/Хлеб00356.jpg"
// @ts-ignore
import bread28 from "../../content/pics/for-retail/Хлеб00405.jpg"
// @ts-ignore
import bread29 from "../../content/pics/for-retail/Хлеб00374.jpg"
// @ts-ignore
import bread30 from "../../content/pics/for-retail/Хлеб00368.jpg"

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
            marginTop: 75,
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
            <span
                className="line-center"
                style={{
                    marginBottom: 25
                }}>
                <h1>Хлеб для ритейла
                </h1>
                <img
                    alt="rect"
                    src={rect}
                    className="rect-bottom"
                />
            </span>
        </article>
        <article className="line-center wwrap">
            <ForRetailCard
                Img={breadFirst}
                Name='Лепешка "Португальская"'
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadSecond}
                Name="Панини (для сэндвичей)"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadThird}
                Name="Лепешка Гречневый ляпун"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadFourth}
                Name="Лепешка Ржаной ляпун"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadFifth}
                Name="Багет витой"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadSixth}
                Name="Панини пшеничный (заморозка)"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadSeventh}
                Name="Панини резаная (заморозка)"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadEight}
                Name="Чиабатта классическая"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadNinth}
                Name="Чиабатта с маслинами"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={breadTenth}
                Name="Лаваш Крымский"
                ShadowExt={true}
                setDialog={setDialog}
            />
            {/**/}
            <ForRetailCard
                Img={bread11}
                Name="Ляпун пшеничный 200г"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread12}
                Name="Ляпун пшеничный 70г"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread13}
                Name="Чиабатта с прованскими травами"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread14}
                Name="Фугас с маслинами и прованскими травами"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread15}
                Name="Фокача с песто и моцареллой"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread16}
                Name="Фокача с песто"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread17}
                Name="Хачапури"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread18}
                Name="Багет рустик"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread19}
                Name="Чиабатта с жаренным луком"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread20}
                Name="Хлеб кукурузный"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread21}
                Name="Багет рустик (заморозка)"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread22}
                Name="Ляпун томатный"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread23}
                Name="Кнурцель"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread24}
                Name="Хлеб гречневый с жаренным луком"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread25}
                Name="Бэйгл"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread26}
                Name="Панини ржаной"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread27}
                Name="Фокача тонато"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread28}
                Name="Шанишка"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread29}
                Name="Мини чибаттини"
                ShadowExt={true}
                setDialog={setDialog}
            />
            <ForRetailCard
                Img={bread30}
                Name="Мини чибаттини с маслинами"
                ShadowExt={true}
                setDialog={setDialog}
            />
        </article>
    </section>
}