import React, { Component }from 'react';
import axios from 'axios'


const Incomes = 'http://localhost:3001/incomes'

export default class Income extends React.Component {

    // componentDidMount() {
    //     fetch(Incomes)
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    // }



    render() {
        return (
            <div>
                <h3>incomes</h3>
                {/* {this.props.income.find} */}
            </div>
        )
    }
}