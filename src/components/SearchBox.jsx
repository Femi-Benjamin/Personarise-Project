import React, { useState } from 'react'
import icons from '../constants/icons'
import Button from '../shared/Button'
import { filterInput } from '../hooks/filter'

const options = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig']

const SearchBox = ({
  filterItems,
  value,
  setValue,
  active,
  setActive,
  jobs,
}) => {
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState([])
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1)

  function handleInputChange(e) {
    setQuery(e)
    setSuggestions(filterInput(e, options))
    setSelectedSuggestionIndex(-1)
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
          (selectedSuggestionIndex + 1) % suggestions.length
        )
        setQuery(suggestions[selectedSuggestionIndex])
        break
      case 'Enter':
        event.preventDefault()
        if (selectedSuggestionIndex >= 0) {
          setQuery(suggestions[selectedSuggestionIndex])
          setSuggestions([])
        }
        break
      default:
        break
    }
  }

  const jobTitles = active && jobs.map((job) => job[active])

  return (
    <div className="bg-[#F7F7F8] pt-[48px] p-6 rounded-2xl mb-7">
      <div className="flex gap-4">
        <div>
          <input
            type="text"
            className="bg-white p-4 text-2xl rounded-lg border-[0.5px] border-[#CDD2D5] outline-none w-full pl-24"
            placeholder="Search..."
            value={query}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
              backgroundImage: `url(${icons.searchIcon})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '30px 10px',
            }}
          />
          {suggestions.length > 0 && query !== '' && (
            <ul>
              {suggestions.map((option, index) => (
                <li
                  key={option}
                  className={
                    index === selectedSuggestionIndex ? 'bg-red-900' : ''
                  }
                  onClick={() => handleSuggestionClick(option)}
                >
                  {option}
                </li>
              ))}
            </ul>
          )}
        </div>
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
