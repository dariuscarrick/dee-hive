import React from 'react'
import { Box, BoxSize } from '.'
import './Elements.css'

interface IHeroProps {
    children: JSX.Element | JSX.Element[]
}
export class Hero extends React.Component<IHeroProps, {}> {
    render() {
        return (
            <article className='hero'>
                <Box size={BoxSize.Large}>
                    {this.props.children}
                </Box>
            </article>
        )
    }
}