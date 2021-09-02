import { useEffect, useState } from 'react'
import { UserInfo, CollectUserInfo } from './components'

const initialState = {
  name: 'Gilberto',
  surname: 'Truta',
  age: 45,
}

export default function App() {
  const [submitted, setSubmitted] = useState(false)
  const [userInfo, setUserInfo] = useState(initialState)

  const handleChange = event => {
    setUserInfo(previousState => {
      return { ...previousState, [event.target.name]: event.target.value }
    })
  }

  const handleSubmit = event => {
    event.preventDefault()

    submitUserInfo().then(() => {
      setSubmitted(true)
    })
  }

  useEffect(() => {
    if (submitted) {
      alert('Submitted!')
      setSubmitted(false)
    }
  }, [submitted])

  return (
    <div style={classes.root}>
      <UserInfo name={userInfo.name} surname={userInfo.surname} age={userInfo.age} />
      <CollectUserInfo values={userInfo} onChange={handleChange} onSubmit={handleSubmit} />
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
