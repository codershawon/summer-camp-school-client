import React from 'react';
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstructors from '../PopularInstructors/PopularInstructors';
import Questions from '../Questions/Questions';

const Home = () => {
    return (
        <div>
            <Helmet><title>Summer Camp School || Home</title></Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Questions></Questions>
        </div>
    );
};

export default Home;