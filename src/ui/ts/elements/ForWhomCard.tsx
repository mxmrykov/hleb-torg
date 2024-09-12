import * as React from "react";

export default function ForWhomCard({src, text}): React.JSX.Element {
    return <span className="col-center">
                <img
                    alt="for-whom"
                    src={src}
                />
                <h3>
                    {text}
                </h3>
            </span>
}