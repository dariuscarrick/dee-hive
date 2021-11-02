import React from 'react'
import { Link } from 'wouter'
import { Logo } from '../'
import * as Views from '../../Views'
import './Elements.css'

interface ILogoLockupProps {
    className?: string
    hideTagline?: boolean
}

export class LogoLockup extends React.Component<ILogoLockupProps, {}> {
    render() {
        return (
            <Link href={Views.BasePath} className={this.props.className + (window.location.pathname === Views.BasePath ? ' active' : '')}>
                <Logo />
                <div className='inline-middle lockup'>
                    <h1>Dee-Hive</h1>
                    {!this.props.hideTagline && <h3>Design and Development</h3>}
                </div>
            </Link>
        )
    }
}