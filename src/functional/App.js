import { UserInfo, CollectUserInfo } from './components'

export default function App() {
  // TODO: setup the state

  const handleChange = event => {
    // TODO: Here be dragons...
  }

  const handleSubmit = event => {
    event.preventDefault()

    submitUserInfo().then(() => {
      // TODO: This line will be executed after form submission
      // Here be dragons...
    })
  }

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
