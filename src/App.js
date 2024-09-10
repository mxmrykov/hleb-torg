import {Route, Routes} from "react-router-dom";
import Home from "./ui/ts/screens/Home.tsx";
import "./ui/css/index.css"
import "./ui/css/tags.css"

const homeElem = {route: "/", elem: <Home/>}

export default function App() {
    return <Routes>
        <Route path={homeElem.route} element={homeElem.elem}/>
    </Routes>
}