import React from "react";
import { useState } from "react";

const AddAlbem = () => {
  const [addAlbem, setAddAlbem] = useState("");
  const [artist, setArtist] = useState("");
  const [addCover, setAddCover] = useState("");

  const handleSubmit = () => {
    const albems = [
      {
        id: "1",
        artist: "A. R. Rehman",
        albem: "",
        cover: "",
      },
    ];
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="ablem_title">Albem Title</label>
        <input
          type="text"
          name="title"
          required="required"
          placeholder="Enter a title"
          value={addAlbem}
          onChange={(e) => setAddAlbem(e.target.value)}
        />
        <label htmlFor="artist">Artist</label>
        <input value={artist} onChange={(e) => setArtist(e.target.value)} />
        <label htmlFor="albem_cover">upload Albem Cover</label>
        <input value={addCover} onChange={(e) => setAddCover(e.target.value)} />
      </form>
    </div>
  );
};

export default AddAlbem;
