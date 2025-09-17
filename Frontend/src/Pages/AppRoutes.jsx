import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './PageNotFound'
import HomePage from './HomePage'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import TestimonialPage from './TestimonialPage'
import NavBar from '../Components/Header/NavBar'
import SignupPage from '../Components/Auth/SignupPage'
import SigninPage from '../Components/Auth/SigninPage'

const AppRoutes = () => {
    return (
        <>
            <BrowserRouter>
                <div className='relative font-poppins'>
                    <NavBar/>
                    <Routes>
                        <Route path='/' element={<HomePage />} />
                        <Route path='/' element={<AboutPage />} />
                        <Route path='/' element={<ContactPage />} />
                        <Route path='/' element={<TestimonialPage />} />
                        <Route path='/signup' element={<SignupPage />} />
                        <Route path='/Signin' element={<SigninPage />} />


                        {/* Page Not Found Route */}
                        <Route path='*' element={<PageNotFound />} />
                    </Routes>
                    
                </div>
            </BrowserRouter>
        </>

    )
}

export default AppRoutes