<<<<<<< HEAD
import React from 'react'
import DetailsCard from '../details/DetailsCard'
=======
import React, { useEffect, useState } from 'react';
import {
  EyeOutlined, 
  BookOutlined,
   ProfileOutlined, 
  UserOutlined,
  DollarCircleOutlined
} from "@ant-design/icons";
import { Space } from 'antd';
import DashboardCard from './DashboardCard';

>>>>>>> 8bdeaa16f0937d9161a9ae05d20854553a5f5ddf
export default function Dashboard() {
   // Initial state based on window size
  const [isVertical, setIsVertical] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(window.innerWidth < 1119);
    };
    window.addEventListener('resize', handleResize);
    handleResize(); 

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center max-w-full p-4">
      <Space size={20} direction={isVertical ? "vertical" : "horizontal"} style={{ width: '80%', justifyContent: 'center' }}>
        <DashboardCard
          icon={
            <EyeOutlined
              style={{
                color: "green",
                backgroundColor: "rgba(0,255,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Viewers"}
        />
        <DashboardCard
          icon={
            <ProfileOutlined
              style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Total Posted"}
        />
        <DashboardCard
          icon={
            <BookOutlined
              style={{
                color: "purple",
                backgroundColor: "rgba(0,255,255,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Booked"}
        />
        <DashboardCard
          icon={
            <DollarCircleOutlined
              style={{
                color: "red",
                backgroundColor: "rgba(255,0,0,0.25)",
                borderRadius: 20,
                fontSize: 24,
                padding: 8,
              }}
            />
          }
          title={"Revenue"}
        />
      </Space>
    </div>
  );
>>>>>>> 8bdeaa16f0937d9161a9ae05d20854553a5f5ddf
}
