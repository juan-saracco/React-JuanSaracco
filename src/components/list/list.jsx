import React from 'react'

const List = ({frutas}) => {
  return (
    <ul>
        <li>{frutas[0]}</li>
        <li>{frutas[1]}</li>
        <li>{frutas[2]}</li>
    </ul>
  )
}

export default List