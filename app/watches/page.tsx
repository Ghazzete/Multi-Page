import React from 'react'

const watchesData = [
  {id: 1, name: "KHAKI PILOT", Price: 14000, description: "Luxury watch" , image: '/img1.svg' },
  {id: 2, name: "SPIRIT ROSE", Price: 14000, description: "Luxury watch" , image: '/img2.svg' },
  {id: 3, name: "JUBILEE BLACK", Price: 14000, description: "Luxury watch" , image: '/img3.svg' },
  {id: 4, name: "DUCHEN", Price: 14000, description: "Luxury watch" , image: '/img4.svg' },
  {id: 5, name: "FOSIL ME3", Price: 14000, description: "Luxury watch" , image: '/img3.svg' },
  {id: 6, name: "LONGINES ROSE", Price: 14000, description: "Luxury watch" , image: '/img1.svg' },
]

function watches () {
  return (
    <div>
      <div className='watches'>
        {watchesData.map((watch) => (
          <div key={watch.id} className='watch-card'>
            <img src={watch.image} alt={watch.name}/>
            <h3>{watch.name}</h3>
            <p>{watch.description}</p>
            <div className='price'>${watch.Price}</div>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
       </div>
  )
}

export default watches 