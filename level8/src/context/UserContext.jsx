import React from 'react'

export const data = createContext()

const UserContext = ({children}) => {

  let username = "VIRTUAL CODE"
  return (
    <div>
      <data.Provider value={username}>
      {children}
      </data.Provider>
    </div>
  )
}

export default UserContext