import React, { useEffect } from 'react'
import styles from './../Search/Search.module.css'
import { useState } from 'react'
import axios from 'axios';
import Recipe from '../Recipe/Recipe';
const Search = () => {
    const [nam, setNam] = useState('');
    const [data, setData] = useState([]);
    const [curr, setCurr] = useState("");

    
    useEffect(() => {
        getReceipe();
    }, []);

    async function getReceipe(){
        const rec = await fetch('https://forkify-api.herokuapp.com/api/search?q=cake');
        const res = await rec.json();
        console.log(res);
        setData(res.recipes);
        console.log(data);
        console.log(nam);
    }

    useEffect(() => {
    	if(nam!=="") {
        axios.get(`https://forkify-api.herokuapp.com/api/search?q=${nam}`)
        .then((proRes) => proRes.data)
        .then((dt) => {
          setData(dt.recipes)
        }) 
      }
    }, [nam])

    // useEffect(() => {
    //     if (curr !== "") {
    //         axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${curr}`)
    //             .then((res) => {
    //                 setDetailedData(res.data.recipe);
    //             });
    //     }
    // }, [curr])

    const PItems = data.map((dat,idx) => {
        return(
            <ProductItems key={idx} pdata={dat} setCurr = {setCurr}/>
        )
    })

    return (
        <>
            {curr ?  
                // <DetailedView data={detailedData} setCurr={setCurr}/>
                <Recipe curr = {curr}/>
                : <div>
            <div className={styles.search}>   
                
                <input 
                    type='text'  
                    placeholder='Name of food item' 
                    onChange={(e) => (setNam(e.target.value))}
                />
                <button>
                    Search 
                </button>
            </div>  
               
                <div className={styles.grd}> 
                {
                    data.length>=1 ?
                    PItems : 'No such dish found'
                }                           
            </div>  
            </div>
}           
        
        </>
    )
}

export default Search

function ProductItems({pdata, setCurr}){
    return(
        // console.log(pdata.recipe_id)
        <div className={styles.bx} onClick={(e) => {setCurr(pdata.recipe_id)}}>
            <img src={pdata.image_url}/>
            <h4 >{pdata.title}</h4>
        </div>
    )
  }
//   function DetailedView({ data, setCurr }) {
//     return (
//         <div className={styles.detailView}>
//             <button onClick={() => setCurr('')}>Back</button>
//             <h2>{data.title}</h2>
//             <img src={data.image_url} alt={data.title} />
//             <p>{data.publisher}</p>
//             <p>{data.ingredients.join(', ')}</p>
//         </div>
//     );
// }