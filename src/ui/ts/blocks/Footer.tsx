import {useState} from "react";
import "../../css/elements/footer.css"
// @ts-ignore
import leftBread from "../../content/pics/4-2.png"
// @ts-ignore
import topBread from "../../content/pics/6.png"
// @ts-ignore
import rightBread from "../../content/pics/5-3.png"

type Time = {
    hours: number,
    minutes: number,
    seconds: number
}

export default function Footer(): React.JSX.Element {

    const [remain, setRemain] = useState<Time>()
    const [preloaded, setPreloaded] = useState<boolean>(false)

    function getTimeRemaining() {
        const dt = new Date()

        const hours = 23 - dt.getHours()
        const minutes = 59 - dt.getMinutes()
        const seconds = 59 - dt.getSeconds()

        setRemain({
            hours: hours,
            minutes: minutes,
            seconds: seconds
        } as Time)
    }

    if (!preloaded) {
        getTimeRemaining()
        setPreloaded(true)
    }

    setInterval(() => {
        getTimeRemaining()
    }, 1000)

    return <footer
        className="line-start"
    >
        <img
            src={leftBread}
            alt="bread"
            className="left-bread-footer"
        />
        <article
            className="footer-content"
        >
            <h1>
                Закажитие со скидкой прямо сейчас
            </h1>
            <p>
                Дополнительное предложение почему это выгодно. Обратный счетчик на кнопке
            </p>
            <button>
                Заказать со
                скидкой
                <span
                    style={{
                        color: "#E39908",
                        marginLeft: 10
                    }}
                >
                    {
                        (remain?.hours < 10 ? "0" + remain?.hours : remain?.hours) + ":" +
                        (remain?.minutes < 10 ? "0" + remain?.minutes : remain?.minutes) + ":" +
                        (remain?.seconds < 10 ? "0" + remain?.seconds : remain?.seconds)
                    }
                </span>
            </button>
        </article>
        <img
            src={topBread}
            alt="bread"
            className="top-bread-footer"
        />
        <img
            src={rightBread}
            alt="bread"
            className="right-bread-footer"
        />
    </footer>
}