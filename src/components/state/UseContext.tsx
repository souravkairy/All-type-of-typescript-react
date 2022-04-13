import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const UseContext = () => {
    const theme = useContext(ThemeContext)
    return (
        <div>UseContext :{' '}
            <button style={{ backgroundColor: theme.dark.main }} >I am Context</button>
        </div>
    )
}

export default UseContext