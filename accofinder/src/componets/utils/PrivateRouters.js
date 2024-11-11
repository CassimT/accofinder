import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import SingInPage from '../../pages/SingInPage';

function PrivateRouters({ authToken }) {
    const token = localStorage.getItem("token")
  return (
    token ? <Outlet/> : <SingInPage/>
  )
}

export default PrivateRouters