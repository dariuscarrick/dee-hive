import React from 'react'
import { FullLayout, LogoLockup, Navigation, Sidebar, SidebarItem, Box, BoxSize } from 'Components'
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
                        <Box size={BoxSize.Small}>
                            <p>Meow</p>
                        </Box>
                    </SidebarItem>
                </Sidebar>
            </FullLayout>
        )
    }
}
