import * as React from "react";

export default function ForRetailCard({Img, ShadowExt = false, Name}): React.JSX.Element {
    return <li
        className="list-item-menu"
    >
                <span
                    className={"col-center"}
                >
                    <img
                        src={Img}
                        alt="bread"
                        style={{
                            zIndex: 2,
                            maxWidth: "100%"
                        }}
                    />
                    <span className={ShadowExt ? "shadow_yel shadow_yel_ext" : "shadow_yel"} style={ShadowExt ? {padding: 60, marginBottom: -90, top: -210} : {}}/>
                </span>
        <p
            style={{
                fontSize: 24,
                fontWeight: 600
            }}
        >
            {Name}
        </p>
        <button className="base-button">
            Заказать
        </button>
    </li>
}