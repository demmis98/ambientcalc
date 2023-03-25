import {HashRouter, Routes, Route} from "react-router-dom"
import Title from "./Title"

const Main = () => {
    return(
        <>
        <HashRouter>
            <Routes>
                <Route exact-path = '/' element = {<Title></Title>}></Route>
            </Routes>
        </HashRouter>
        </>
    )
}

export default Main