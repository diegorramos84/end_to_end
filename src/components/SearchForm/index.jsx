import React, { useState } from 'react'

const SearchForm = ({ getSeries, setRating }) => {
  const [show, setShow] = useState('')

  const handleInput = (e) => {
    setShow(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    getSeries(show)
    setShow('')
    setRating('all')
    document.querySelector('#rating-selector').selectedIndex = 0
  }

  const handleRating = (e) => {
    setRating(e.target.value)
  }

  return (
      <form role='search' onSubmit={handleSubmit}>
        <label htmlFor="series">Series</label>
        <input
          type="text"
          id='series'
          onChange={handleInput}
          value={show}
          placeholder='What are you looking for'
          required
        />
        <input type="submit" value="Search" />
        <select defaultValue={'none'}onChange={handleRating} name="rating" id="rating-selector"className="filter-movies">
          <option value="none" disabled>Filter by rating</option>
          <option value="all">All</option>
          <option value="7to10">7 to 10 </option>
          <option value="4to7">3 to 7 </option>
          <option value="0to4">0 to 3 </option>
        </select>
      </form>
  )
}

export default SearchForm
