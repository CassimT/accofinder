import React from "react";
import { list } from "../../data/Data";
import { useNavigate} from "react-router-dom";

const ListingCard = () => {
  const navigate = useNavigate();
  const goToDetails = ()=> {
    navigate("/details");
  }

  return (
    <>
      <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6'> {/* Responsive grid */}
        {list.map((val, index) => {
          const { cover, status, name, price, type, rating, distance } = val;
          return (
            <div className='bg-white shadow-md rounded-lg' key={index} style={{ maxWidth: '300px' }}> {/* Adjust card width */}
              <div className='img'>
                <img src={cover} alt='' className='w-full h-40 object-cover rounded-t-lg' /> {/* Adjust height */}
              </div>
              <div className='p-4'>
                <div className='flex justify-between items-center mb-3'>
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      status === "not available" ? "bg-orange-100 text-orange-600" : "bg-green-100 text-green-600"
                    }`}
                  >
                    {status}
                  </span>
                  <div className='flex items-center space-x-1'>
                    <i className='fa fa-star text-yellow-500 text-sm'></i> {/* Adjust icon size */}
                    <span className='text-gray-600 text-sm'>{rating}</span> {/* Adjust font size */}
                  </div>
                </div>
                <h4 className='text-base font-medium text-gray-800'>{name}</h4> {/* Adjust font size */}
                <p className='text-gray-500 text-sm flex items-center mt-1'>
                  <i className='fa fa-route mr-1'></i> {distance}Km
                  <label className='text-gray-500 ml-1'>from Campus</label> {/* Adjust spacing */}
                </p>
              </div>
              <div className='border-t border-gray-200 p-3 flex justify-between items-center'>
                <div className="flex flex-col">
                  <span className='text-gray-600 text-sm'>{type}</span> {/* Adjust font size */}
                  <button className='bg-gray-600 text-white py-1 px-3 rounded opacity-30 mt-1 text-sm'>{price}</button> {/* Adjust button size */}
                </div>
                <button className='bg-black text-white py-1 px-4 rounded-full mt-auto text-sm'
                  onClick={goToDetails}
                    
                >More</button> {/* Adjust button size */}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ListingCard;
