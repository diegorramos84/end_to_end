import React, { useState, useEffect } from 'react'
import { SearchForm, ShowCard, ShowList } from '../../components'

const Search = () => {
  const [search, setSearch] = useState('')
  const [showData, setShowData] = useState([])
  const [rating, setRating] = useState('')
  const [filteredRatings, setFilteredRatings] = useState([])

  useEffect(() => {
    searchAPI()
  }, [search])

  useEffect(() => {
    filterHandler()
  }, [rating])


  async function searchAPI() {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
    const rawData = await response.json()
    const data = rawData.map(show => show.show)
    setShowData(data)
    setFilteredRatings(data)
  }

  function filterHandler() {
    console.log('here')
    if (rating === 'all') {
      setFilteredRatings(showData)
    }
    if(rating === '0to4') {
      setFilteredRatings(showData.filter(show => show.rating.average <= 4))
    }
    if (rating === '4to7') {
      setFilteredRatings(showData.filter(show => (show.rating.average > 4 && show.rating.average <= 7) ))
    } if (rating === '7to10') {
      setFilteredRatings(showData.filter(show => show.rating.average > 7))
    }
  }

  return (
    <>
      <SearchForm getSeries={setSearch} setRating={setRating}/>
      <ShowList showData={showData} filteredRatings={filteredRatings} setShowData={setShowData}/>
    </>
  )
}

export default Search
