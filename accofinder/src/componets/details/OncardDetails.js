//import { Space } from 'antd'
import React from 'react'
import DetailsCard from './DetailsCard'
import { EnvironmentOutlined, CompassOutlined,
     StarOutlined, HomeOutlined, CheckCircleOutlined,DollarOutlined
     } from '@ant-design/icons';
import { useLocation } from 'react-router-dom';




export default function OncardDetails() {

    const location = useLocation();
    const {Room} = location.state

  return (
    <>
     <div className='grid h-auto w-auto sm:w-auto md:w-auto lg:w-[980px] items-center p-2'>
        <DetailsCard 
      
        title={"House Description"}
        value={Room.description}
        />

    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-8 p-4">

    <DetailsCard 
        icon={
            <DollarOutlined
                style={{
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                }}
            />
        }
        title={"Price"}
        value={Room.price}
    /> 

    <DetailsCard 
        icon={
            <EnvironmentOutlined
                style={{
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                }}
            />
        }
        title={"Location"}
        value={Room.location}
    />

    <DetailsCard 
        icon={
            <StarOutlined
                style={{
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                }}
            />
        }
        title={"Rating"}
        value={Room.rating}
    />

    <DetailsCard 
        icon={
            <CompassOutlined
                style={{
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                }}
            />
        }
        title={"Distance"}
        value={Room.distance}
    />

    <DetailsCard 
        icon={
            <HomeOutlined
                style={{
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                }}
            />
        }
        title={"Room Type"}
        value={Room.roomtype}
    />

    <DetailsCard 
        icon={
            <CheckCircleOutlined
                style={{
                    color: "green",
                    backgroundColor: "rgba(0,255,0,0.25)",
                    borderRadius: 20,
                    fontSize: 24,
                    padding: 8,
                }}
            />
        }
        title={"Room Status"}
        value={Room.available}
    />

   
</div>
</>
  )
}
