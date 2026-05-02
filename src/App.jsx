import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  //  Dark mode state
  const [darkMode, setDarkMode] = useState(false)

  //  Cart state
  const [cart, setCart] = useState([])

  //  Category state
  const [category, setCategory] = useState('all')

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product])
  }

  // Filter products
  const filteredProducts =
    category === 'all'
      ? sampleProducts
      : sampleProducts.filter((p) => p.category === category)

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <h1>🛒 Shopping App</h1>

      {/*  Dark Mode */}
      <DarkModeToggle darkMode={darkMode} toggle={toggleDarkMode} />

      {/*  Category Filter */}
      <label>Filter by Category: </label>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
      </select>

      {/*  Pass filtered products + addToCart */}
      <ProductList products={filteredProducts} addToCart={addToCart} />

      {/*  Cart */}
      <Cart cart={cart} />
    </div>
  )
}

export default App