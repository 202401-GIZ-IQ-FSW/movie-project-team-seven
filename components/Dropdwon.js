import React from 'react';
import Select from "react-select";
import { useRouter } from 'next/navigation';

function Dropdwon({ name , options }) {
   // handle selection
   const router = useRouter();
   function handleSelect (input){
     console.log(input.value)
     if(input.value === "all") {
       router.push(`/movies`);
     } else{
       router.push(`/movies/genres/${input.value}`)
     }
   }
    // custom style for Select component 
    const styles ={
        control: (styles) => ({ 
            ...styles, 
            backgroundColor: 'transparent',
            color: 'white', 
            border:"none", 
            fontSize:"16px", 
            cursor: "pointer",
            width: "100px"
        }),
        option: (styles, {isSelected, isFocused}) => ({
          ...styles,
          backgroundColor : isFocused? "cyan": isSelected ? 'rgb(30, 223, 223)' : 'black',
          color: isSelected ? 'black' : 'white',
          cursor: "pointer",
      }),
        
        menu: (styles) => ({
            ...styles,
            backgroundColor: "black",
            borderRadius: 0,
            width: "150px"
        }),
        menuList: (styles) => ({
            ...styles,
        
            "::-webkit-scrollbar": {
              width: "4px",
            },
            "::-webkit-scrollbar-track": {
              background: "black"
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
                color: 'white',
            }
        },
        input:  (styles) => ({
          ...styles,
          color: "white"
        }),
        singleValue: (styles) => ({ 
            ...styles, 
            color: 'cyan', 
            width: "100px",
        }),
        }
    return (
      <div  className="hover:bg-gray-800 hover:rounded-lg hover:cursor-pointer">
        <Select 
        id={name}
        options={options} 
        defaultValue={null} 
        placeholder={name} 
        instanceId={name}
        onChange={(inputValue) => handleSelect(inputValue)}
        components={{
            IndicatorSeparator: () => null
          }}
        styles={styles}
        />
    </div>
  )
}

export default Dropdwon