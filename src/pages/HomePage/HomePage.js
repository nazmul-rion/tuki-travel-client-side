import React from 'react'
import Banner from './Banner'
import Choose from './ChooseUs/Choose'
import PackageSection from './PackageSection'
import Review from './Review/Review'

const HomePage = () => {
    return (
        <div >

            <div>
                <Banner></Banner>
            </div>

            <div className="container my-5">
                <h1 className="text-center fw-bold text-highlighted mb-5">Select Our Best Popular Destinations</h1>
                <PackageSection></PackageSection>
            </div>
            <div className="container my-5">
                <h1 className="text-center fw-bold text-highlighted">Top Reviews</h1>
                <Review></Review>
            </div>

            <div className="container my-5">
                <Choose></Choose>
            </div>


        </div>
    )
}

export default HomePage
