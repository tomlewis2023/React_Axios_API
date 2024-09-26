import React, { useEffect, useState } from "react";
import axios from "axios";

const FetchAxios = () => {
  const [resourceType, setresourceType] = useState("character");
  const [items, setitems] = useState([]);
  const fetchApi = () => {
    axios
      .get(`https://rickandmortyapi.com/api/${resourceType}`)
      .then((response) => setitems(response.data.results))
      .catch((error) => console.log(error));
  };
  // console.log(items.results)

  const handleonchange = (e) => {
    const value = e.target.value;
    // console.log(value)
    setresourceType(value);
  };

  useEffect(() => {
    fetchApi();
  }, [resourceType]);

  return (
    <div>
      <div className="select_1">
        <label>User Selection</label>
        <select name="userselect" id="userselect" onChange={handleonchange}>
          <option value="character">CHARACTER</option>
          <option value="episode">EPISODE</option>
          <option value="location">LOCATION</option>
        </select>
      </div>
      {items.map((item,index) => {
        return (
          <ul className="item_1" key={index}>
            <li >
              {item.id} {item.name}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default FetchAxios;
