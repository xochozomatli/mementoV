import { createContext, useContext, useEffect, useState } from "react"

const DateContext = createContext()

function useDate() {
  const context = useContext(DateContext)
  if (context === undefined) {
    throw new Error(`useDate must be used within a DateProvider`)
  }
  return context
}

export function DateProvider({ children }) {
    const today = new Date()
    const [ birthDate, setBirthDate ] = useState(today)

    const context = { today, birthDate, setBirthDate }

    return (
        <DateContext.Provider value={context}>
            {children}
        </DateContext.Provider>
    )
}


export default useDate
