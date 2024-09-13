import "../../css/elements/dialog.css"
// @ts-ignore
import cross from "../../content/pics/cross.png"
import {useState} from "react";
import axios from "axios";

export default function Dialog({active, cancel, firstLoad}): React.JSX.Element {

    const [name, setName] = useState<string>()
    const [city, setCity] = useState<string>()
    const [phone, setPhone] = useState<string>()

    const host = window.location.hostname

    return <section
        className={active ? "dialog-window dialog-active" : "dialog-window non-active"}
    >
        <span
            className=""
        />
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end"
            }}
        >
            <img
                style={{
                    width: 35,
                    height: 35,
                    margin: 15,
                    cursor: "pointer"
                }}
                src={cross}
                alt="cross"
                onClick={cancel}
            />
        </div>
        <div
            className="dialog-form"
        >
            <span
                style={{
                    width: 370,
                    maxWidth: "70%"
                }}
            >
                <h1>
                    Бесплатная дегустация
                </h1>
                <p>
                    Оставьте ваши контактные данные, мы свяжемся с вами в ближайшее время
                </p>
            </span>
            <span
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    marginBlock: 35,
                    width: 440,
                    maxWidth: "90%"
                }}
            >
                <input
                    type="text"
                    placeholder="Имя"
                    value={name}
                    onChange={e => {
                        setName(e.target.value)
                    }}
                />
                <input
                    style={{
                        marginBlock: 15
                    }}
                    type="text"
                    placeholder="Город"
                    value={city}
                    onChange={e => {
                        setCity(e.target.value)
                    }}
                />
                <input
                    type="text"
                    placeholder="Телефон"
                    value={phone}
                    onChange={e => {
                        setPhone(e.target.value)
                    }}
                />
            </span>

            <button
                className="base-button"
                onClick={() => {
                    axios.post(
                        `https://${host}/api/new-request.php`,
                        {
                            name: name,
                            city: city,
                            phone: phone
                        },
                        {
                            headers: {
                                "Content-Type": "application/json",
                            }
                        }
                    ).then(res => {
                        if (res.data.ok) {
                            alert("Заявка успешно создана! Мы свяжемся с вами в ближайшее время.")
                        }
                    })
                }}
            >
                Заказать
            </button>
        </div>
    </section>
}