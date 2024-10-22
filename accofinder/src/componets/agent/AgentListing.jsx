import React from 'react';
import { useNavigate } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import { list } from '../data/Data';
import { useState } from 'react';

function AgentListing(props) {
    const [records,setRecord] = useState(list)
    const handleFilter = (event)=> {
        const newData = list.filter(row => {
            return row.name.toLowerCase().includes(event.target.value.toLowerCase());
        })
        setRecord(newData)
    }
    const navigate = useNavigate();
    const columns = [
        {   
            name: 'Image',
            selector: 'imgPath',
            cell: row => <img src={row.cover} alt="House" className="w-24 cursor-pointer" />
        },
        { 
            name: 'Hostel Name',
            selector: row => row.hostelName,
            sortable: true,
            cell: row => <div className="text-gray-800">{row.hostelName}</div>,
        },
        { 
            name: 'Price',
            selector: row => row.price,
            sortable: true,
            cell: row => <div className="text-gray-800">{row.price}</div>,
        },
        { 
            name: 'Status',
            selector: row => row.status,
            cell: row => <div className={`text-sm {row.status === 'Available' ? 'text-green-600' : 'text-red-600'}`}>{row.status}</div>,
        },
        { 
            name: 'Room Capacity',
            selector: row => row.roomCapacity,
            sortable: true,
            cell: row => <div className="text-gray-800">{row.roomCapacity}</div>,
        },
        {  
            name: 'Actions',
            button: true,
            cell: row => (
                <button 
                    className='bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white rounded-md py-2 px-4'
                    onClick={() => goTo(row)}
                >
                    Book
                </button>
            ),
        }
    ];

    function goTo(props) {
        navigate(`/MakePaymentPage`, { state: { House: props } });
    }
   { /*function gotDetails(props) {
        navigate(``,{ state: { House: props } })
    }*/}

    return (
        <div className='flex flex-col justify-between justify-items-center w-11/12 m-auto gap-3'>
        <input type='text' 
            placeholder='Search'
            name='search'
            aria-label='Search'
            className=' w-80 px-3 py-2 focus:outline-none placeholder-gray-500 text-black rounded-md border-non ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2'
            onChange={handleFilter}
        >
        </input>
            <DataTable
                columns={columns}
                data={records} 
                fixedHeader
                pagination
                selectableRows
                className="border border-gray-300 rounded-lg shadow-md"
                customStyles={{
                    headRow: {
                        style: {
                            backgroundColor: 'rgba(243, 244, 246, 1)', 
                        },
                    },
                    rows: {
                        style: {
                            minHeight: '48px',
                            '&:nth-of-type(odd)': {
                                backgroundColor: 'rgba(249, 250, 251, 1)', 
                            },
                        },
                    },
                    pagination: {
                        style: {
                            backgroundColor: 'rgba(243, 244, 246, 1)', 
                        },
                    },
                }}
            />
        </div>
    );
}

export default AgentListing;
