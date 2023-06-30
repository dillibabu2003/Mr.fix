import React from 'react'
import './MainDash.css'
import Cards from '../Cards/Cards'
import Table from '../Table/Table'
import Buttons from '../Buttons/Buttons';

const MainDash = () => {
  return (
    <div className="MainDash">
        <h1>DashBoard</h1>
        <Cards/>
        <Buttons/>
        <Table/>
    </div>
  )
}

export default MainDash