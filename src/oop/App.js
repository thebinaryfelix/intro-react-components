import React from 'react'
import { UserInfo, CollectUserInfo } from './components'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Gilberto',
      surname: 'Truta',
      age: 45,
      submitted: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = event => {
    this.setState(state => {
      return { ...state, [event.target.name]: event.target.value }
    })
  }

  handleSubmit = event => {
    event.preventDefault()

    submitUserInfo().then(() => {
      this.setState(state => {
        return { ...state, submitted: true }
      })
    })
  }

  componentDidUpdate() {
    if (this.state.submitted) {
      alert('Submitted with classes!')
    }
  }

  render() {
    return (
      <div style={classes.root}>
        <UserInfo name={this.state.name} surname={this.state.surname} age={this.state.age} />
        <CollectUserInfo
          values={this.state}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}

const classes = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

const submitUserInfo = () =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(true)
    }, 1500)
  })
