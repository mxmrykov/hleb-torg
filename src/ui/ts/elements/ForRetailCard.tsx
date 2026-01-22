import * as React from "react";

export default function ForRetailCard({Img, ShadowExt = false, Name, setDialog}): React.JSX.Element {
    return <li
        className="list-item-menu"
        style={{
            wordBreak: "break-word",
        }}
    >
                <span
                    className={"col-center"}
                >
                    <img
                        src={Img}
                        alt="bread"
                        style={{
                            zIndex: 2,
                            maxWidth: "100%",
                            objectFit: "contain"
                        }}
                    />
                    <span className={ShadowExt ? "shadow_yel" : "shadow_yel"} style={ShadowExt ? {backgroundColor: "rgba(227, 153, 8, .53)"} : {}}/>
                </span>
        <p
            style={{
                fontSize: 24,
                fontWeight: 600,
                wordBreak: "break-word",
                whiteSpace: "normal"
            }}
        >
            {Name}
        </p>
        <button
            className="base-button"
            onClick={setDialog}
        >
            Заказать
        </button>
    </li>
}