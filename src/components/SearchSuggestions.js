import React from 'react'

const SearchSuggestions = ({searchSuggestion}) => {
  return (
    <div>
        <li className="px-4 py-2 hover:bg-gray-100">{searchSuggestion}</li>
    </div>
  )
}

export default SearchSuggestions