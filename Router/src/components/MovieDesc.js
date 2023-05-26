import { useNavigate } from 'react-router-dom';
  
  const MovieDescription =()=>{
    const navigate = useNavigate();


    
      return (
        <div>
          <h1>hsjkksjdkjsjkdjsjdkkdksjjdjsjdjskjdsjd</h1>
          <button onClick={() =>navigate(-1)}>Go back</button>
   </div>
      )
    };
    export default MovieDescription;