import "./searchMovie.css";
import ReactStars from "react-stars";

const SearchMovie = ({ setNameSearch, nameSearch, setRatingSearch }) => {
  console.log(nameSearch, "ff");
  const ratingChanged = (newRating) => {
    console.log(newRating, "ratinggggg");
    setRatingSearch(newRating);
  };
  return (
    <div className="search-container">
      <input type="text" onChange={(e) => setNameSearch(e.target.value)} />
      <ReactStars
        count={5}
        size={24}
        color2={"#ffd700"}
        edit={true}
        onChange={ratingChanged}
      />
    </div>
  );
};
export default SearchMovie;
