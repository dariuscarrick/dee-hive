import React from 'react'
import './Elements.css'

export enum BoxSize {
    Small = 'small',
    Medium = 'medium',
    Large = 'large',
}

interface IBoxProps {
    size: BoxSize
    className?: string
    children: JSX.Element | JSX.Element[]
}

export class Box extends React.Component<IBoxProps, {}> {
    render() {
        return (
            <div className='box-back'>
                <div className={`box-front ${this.props.size}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}