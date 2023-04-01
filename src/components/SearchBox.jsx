import React from 'react'
import icons from '../constants/icons'
import Button from '../shared/Button'

const SearchBox = ({ filterItems, value, setValue, active, setActive }) => {
  return (
    <div className="bg-[#F7F7F8] pt-[48px] p-6 rounded-2xl mb-7">
      <div className="flex gap-4">
        <input
          type="text"
          className="bg-white p-4 text-2xl rounded-lg border-[0.5px] border-[#CDD2D5] outline-none w-full pl-24"
          placeholder="Search Jobs"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{
            backgroundImage: `url(${icons.searchIcon})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '30px 10px',
          }}
        />
        <Button
          className={`max-w-[200px] md:block hidden bg-white`}
          onClick={() => setActive(!active)}
        >
          Recommend
        </Button>
      </div>
      <div className="flex gap-4 my-7 flex-wrap">
        {filterItems.map((item) => (
          <>
            <div className=" md:w-60">
              <Button
                dataActive={active === item ? true : false}
                outline={active === item ? false : true}
                className="max-w-[200px] bg-white "
                onClick={() => setActive(item)}
              >
                {item}
              </Button>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default SearchBox
