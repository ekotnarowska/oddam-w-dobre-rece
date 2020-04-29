import React from 'react';
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeThreeColumns from "./HomeThreeColumns/HomeThreeColumns";
import HomeFourSteps from "./Home4Steps/HomeFourSteps";
import HomeAboutUs from "./HomeAboutUs/HomeAboutUs";
import HomeWhoWeHelp from "./HomeWhoWeHelp/HomeWhoWeHelp";
import HomeContactUs from "./HomeContactUs/HomeContactUs";




const Home = () => {

    return (
        <>
            <HomeHeader/>
            <HomeThreeColumns/>
            <HomeFourSteps/>
            <HomeAboutUs/>
            <HomeWhoWeHelp/>
            <HomeContactUs/>

        </>
    )
}

export default Home