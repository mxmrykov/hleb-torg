import * as React from "react";

export default function HighTechElemSlider({HTFirst, TextHeader, TextParagraph}): React.JSX.Element {
    return <span className="col-center box-hightech" style={{alignItems: "start", marginBottom: 20}}>
                <img
                    alt="natural quality"
                    src={HTFirst}
                />
                <h3
                    style={{
                        marginBlock: 0,
                        marginTop: 10,
                        color: "white",
                        fontSize: 20
                    }}
                >
                    {TextHeader}
                </h3>
                <p
                    style={{
                        marginBlock: 0,
                        marginTop: 10,
                        color: "grey",
                        fontWeight: 400
                    }}
                >
                    {TextParagraph}
                </p>
            </span>
}