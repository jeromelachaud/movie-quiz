import PropTypes from 'prop-types'
import React from 'react'

Error.propTypes = {
  error: PropTypes.string.isRequired,
}

export default function Error({ error }) {
  return (
    <aside>
      <p>
        <b>{error}</b>
      </p>
    </aside>
  )
}
