import React, { useState ,useMemo} from "react";
import ReactPaginate from "react-paginate";
import { list } from "../../data/Data"; 
import { useNavigate } from "react-router-dom";

const ListingCard = ({lists = []}) => {
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; 
  // Calculate total pages
  const fullList = useMemo(() => {
    return lists.length > 0 ? lists : list;
  }, [lists]);
  const pageCount = Math.ceil(fullList.length / itemsPerPage);

  // Get current items based on page
  const displayedItems = fullList.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  //handle go to details
  const goToDetails = (props) => {
    navigate("/details",{state:{Room: props}})
  };

  return (
    <div className='max-w-7xl mx-auto mt-4'>
        <ReactPaginate
        previousLabel={'< Previous'}
        nextLabel={'Next >'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'flex justify-center space-x-2 mb-8 mt-0'}
        activeClassName={'bg-blue-500 text-white'}
        pageClassName={'py-2 px-3 border rounded-md'}
        previousClassName={'py-2 px-3 border rounded-md'}  
        nextClassName={'py-2 px-3 border rounded-md  transition duration-500 hover:scale-95'}
        disabledClassName={'text-gray-300 cursor-not-allowed  transition duration-500 hover:scale-95'}
      />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
        {displayedItems.map((val, index) => {
          const { cover, status, name, price, type, rating, distance } = val;
          return (
            <div className='bg-white shadow-md rounded-lg' key={index} style={{ maxWidth: '300px' }}>
              <div className='img'>
                <img src={cover} alt='' className='w-full h-40 object-cover rounded-t-lg' />
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
                    <i className='fa fa-star text-yellow-500 text-sm'></i>
                    <span className='text-gray-600 text-sm'>{rating}</span>
                  </div>
                </div>
                <h4 className='text-base font-medium text-gray-800'>{name}</h4>
                <p className='text-gray-500 text-sm flex items-center mt-1'>
                  <i className='fa fa-route mr-1'></i> {distance}Km
                  <label className='text-gray-500 ml-1'>from Campus</label>
                </p>
              </div>
              <div className='border-t border-gray-200 p-3 flex justify-between items-center'>
                <div className="flex flex-col">
                  <span className='text-gray-600 text-sm'>{type}</span>
                  <button className='bg-gray-600 text-white py-1 px-3 rounded opacity-30 mt-1 text-sm'>{price}</button>
                </div>
                <button className='bg-black text-white py-1 px-4 rounded-full mt-auto text-sm  transition duration-500 hover:scale-95'
                  onClick={() => goToDetails(val)}
                >
                  More
                </button>
              </div>
            </div>
          );
        })}
      </div>
        
      <ReactPaginate
        previousLabel={'< Previous'}
        nextLabel={'Next >'}
        breakLabel={'...'}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={'flex justify-center space-x-2 mt-4'}
        activeClassName={'bg-blue-500 text-white'}
        pageClassName={'py-2 px-3 border rounded-md'}
        previousClassName={'py-2 px-3 border rounded-md'}  
        nextClassName={'py-2 px-3 border rounded-md  transition duration-500 hover:scale-95'}
        disabledClassName={'text-gray-300 cursor-not-allowed  transition duration-500 hover:scale-95'}
      />
    </div>
  );
};

export default ListingCard;
