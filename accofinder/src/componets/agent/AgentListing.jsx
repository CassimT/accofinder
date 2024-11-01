import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Input, Button } from 'antd'; 
import { EditOutlined, DeleteOutlined } from '@ant-design/icons'; 
import { list } from '../data/Data';

const { Search } = Input;

function AgentListing() {
  const [records, setRecord] = useState(list);
  const navigate = useNavigate();

  const handleFilter = (value) => {
    const newData = list.filter((row) => {
      return row.name.toLowerCase().includes(value.toLowerCase());
    });
    setRecord(newData);
  };

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'hostelName',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (text) => <span className="text-sm">{text}</span>, // Smaller text
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      render: (text) => <span className="text-sm">{text}</span>, // Smaller text without dollar sign
    },
    {
      title: 'Rating',
      dataIndex: 'rating',
      key: 'rating',
      sorter: (a, b) => a.rating - b.rating,
      render: (text) => <span className="text-sm">{text}</span>, // Smaller text
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div className="flex flex-col sm:flex-row gap-2"> {/* Stack buttons in a column on small screens */}
          <Button
            icon={<EditOutlined />} 
            className="bg-blue-500 hover:bg-blue-600 text-white text-xs"
            onClick={() => navigate(`/edit/${record.name}`)} 
            size="small"
          >
            Edit
          </Button>
          <Button
            icon={<DeleteOutlined />} 
            className="bg-red-500 hover:bg-red-600 text-white text-xs"
            onClick={() => {/* Delete action */}}
            size="small"
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full max-w-4xl mx-auto gap-3 p-4">
      <Search
        placeholder="Search"
        enterButton
        onSearch={handleFilter}
        className="mb-2"
      />
      <Table
        columns={columns}
        dataSource={records}
        rowKey="name" 
        pagination={{ pageSize: 4 }} 
        className="rounded-lg shadow-md w-full"
        size="small" //small size for the table
      />
    </div>
  );
}

export default AgentListing;
