import { useContext } from "react";
import { appContext } from "../context/Context";

export const SearchForm = () => {
  const {setsearchTerm} = useContext(appContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    setsearchTerm(searchValue);
    if(!searchValue) return;
  }
  return (
    <section>
      <h1 className="title">Unsplay images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input 
        type="text"
        className="form-input search-input"
        placeholder="cat"
        name="search" 
         />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  )
}
