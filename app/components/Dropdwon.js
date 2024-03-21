import React from 'react';
import Select from "react-select";

function Dropdwon({ name , options , setValue }) {
    
  return (
    <div  className="hover:bg-gray-800 hover:rounded-lg hover:cursor-pointer">
        <Select 
        options={options} 
        defaultValue={null} 
        placeholder={name} 
        onChange={setValue}
        instanceId={name}
        className='w-fit text-red-500'
        components={{
            IndicatorSeparator: () => null
          }}
        styles={{
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
                backgroundColor : isSelected ? 'red' : isFocused? "tomato": 'black',
                color: isSelected ? 'black' :isFocused? "red": 'white',
            }),
            
            menu: (styles) => ({
                ...styles,
                // override border radius to match the box
                borderRadius: 0,
                width: "150px"
            }),
            placeholder: (styles) => {
                return {
                    ...styles,
                    color: 'white',
                }
            },
            singleValue: (styles) => ({ 
                ...styles, 
                color: 'red', 
            }),
            }}
        />
    </div>
  )
}

export default Dropdwon