import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { appContext } from "../context/Context";

const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_REQUEST_URL}`;

export const Gallery = () => {
  const {searchTerm} = useContext(appContext);
  const {data, isLoading, isError} = useQuery({
    queryKey:['cats', searchTerm],
    queryFn: async() => {
      const response = await(axios.get(`${url}&query=${searchTerm}`));
      return response.data.results;
    }
  })
  if(isLoading) return (
  <section className="image-container">
    <h4>Loading...</h4>
  </section>
  );
  if(isError) return (
    <section className="image-container">
      <h4>where was an error</h4>
    </section>
  )

  if(data.length < 1) return (
    <section>
      <h4>image not found</h4>
    </section>
  )
  return (
    <section className="image-container">
      {data.map(({id, urls, alt_description}) => {
      const url = urls?.regular;
      return(
        <img key={id} src={url} alt={alt_description} className="img"></img>
      )
      })}
    </section>
  )
}
