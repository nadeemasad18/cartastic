'use client'
import React from 'react'
import SearchManufacturer from './SearchManufacturer';
import {useState} from 'react'

const SearchBar = () => {
  const [manufacturer, setManufacturer] =useState('')

  const handleSearch=() => {};
  return (
    <form className='searchbar' onSubmit={handleSearch}>
      <div className='searchbar__item'>
        {/* Implementing a combobox searchbar using HeadlessUI */}
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        
        />

      </div>
    </form>
  )
}

export default SearchBar