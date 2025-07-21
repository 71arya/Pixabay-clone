import React, { useContext } from 'react';
import PixabayContext from '../Context/PixabayContext';

const Navbar = () => {
  const { fetchImageBy ,setQuery} = useContext(PixabayContext);

  return (
    <>
    <div className='container text-center my-3'>
      <button onClick={() => fetchImageBy("nature")} type="button" className="btn btn-outline-primary mx-3">Nature</button>
      <button onClick={() => fetchImageBy("science")} type="button" className="btn btn-outline-secondary mx-3">Science</button>
      <button onClick={() => fetchImageBy("computer")} type="button" className="btn btn-outline-success mx-3">Computer</button>
      <button onClick={() => fetchImageBy("buildings")} type="button" className="btn btn-outline-danger mx-3">Buildings</button>
      <button onClick={() => fetchImageBy("sports")} type="button" className="btn btn-outline-info mx-3">Sports</button>
      <button onClick={() => fetchImageBy("transportation")} type="button" className="btn btn-outline-light mx-3">Transportation</button>
      <button onClick={() => fetchImageBy("travel")} type="button" className="btn btn-outline-primary mx-3">Travel</button>
      <button onClick={() => fetchImageBy("food")} type="button" className="btn btn-outline-secondary mx-3">Food</button>
    </div>
    <div className='container' style={{width:"800px"}}>
       <input type="text" onChange={(e)=>setQuery(e.target.value)} class="form-control bg-dark text-light" ></input>
    </div>
    </>
    
  );
};

export default Navbar;
