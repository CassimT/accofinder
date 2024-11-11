import React from 'react'
//import { detailsCardData,list } from '../data/Data'
//import ListingDetails from './ListingDetails'
//import { useLocation } from 'react-router-dom'
import { Card} from 'antd';


//import { MdAttachMoney, MdDirectionsSubway, MdLocationPin, MdSecurity,MdKitchen } from 'react-icons/md'
//import { GiBathtub, GiPathDistance } from 'react-icons/gi'



export default function DetailsCard({icon, title, value}) {
  
    
  return (          
            <Card
                style={{
                    borderRadius: '12px',
                    color:'black',
                    height: '150px',
                    textAlign: 'center',
                    minWidth: '300px',
                    boxShadow:'0 4px 8px rgba(8,9,10,0.1)',
                }}>  
                <div style={{ fontSize: '' }}>{icon}</div>
                <h1>{title}</h1>
                <h1>{value}</h1>
            </Card>

  )
}

    