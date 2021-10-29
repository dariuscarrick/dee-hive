import React from 'react'
import './Menus.css'

interface ISidebarProps {
    children: JSX.Element | JSX.Element[]
}

export class Sidebar extends React.Component<ISidebarProps, {}> {
    render() {
        return (
            <ul className='inline-top sidebar'>{this.props.children}</ul>
        )
    }
}

export class SidebarItem extends React.Component<ISidebarProps, {}> {
    render() {
        return (
            <li className='sidebar-item'>{this.props.children}</li>
        )
    }
}
