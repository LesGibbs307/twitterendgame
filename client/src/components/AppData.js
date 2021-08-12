import React, { useEffect, useState } from 'react';

function AppData(){
  let [tweetResults, setTweetResults] = useState([]);

  useEffect(async()=>{
    let arr = [];
    const results = await fetch("search/tweets")
                          .then(res => res.json())
    let tweets = results.statuses;

    for(let i = 0; tweets.length > i; i++){
      let user = {
            screenName: tweets[i].user.screen_name, 
            content: tweets[i].text, 
            posted: tweets[i].created_at 
      };
      arr.push(user);
    }

    setTweetResults(arr);
  },[]);

  return(
    <div className="col-sm-12">            
      {tweetResults.map((item, index) => (                
        <div key={index} className="col-sm-4 wrapper parent">
            <div className="col-sm-12 tweets child" key={index}>
                <h1>{item.screenName}</h1>
                <p>{item.content}</p>
                <p>{item.posted}</p>
            </div>                
        </div>
      ))}              
    </div>
  );
}

export default AppData;