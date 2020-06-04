import React, { Component }from 'react';
import axios from 'axios'

const Expenses = 'http://localhost:3001/expenses'


export default class Expense extends React.Component {

    // componentDidMount() {
    //     fetch(Expenses)
    //     .then(res => res.json())
    //     .then(res => console.log(res))
    // }


    render() {
        return (
            <div>
                <h3>expenses</h3>
            </div>
        )
    }
}