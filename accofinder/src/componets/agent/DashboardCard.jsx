import React from 'react';
import { Card, Space, Statistic } from 'antd';

export default function DashboardCard({ icon, title, value }) {
  return (
    <Card 
      style={{ 
        borderRadius: '12px',      
        height: '150px',     
        textAlign: 'center',   
        minWidth: '200px',    
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
      }}
    >
      <Space direction="horizontal" size="large" style={{ alignItems: 'center' }}>
        <div style={{ fontSize: '48px' }}>{icon}</div>
        <Statistic title={title} value={value} />
      </Space>
    </Card>
  );
}
