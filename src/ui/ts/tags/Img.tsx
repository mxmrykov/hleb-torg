export default function Img({classname, style = undefined, src}): React.JSX.Element {
    return <div
        className={classname}
        style={{
            backgroundImage: `url('${src}')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain"
        }}
    />
}