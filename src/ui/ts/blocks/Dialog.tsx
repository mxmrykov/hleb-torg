import {useState} from "react";

export default function Dialog({callEvent}): React.JSX.Element {

    const [isDialog, setIsDialog] = useState<boolean>(false)

    return <section
        className="dialog-window"
    >

    </section>
}