import Hero from "../Components/Hero/Hero"
import Home from "../Components/Home/Home"
import { Outlet } from "react-router-dom"

function HomeLayout(){

    return(
        <>
            <Hero />
            <Outlet />
            <Home />
        </>
    )
}

export default HomeLayout