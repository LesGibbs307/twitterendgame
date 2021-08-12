import React, { useEffect, useState } from 'react';
import Images from '../components/Images';

function TheFallen(){
    let [resultsArr, updateResultsArray] = useState([]);

    let separateText =(text)=>{
        let capitalLetterCount = text.match(/[A-Z]/g).length;
        if(capitalLetterCount > 1){
            text = text.replace(/([A-Z+])/g, ' $1').trim();
        }
        return text;
    }

    useEffect(()=>{
        const imageObj = Images
        const imageArr = Object.keys(imageObj);
        let arr = [];
        for(let i = 0; imageArr.length > i; i++) {
            let resultObj = { name:"", src:"" };
            let thisElem = imageArr[i];
            resultObj.name = separateText(thisElem);
            resultObj.src = imageObj[thisElem];
            arr.push(resultObj);
        }
        updateResultsArray(arr);
    }, []);
     
    return(     
        <div className="container">
            <h2>Never Forget...</h2>
            <div className="parent">
                {
                    resultsArr.map((value, index) =>{
                    return <div className="child" key={index}>
                                <h3>{value.name}</h3>
                                <img alt={`${value.name} - a fallen avenger`} className="img-responsive" src={value.src} />                
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default TheFallen;