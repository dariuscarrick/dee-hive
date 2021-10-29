import React from 'react'
import { Route } from 'wouter'
import { Home, CaseStudies } from 'Pages'
import * as Views from 'Views'
import 'App.css'

export default class App extends React.Component {
    render() {
        return (
            <main className='app light'>
                <Route path={Views.BasePath}>
                    <Home />
                </Route>
                <Route path={Views.CaseStudies}>
                    <CaseStudies />
                </Route>
            </main>
        )
    }
}
