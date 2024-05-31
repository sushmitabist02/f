import React from 'react'
import styles from './../Header/Header.module.css'
import logo from 'D:/REACT PROJECTS/FOOD-RECEIPE/src/assets/logo.png'
const Header = () => {
  return (
    <div>
      <div className={styles.head}>
        {/* <img src={logo} style={styles.log}/> */}
        <h1 >
            Food Receipe
        </h1>
      </div>
    </div>
  )
}

export default Header
