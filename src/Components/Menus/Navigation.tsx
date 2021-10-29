import React from 'react'
import { Link } from 'wouter'
import { CaseStudies } from 'Views'
import './Menus.css'

interface INavigationProps {
    className?: string
}

export class Navigation extends React.Component<INavigationProps, {}> {
    getLinkActiveClass = (): string => {
        if (window.location.pathname.includes(CaseStudies)) return ' active'
        else return ''
    }

    render() {
        return (
            <nav className={this.props.className}>
                <Link
                    href={CaseStudies}
                    className={`navigation-link${this.getLinkActiveClass()}`}
                >
                    Case Studies
                </Link>
            </nav>
        )
    }
}
