import React from 'react'
import './Layouts.css'

interface IBoxedLayoutProps {
    children: JSX.Element | JSX.Element[]
}

export class BoxedLayout extends React.Component<IBoxedLayoutProps, {}> {
    render() {
        return (
            <section className='boxed-layout'>
                {this.props.children}
            </section>
        )
    }
}
