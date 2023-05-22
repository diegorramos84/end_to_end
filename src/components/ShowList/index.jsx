import React from 'react'
import ShowCard from '../ShowCard'

const ShowList = ({ showData, filteredRatings}) => {
  return (
    <div className="shows">
      {
        filteredRatings.filter(show => show.image ? true : false)
          .map(show => <ShowCard key={show.id} show={show}/>)
      }
    </div>
  )
}

export default ShowList
