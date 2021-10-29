import React from 'react'
import { FullLayout, LogoLockup, Navigation, Sidebar, SidebarItem, Box, BoxSize, Article } from '../Components'
import './Pages.css'

export class CaseStudies extends React.Component {
    render() {
        return (
            <FullLayout>
                <header className='case-studies-header'>
                    <LogoLockup hideTagline className='inline-middle case-studies-logo-lockup' />
                    <Navigation className='inline-middle case-studies-navigation' />
                </header>
                <Sidebar>
                    <SidebarItem>
                        <Box size={BoxSize.Medium}>
                            <h3 className='black-font-weight'>AutoSpark</h3>
                            <h4 className='small-margin-top'>Exploring automated content as a product</h4>
                        </Box>
                    </SidebarItem>
                </Sidebar>
                <Article title='AutoSpark' className='inline-top case-studies-article'>
                    <p>Meow</p>
                </Article>
            </FullLayout>
        )
    }
}
