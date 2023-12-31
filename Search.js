import React,{useState} from 'react'

var data= require("../mock_data.json");

export const Search = () => {
    const [value,setValue]= useState('');
    const onChange= (event)=>{
        setValue(event.target.value);
    }
    const onSearch= (searchTerm)=>{
        setValue(searchTerm);
        console.log('search',searchTerm);
    }
  return (
    <div>
        <div className='search-container'>
            <div className='search-inner'>
                <input type="text" value={value} onChange={onChange} />
                <button onClick={()=>onSearch(value)}>Search</button>
            </div>
            <div className='dropdown'>
                {data.filter(item=>{
                    const searchTerm= value.toLowerCase();
                    const fullName= item.full_name.toLowerCase();
                    return searchTerm && fullName.startsWith(searchTerm) && fullName!==searchTerm;
                }).slice(0,4)
                .map((item)=>{
                    <div onClick={()=>onSearch(item.full_name)} 
                    className='dropdown-row' 
                    key= {item.full_name}
                    >
                    {item.full_name}</div>
                })}
            </div>
        </div>
    </div>
  )
}
