import React, { useEffect, useState } from 'react'
import { ImageGallery } from '../../components'

const Shows = () => {
  const [shows, setShows] = useState([])
  const [loading, setLoading] = useState(true)

  async function fetchShows() {
    try {
      const response = await fetch('https://api.tvmaze.com/shows')
      const data = await response.json()
      setShows(data)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchShows()
  }, [])

  return (
    <>
      {
        loading ? <p>Loading...</p> : <ImageGallery shows={shows} />
      }
    </>
  )
}

export default Shows
