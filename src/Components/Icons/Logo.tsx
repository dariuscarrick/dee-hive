import React from 'react'
import './Icons.css'

export class Logo extends React.Component {
    render() {
        return (
            <div className='inline-middle ring outer spin'>
                <div className='ring inner'>
                    <div className='ring hole' />
                    <div className='ring dot' />
                </div>
            </div>
        )
    }
}
