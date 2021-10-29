import React from 'react'
import { Logo } from 'Components' 
import './Elements.css'

interface ILogoLockupProps {
    className?: string
    hideTagline?: boolean;
}

export class LogoLockup extends React.Component<ILogoLockupProps, {}> {
    render() {
        return (
            <div className={this.props.className}>
                <Logo />
                <div className='inline-middle lockup'>
                    <h1>Dee-Hive</h1>
                    {!this.props.hideTagline && <h3>Design and Development</h3>}
                </div>
            </div>
        )
    }
}