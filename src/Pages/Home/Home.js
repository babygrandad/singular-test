import React from 'react'
import { Navigate , Outlet } from 'react-router-dom'
import styles from './Home.module.css'
import Topbar from '../../Components/Topbar/Topbar'

function Home() {
  return (

   <div className={`${styles['home-container']} `}>
    <aside className={` ${styles['aside-content']} `}>
      im Sidemenu
    </aside>
    <main className={` ${styles['main-content']} `}>
      <Topbar />
      <Outlet />
    </main>
   </div>
  )
}

export default Home