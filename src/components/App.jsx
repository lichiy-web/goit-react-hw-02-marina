// import React from 'react'
// import reactLogo from '../assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Profile from './profile/Profile'
import userData from '../userData.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
import Header from './header/Header'

function App() {
  return (
    <>
      <h1>Vite + React</h1>
      {/* <div>
    <h2>Best selling</h2>
    <Product
        name="Tacos With Lime"
        // imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
  </div> */}
  
    <Header />
     <Profile 
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
     <FriendList friends = {friends}/>
     <TransactionHistory items={transactions}/>
     </>
  )
}

export default App
