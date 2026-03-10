import React, {useState, useEffect} from "react";
import apiTracker from "../components/apiTracker";
import {getCache, setCache} from "../components/cache";
import ProductList from "../components/ProductList";
import SkeletonLoad from "../components/SkeletonLoad";

let currentRequest = 0;

export default function ProductContainer(){

    const trackInfo = apiTracker();

    const [products, setProducts] = useState(null);
    const [meta, setMeta] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{

        async function fetchProducts(){

            setMeta(trackInfo());

            //race condition

            const requestId = ++currentRequest;

            const cachedData = getCache();

            if(cachedData){
                setProducts(cachedData);
                setLoading(false);
                return;
            }

            try{

                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();

                if(requestId !== currentRequest) return; //stale state

                setCache(data.products);

                setProducts(data.products);

            }catch(error){

                console.error("Error fetching data", error);

            }finally{

                setLoading(false);

            }
        }

        fetchProducts();

    },[]);

    return(
        <div className="container">

            <h2 className="title">Product List</h2>

            {meta && (
                <p className="meta">
                    Fetch Attempts: {meta.attempts} | Last Fetch: {meta.lastTimeStamp}
                </p>
            )}

            {loading ? (
                <SkeletonLoad/>
            ) : products ? (
                <ProductList products={products}/>
            ) : (
                <p>No products found</p>
            )}

        </div>
    )
}