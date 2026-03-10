import React from "react";

export default function SkeletonLoad(){

    return(

        <div className="skeleton-container">

            <p>Loading products...</p>

            <div className="loading-bar">

                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>
                <div className="block"></div>

            </div>

        </div>

    )

}