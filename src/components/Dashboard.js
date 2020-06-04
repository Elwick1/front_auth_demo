import React, { Component } from 'react';
import Income from './totals/income'
import Expense from './totals/expense'

const Expenses = 'http://localhost:3001/expenses'
const Incomes = 'http://localhost:3001/incomes'

// const promises = Promise.all([
//   fetch(Expenses),
//   fetch(Incomes)
// ]);

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    incomes : [],
    expenses: []
  }

  componentDidMount() {
    fetch(Expenses)
    .then(res => res.json())
    .then(expenses => this.setState({
      expenses : expenses
    }))
    fetch(Incomes)
    .then(res => res.json())
    .then(incomes => this.setState({
      incomes :incomes
    }))
  }
  // componentDidMount() {
  //   promises.then((results) =>
  //   Promise.all(results.map(r => r.text()))
  //   )
  //   .then(console.log)
  // }

  render() {
    return (
      <div>
        <h1> Dashboard </h1>
        <h1>Status: {this.props.loggedInStatus}</h1>
        <Income user={this.props.user} income={this.state.incomes} />
        <Expense user={this.props.user} expense={this.state.expenses}/>
      </div>
    );
  }
}