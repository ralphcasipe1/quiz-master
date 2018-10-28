import React from 'react'

export default ({ content }) => (
  <span dangerouslySetInnerHTML={{__html: content}} />
)