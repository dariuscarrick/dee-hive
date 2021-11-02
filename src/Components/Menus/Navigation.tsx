import React from 'react'
import { Link } from 'wouter'
import { CaseStudies } from '../../Views'
import './Menus.css'

interface INavigationProps {
    className?: string
}

export class Navigation extends React.Component<INavigationProps, {}> {
    getLinkClass = (): string => {
        let activeClass = ''
        if (window.location.pathname.includes(CaseStudies)) activeClass = ' active'
        return 'navigation-link' + activeClass
    }

    render() {
        return (
            <nav className={this.props.className}>
                <Link href={CaseStudies} className={this.getLinkClass()}>
                    Case Studies
                </Link>
            </nav>
        )
    }
}
