const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <img src={data.place.pic} alt="Image of Place" width="400px" />
            <h2>Rating</h2>
            <p>Not Rated</p>
            <h2>Description</h2>
            <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
            <h2>Comments</h2>
            <p>No comments yet!</p>
          </main>
        </Def>
    )
}

module.exports = show