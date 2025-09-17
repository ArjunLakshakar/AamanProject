import React from 'react'
import Home from '../Components/LandingPage/Home'
import ChooseYourJourney from '../Components/LandingPage/ChooseYourJourney'
import RecommendedForYou from '../Components/LandingPage/RecommendedForYou'
import SpecialOffer from '../Components/LandingPage/SpecialOffer'
import PopularOperators from '../Components/LandingPage/PopularOperators'
import HowItWork from '../Components/LandingPage/HowItWork'

const HomePage = () => {
  return (
    <div className='font-poppins'>
      <Home />
      <ChooseYourJourney />
      <RecommendedForYou />
      <SpecialOffer/>
      <PopularOperators/>
      <HowItWork/>
    </div>
  )
}

export default HomePage