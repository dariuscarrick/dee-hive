import React from 'react'
import { Box, BoxSize, Button } from '.'
import './Elements.css'

export class Hero extends React.Component {
    render() {
        return (
            <article className='hero'>
                <Box size={BoxSize.Large}>
                    <p>Hi! I'm Dee, a UX/UI designer and developer with 7 years experience desiging and building digital products.</p>
                    <Button>
                        Get In Touch
                    </Button>
                </Box>
            </article>
        )
    }
}