import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import styles from "./../Recipe/Recipe.module.css";
import { useParams } from "react-router-dom";

const Recipe = () => {
  const params = useParams();
  const { id } = params;
  const [detailedData, setDetailedData] = useState([]);
  const [back, setBack] = useState(false);

  useEffect(() => {
    if (id !== "") {
      axios
        .get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        .then((proRes) => proRes.data)
        .then((dt) => {
          setDetailedData(dt.recipe);
        });
    }
  }, []);

  return (
    <>
      <div>
        <div className={styles.outer}>
          <div className={styles.bx}>
            <h3>{detailedData?.title}</h3>
            <img className={styles.pic} src={detailedData?.image_url} />
            {detailedData?.ingredients?.map((dat, idx) => {
              return <ProductItem key={idx} pdata={dat} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Recipe;
function ProductItem({ pdata }) {
  return (
    <>
      <li>{pdata}</li>
    </>
  );
}
