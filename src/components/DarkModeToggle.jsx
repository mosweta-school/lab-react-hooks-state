import React from 'react'

function DarkModeToggle({ darkMode, toggle }){
  return (
    <button onClick={toggle}>
      {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
    </button>
  )
}

export default DarkModeToggle