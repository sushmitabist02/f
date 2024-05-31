import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import styles from './../Recipe/Recipe.module.css';
import Search from '../Search/Search';
const Recipe = (props) => {

    const [detailedData, setDetailedData] = useState([]);
    const [back, setBack] = useState(false);

    useEffect(() => {
        if (props.curr !== "") {
            axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${props.curr}`)
            .then((proRes) => proRes.data)
            .then((dt) => {
              setDetailedData(dt.recipe)
            }) 
            
        }
    }, [])

    // useEffect(() => {
    //     back?
    //     <Search/>
    //     :""
    // }, [back])

    const PItem = detailedData?.ingredients?.map((dat,idx) => {
         return(
            <ProductItem key={idx} pdata={dat}/>
        )
    })

    const getClick = (e) => {
        setBack(!back)
        // console.log(back)
        
    }
    return (
        <> 
            {/* {back && <Search/>}  */}
            {back? 
                <Search/>
                :
                <div>
                    <button onClick={getClick}>
                        Back
                    </button> 
                    <div className={styles.outer}>
                        <div className={styles.bx} >
                            <img src={detailedData?.image_url}/>
                            { PItem}    
                        </div>   
                    </div>
                </div>
            }   

            
       </>
    )
}

export default Recipe
function ProductItem({pdata}){
    return(
        <>
            <li>{pdata}</li>
        </>           
    )
  }