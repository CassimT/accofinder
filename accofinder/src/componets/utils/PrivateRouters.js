import React from 'react'
import { Outlet,Navigate } from 'react-router-dom';
import SingInPage from '../../pages/SingInPage';

function PrivateRouters({ authToken }) {
    const auth = {'token':true};
  return (
    auth.token ? <Outlet/> : <SingInPage/>
  )
}

export default PrivateRouters