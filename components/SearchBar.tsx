"use client"

import React, { useState, Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'

const SearchBar = () => {
  const options = ['dashboard', 'avatar', 'shop', 'courses', 'friends', 'assignments']
  const [option, setOption] = useState('')
  const [query, setQuery] = useState('')

  const filteredOptions = query === '' ? options : options.filter((o) => {
    return o.toLowerCase().includes(query.toLowerCase())
  })

  return (
    <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
      <Combobox value={option} onChange={setOption}>
        <Combobox.Input onChange={(event) => {setQuery(event.target.value)}} className={" w-[220px] h-[40px] p-4 rounded-lg bg-light-white outline-none cursor-pointer text-sm shadow-components"} />
        <Combobox.Options>
          {filteredOptions.map((o) => (
            <Combobox.Option key={o} value={o} as={Fragment} className={"relative mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm;"}>
              {({ active, selected }) => (
                <li
                className={`${
                  active ? 'bg-blue-500 text-white' : 'bg-white text-black'
                }`}
              >
                {o}
                </li>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  )
}

export default SearchBar