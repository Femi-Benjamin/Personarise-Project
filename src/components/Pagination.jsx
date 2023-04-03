import React from 'react'

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalPages,
}) => {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }
  return (
    <div className="flex mt-6 justify-center">
      {pageNumbers.map((number) => (
        <button
          key={number}
          className={`${
            currentPage === number ? 'bg-[#071D2E] text-white' : 'bg-white '
          } font-bold py-2 px-4 rounded`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </button>
      ))}
    </div>
  )
}

export default Pagination
