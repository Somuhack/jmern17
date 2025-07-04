import React from 'react'

const CompositeComponents = ({children}) => {
  return (
    <>
    <h1>Welcome to Our Page</h1>
        {children}
    </>
  )
}

export default CompositeComponents