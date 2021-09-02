import React from 'react'

/**
 * UserInfo receives the following props
 *
 * @String
 * name
 *
 * @String
 * surname
 *
 * @Number
 * age
 */
export default class UserInfo extends React.Component {
  render() {
    return (
      <div style={classes.root}>
        <h1>User Info</h1>
        <section style={classes.section}>
          <div>
            <p>Name</p>
          </div>
          <div>
            <p>{this.props.name}</p>
          </div>
        </section>

        <section style={classes.section}>
          <div>
            <p>Surname</p>
          </div>
          <div>
            <p>{this.props.surname}</p>
          </div>
        </section>

        <section style={classes.section}>
          <div>
            <p>Age</p>
          </div>
          <div>
            <p>{this.props.age}</p>
          </div>
        </section>
      </div>
    )
  }
}

const classes = {
  root: {
    width: '50%',
    maxWidth: '400px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxShadow: '1px 1px 2px 0px rgba(0,0,0,0.62)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '24px',
  },
  section: {
    width: '80%',
    display: 'flex',
    justifyContent: 'space-between',
  },
}
