export default function Line({classname="", children, style=undefined}): React.JSX.Element {
    return <article className={"line-center " + classname} style={style}>{children}</article>
}