import React, { Fragment, useState } from "react";
import HeaderTop from "../HeaderTop";
import StoryBar from "../StoryBar";
import Feed from "../Feed";
import Footer from "../Footer";

const HomePage = () => {
    return (
        <Fragment>
            <HeaderTop />
            <Feed />
            <Footer />
        </Fragment>
    );
}

export default HomePage;