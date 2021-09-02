import React from 'react'

/**
 * CollectUserInfo receives the following props
 *
 * @Object
 * values: { [fieldname]: String }
 *
 * @Func
 * onChange(event)
 *
 * @Func
 * onSubmit(event)
 */
export default class CollectUserInfo extends React.Component {
  render() {
    return (
      <>
        <h2>Update User Info</h2>
        <form style={classes.root} onSubmit={this.props.onSubmit}>
          <div style={classes.section}>
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={this.props.values?.name}
              onChange={this.props.onChange}
            />
          </div>

          <div style={classes.section}>
            <label for="name">Surname</label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={this.props.values?.surname}
              onChange={this.props.onChange}
            />
          </div>

          <div style={classes.section}>
            <label for="name">Age</label>
            <input
              type="text"
              id="age"
              name="age"
              value={this.props.values?.age}
              onChange={this.props.onChange}
            />
          </div>

          <button style={classes.button} type="submit">
            Submit
          </button>
        </form>
      </>
    )
  }
}

const classes = {
  root: {
    width: '50%',
    maxWidth: '400px',
    padding: '30px',
    boxSizing: 'border-box',
  },
  section: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  button: {
    width: '100%',
    height: '32px',
    borderRadius: '20px',
    marginTop: '16px',
  },
}
