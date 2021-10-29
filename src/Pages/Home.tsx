import React from 'react'
import { BoxedLayout, LogoLockup, Navigation, Hero } from 'Components'
import './Pages.css'

export class Home extends React.Component {
    render() {
        return (
            <BoxedLayout>
                <LogoLockup />
                <Navigation className='home-navigation' />
                <Hero />
            </BoxedLayout>
        )
    }
}
