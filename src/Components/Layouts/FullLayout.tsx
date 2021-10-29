import React from 'react'
import './Layouts.css'

interface IFullLayoutProps {
    children: JSX.Element | JSX.Element[]
}

export class FullLayout extends React.Component<IFullLayoutProps, {}> {
    render() {
        return (
            <section className='full-layout'>
                {this.props.children}
            </section>
        )
    }
}