import React from 'react'
import { BoxedLayout, LogoLockup, Navigation, Hero, Button } from 'Components'
import './Pages.css'

export class Home extends React.Component {
    render() {
        return (
            <BoxedLayout>
                <LogoLockup />
                <Navigation className='home-navigation' />
                <Hero>
                    <h2>
                        Hi! I'm Dee, a UX/UI designer and developer with 7 years experience desiging and building digital products.
                    </h2>
                    <Button>
                        <a>Get In Touch</a>
                    </Button>
                </Hero>
            </BoxedLayout>
        )
    }
}
