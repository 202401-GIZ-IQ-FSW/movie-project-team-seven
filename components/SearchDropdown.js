import React from 'react';
import AsyncSelect from 'react-select/async';
import { useRouter } from 'next/navigation';
 
export default function SearchDropdown() { 

  // handle selection
  const router = useRouter();
  function handleSelect (input){
    console.log(input.id)
    if(isNaN(input.id)) {
      router.push(`/search/${input.id}`);
    } else{
      router.push(`/movies/${input.id}`)
    }
  }
  
  let isLoading;
  
  // load options using API call
  const loadOptions = (inputValue) => {
    isLoading = true;
    return fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&include_video=false&language=en-US&api_key=ba21689db16b6c3bc58c8f5c53ebd129&query=${inputValue}`)
    .then(res => res.json())
    .then(data => {
      isLoading=false;
      if(inputValue) {
        return (data.results.length > 0)? [{title: inputValue , id: inputValue} , ...data.results]: []
  }});
  };
 
  const styles= {
    control: (styles) => ({ 
        ...styles, 
        backgroundColor: 'transparent',
        color: 'white',
        border:0, 
        boxShadow: 'none',
        fontSize:"14px", 
        cursor: "pointer",
    }),
    option: (styles, {isSelected, isFocused}) => ({
        ...styles,
        backgroundColor : isFocused? "cyan": isSelected ? 'rgb(30, 223, 223)' : 'black',
        color: isSelected ? 'black' : 'white',
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
        background: "cyan",
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
        color: 'cyan', 
    }),
  }

  return (
      <AsyncSelect
        instanceId='search'
        name='search'
        cacheOptions
        defaultOptions
        getOptionLabel={movie => movie.title}
        getOptionValue={movie => movie.id}
        loadOptions={loadOptions}
        onChange={(inputValue) =>handleSelect(inputValue)}
        styles={styles}
        components={{ DropdownIndicator:(() => <i className="fa-solid fa-magnifying-glass text-white"></i>),
        IndicatorSeparator:() => null }}
        noOptionsMessage={({inputValue}) => !inputValue ? "Start the fun!" : "Check your spelling..."}
        placeholder= 'Search a movie...'
        isLoading= {isLoading}
      />
  );
}