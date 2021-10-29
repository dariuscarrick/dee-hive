import React from 'react'
import './Elements.css'

interface IButtonProps {
    className?: string;
    children: JSX.Element | JSX.Element[] | string
}

export class Button extends React.Component<IButtonProps, {}> {
    render() {
        return (
            <button>
                {this.props.children}
            </button>
        )
    }
}
