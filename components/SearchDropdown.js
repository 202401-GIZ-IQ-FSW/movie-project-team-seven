import React from 'react';
import AsyncSelect from 'react-select/async';
 
export default function SearchDropdown({setSearchValue}) { 
 
  // handle selection
  function handleChange (value){
    setSearchValue(value);
  }
  let isLoading;

  // load options using API call
  const loadOptions = (inputValue) => {
    isLoading = true;
    return fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129&query=${inputValue}`)
    .then(res => res.json())
    .then(data => {
      isLoading=false;
      return data.results;
    });
  };
 
  const styles= {
    control: (styles) => ({ 
        ...styles, 
        backgroundColor: 'transparent',
        color: 'white', 
        border:"none", 
        fontSize:"16px", 
        cursor: "pointer",
    }),
    option: (styles, {isSelected, isFocused}) => ({
        ...styles,
        backgroundColor : isFocused? "tomato": isSelected ? 'red' : 'black',
        color: isFocused? "red": isSelected ? 'black' : 'white',
    }),
    
    menu: (styles) => ({
        ...styles,
        backgroundColor: "black",
        borderRadius: 0,
        width: "250px"
    }),
    menuList: (styles) => ({
      ...styles,
      "::-webkit-scrollbar": {
        width: "4px",
      },
      "::-webkit-scrollbar-track": {
        background:"black",
      },
      "::-webkit-scrollbar-thumb": {
        background: "#888"
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "red",
        cursor:"grab"
      },
      "::-webkit-scrollbar-thumb:active": {
        cursor:"grabbing"
      }
    }),
    placeholder: (styles) => {
        return {
            ...styles,
            color: 'gray',
        }
    },
    input:  (styles) => ({
            ...styles,
            color: "white"
    }),
    singleValue: (styles) => ({ 
        ...styles, 
        color: 'red', 
    }),
  }

  return (
    <div className="App">
      <AsyncSelect
        cacheOptions
        defaultOptions
        getOptionLabel={e => e.title}
        getOptionValue={e => e.id}
        loadOptions={loadOptions}
        onChange={handleChange}
        styles={styles}
        components={{ DropdownIndicator:() => null , IndicatorSeparator:() => null , NoOptionsMessage:()=><p className="text-gray-500 px-2">Ready for fun?</p>}}
        placeholder= 'Search a movie...'
        isLoading= {isLoading}
      />
    </div>
  );
}