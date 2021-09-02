import React from 'react'
import { UserInfo, CollectUserInfo } from './components'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

    // TODO: setup the state
  }

  handleChange = event => {
    // TODO: Here be dragons...
  }

  handleSubmit = event => {
    event.preventDefault()

    submitUserInfo().then(() => {
      // TODO: This line will be executed after form submission
      // Here be dragons...
    })
  }

  componentDidUpdate() {
    // TODO: Here be dragons...
  }

  render() {
    return (
      <div style={classes.root}>
        <UserInfo
        // TODO: pass missing props
        />
        <CollectUserInfo
        // TODO: pass missing props
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
