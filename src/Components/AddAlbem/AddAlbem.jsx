import React from "react";
import { useState } from "react";
import axios from "axios";
const AddAlbem = () => {
  const [state, setState] = useState({
    artist: "",
    albem: "",
    cover: "",
  });
  const [addAlbem, setAddAlbem] = useState([]);
  let id = 0;

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://api.imgur.com/3/image",
        {
          cover: state.cover,
        },
        {
          headers: {
            Authorization: "Client-ID YOUR_CLIENT_ID",
          },
        }
      )
      .then((response) => {
        let imageUrl = response.data.data.link;

        let newAlbum = {
          id: ++id,
          artist: state.artist,
          albem: state.albem,
          cover: imageUrl,
        };
        setAddAlbem([...addAlbem, newAlbum]);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ablem_title">Albem Title</label>
        <input
          type="text"
          name="albem"
          required="required"
          placeholder="Enter a title"
          onChange={handleChange}
        />
        <label htmlFor="artist">Artist</label>
        <input name="artist" onChange={handleChange} />
        <label htmlFor="albem_cover">upload Albem Cover</label>
        <input name="cover" onChange={handleChange} />
        <button type="submit">Add Albem</button>
      </form>
    </div>
  );
};

export default AddAlbem;
