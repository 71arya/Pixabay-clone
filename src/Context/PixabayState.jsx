import React, { useEffect, useState } from 'react';
import Pixabaycontext from './PixabayContext';

const PixabayState = (props) => {
  const [imagedata, setImagedata] = useState([]);
   const [query, setQuery] = useState(['london']);
  const api_key = "51408567-889523d7334194d033d584f82";

  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo`);
      const data = await api.json();
      setImagedata(data.hits);
      console.log(data.hits);
    };
    fetchData();
  }, [query]);

  const fetchImageBy = async (cat) => {
    const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo`);
    const data = await api.json();
    setImagedata(data.hits);
    console.log(data.hits);
  };

  return (
    <Pixabaycontext.Provider value={{ imagedata, fetchImageBy,setQuery }}>
      {props.children}
    </Pixabaycontext.Provider>
  );
};

export default PixabayState;
