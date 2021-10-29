import React from 'react'
import './Elements.css'

interface IArticleProps {
    className?: string
    title: string
    children: JSX.Element | JSX.Element[]
}

export class Article extends React.Component<IArticleProps, {}> {
    render() {
        return (
            <article className={this.props.className}>
                <h1 className='article-title'>{this.props.title}</h1>
                {this.props.children}
            </article>
        )
    }
}