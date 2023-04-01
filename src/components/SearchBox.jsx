import React, { useState } from 'react'
import icons from '../constants/icons'
import Button from '../shared/Button'
import { filterInput } from '../hooks/filter'

const SearchBox = ({
  filterItems,
  value,
  setValue,
  active,
  setActive,
  jobs,
}) => {
  const [suggestions, setSuggestions] = useState([])
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(0)
  const options = active
    ? Array.from(new Set(jobs.map((job) => job[active])))
    : Array.from(new Set(jobs.map((job) => job.title && job.company )))
  console.log(options)

  function handleInputChange(e) {
    setValue(e)
    setSuggestions(filterInput(e, options))
    setSelectedSuggestionIndex(0)
  }

  function handleKeyDown(event) {
    switch (event.key) {
      case 'ArrowUp':
        event.preventDefault()
        setSelectedSuggestionIndex(
          (selectedSuggestionIndex - 1 + suggestions.length) %
            suggestions.length
        )
        break
      case 'ArrowDown':
        event.preventDefault()
        setSelectedSuggestionIndex(
          selectedSuggestionIndex === -1
            ? 0
            : (selectedSuggestionIndex + 1) % suggestions.length
        )
        break
      case 'Enter':
        event.preventDefault()
        if (selectedSuggestionIndex >= 0) {
          setValue(suggestions[selectedSuggestionIndex])
          setSuggestions([])
        }
        break
      default:
        break
    }
  }

  function handleSuggestionClick(item) {
    setValue(item)
    setSuggestions([])
  }

  return (
    <div className="bg-[#F7F7F8] pt-[48px] p-6 rounded-2xl mb-7">
      <div className="flex gap-4">
        <div
          className={` w-full relative ${
            suggestions.length > 0 &&
            value !== '' &&
            ' shadow-[0px_4px_8px_rgba(0,0,0,0.16)]'
          }`}
        >
          <input
            type="text"
            className={`bg-white p-4 lg:text-2xl md:text-xl text-lg rounded-lg border-[0.5px] border-[#CDD2D5] outline-none w-full pl-24 ${
              suggestions.length > 0 &&
              value !== '' &&
              ' border-b-0 rounded-b-none'
            }`}
            placeholder="Search..."
            value={value}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              backgroundImage: `url(${icons.searchIcon})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '30px 10px',
            }}
          />
          {suggestions.length > 0 && value !== '' && (
            <ul className=" rounded-b-lg  bg-white border-[0.5px] border-[#CDD2D5] border-t-0 absolute w-full shadow-[0px_4px_8px_rgba(0,0,0,0.16)]">
              {suggestions.map((option, index) => (
                <li
                  key={option}
                  className={
                    index === selectedSuggestionIndex
                      ? 'bg-gray-100 p-2 rounded-b-lg lg:text-2xl md:text-xl text-lg'
                      : ' p-2 lg:text-2xl md:text-xl text-lg rounded-b-lg '
                  }
                  onClick={() => handleSuggestionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
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
                dataActive={active === item.value ? true : false}
                outline={active === item.value ? false : true}
                className="max-w-[200px] bg-white "
                onClick={() => setActive(item.value)}
              >
                {item.name}
              </Button>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default SearchBox
