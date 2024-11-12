import React from 'react'
import { ExclamationCircleOutlined } from '@ant-design/icons';

export default function PaymentHistory() {
  return (
    <div className=' flex flex-col'>
           <ExclamationCircleOutlined
            style={{
                color: "blue",
                backgroundColor: "rgba(0,0,255,0.25)",
                borderRadius: 20,
                fontSize: 48,
                padding: 8,
              }}
           />
           <h1>No Payment Histroy</h1>
           
    </div>
  )
}
