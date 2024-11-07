import React from 'react'
//import { detailsCardData,list } from '../data/Data'
import ListingDetails from './ListingDetails'
import { useLocation } from 'react-router-dom'
import { Card, Space, } from 'antd';

//import { MdAttachMoney, MdDirectionsSubway, MdLocationPin, MdSecurity,MdKitchen } from 'react-icons/md'
//import { GiBathtub, GiPathDistance } from 'react-icons/gi'



export default function DetailsCard({icon}) {
  
    const location = useLocation();
    const {Room} = location.state

  return (
    <div className=' flex items-center justify-center p-6'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            
            <Card
            style={{
                borderRadius: '12px',
                color:'black',
                height: '150px',
                textAlign: 'center',
                minWidth: '200px',
                boxShadow:'0 4px 8px rgba(8,9,10,0.1)',
            }}>
                <Space direction='horizontal' size='large' style={ { alignItems: 'center'}}>
                <div style={{ fontSize: '48px' }}>{icon}</div>
                    <h1>{Room.price}</h1>

                </Space>

            </Card>
        </div>
      
    </div>

  )
}

    