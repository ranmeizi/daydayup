import React from 'react'

export default function (props) {
  return <div>{props.match.params.id}</div>
}