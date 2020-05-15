import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom"
import React from "react";
import HeaderLoginBar from "./HeaderLoginBar";
import HeaderNav from "./HeaderNav"


const HomeHeaderMenu = () => {

    return (
        <>
            <div className="header__top">
                <HeaderLoginBar/>
                <HeaderNav/>
            </div>
        </>
    )
}

export default HomeHeaderMenu