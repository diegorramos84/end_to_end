import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShowCard } from '../../components'

const Show = () => {
  const [show, setShow] = useState( {image: {}, rating: {}} )
  const { id } = useParams()

  useEffect(() => {
    async function fetchShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`)
      const data = await response.json()
      setShow(data)
    }

    fetchShow()
  }, [])

  return (
    <main>
      <ShowCard show={show} />
    </main>
  )
}

export default Show
