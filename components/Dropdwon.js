import React from 'react';
import Select from "react-select";

function Dropdwon({ name , options , setValue, setID }) {
    // custom style for Select component 
    
    function handleSelect(object){
      setValue(object.value);
      if(setID) setID(object.id);
    }
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
        // pass value to state using callback function
        onChange={handleSelect}
        instanceId={name}
        components={{
            IndicatorSeparator: () => null
          }}
        styles={styles}
        />
    </div>
  )
}

export default Dropdwon