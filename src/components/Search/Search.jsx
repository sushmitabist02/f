import React, { useEffect } from "react";
import styles from "./../Search/Search.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [nam, setNam] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    getReceipe();
  }, []);

  async function getReceipe() {
    const rec = await fetch(
      "https://forkify-api.herokuapp.com/api/search?q=cake"
    );
    const res = await rec.json();
    console.log(res);
    setData(res.recipes);
    console.log(data);
    console.log(nam);
  }

  const searchRecipe = () => {
    if (nam !== "") {
      axios
        .get(`https://forkify-api.herokuapp.com/api/search?q=${nam}`)
        .then((proRes) => proRes.data)
        .then((dt) => {
          setData(dt.recipes);
        });
    }
  };

  return (
    <>
      <div className={styles.search}>
        <input
          type="text"
          placeholder="Name of food item"
          onChange={(e) => setNam(e.target.value)}
        />
        <button onClick={searchRecipe}>Search</button>
      </div>

      <div className={styles.grd}>
        {data.length >= 1
          ? data.map((dat, idx) => {
              return <ProductItems key={idx} pdata={dat} />;
            })
          : "No such dish found"}
      </div>
    </>
  );
};

export default Search;

function ProductItems({ pdata, setCurr }) {
  const navigate = useNavigate();
  return (
    <div
      className={styles.bx}
      onClick={(e) => {
        navigate(`${pdata.recipe_id}`);
      }}
    >
      <img src={pdata.image_url} />
      <h4>{pdata.title}</h4>
    </div>
  );
}
