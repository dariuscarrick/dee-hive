import React from 'react'
import { Link } from 'wouter'
import { BoxedLayout, LogoLockup, Navigation, Box, BoxSize, Button } from '../Components'
import * as Views from '../Views'
import './Pages.css'

export class Home extends React.Component {
    render() {
        return (
            <BoxedLayout>
                <LogoLockup />
                <Navigation className='home-navigation' />
                <Box size={BoxSize.Large}>
                    <h2>
                        Hi! I'm Dee, a UX/UI designer and developer with 7 years experience desiging and building digital products.
                    </h2>
                    <Button>
                        <Link href={Views.BasePath}>Get In Touch</Link>
                    </Button>
                </Box>
            </BoxedLayout>
        )
    }
}
