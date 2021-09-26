import React, { Component } from 'react'
import Carousel from './carousel'
import Cards from './cards'
export default class home extends Component {
    render() {
        return (
            <>
                <Carousel/>
                <Cards/>
            </>
        )
    }
}
