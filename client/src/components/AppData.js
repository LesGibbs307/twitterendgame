import React, {Component} from 'react';

export class AppData extends Component{
  constructor(){
    super();
    this.state = {
      users: []
    }
  }

  getData(data, arr){
    let tweets = data.statuses;
    for(var i = 0; i< tweets.length; i++){
        var user = { 
            screenName: tweets[i].user.screen_name, 
            content: tweets[i].text, 
            posted: tweets[i].created_at 
        };
        arr.push(user);
    }
    arr = JSON.stringify(arr);
    localStorage.setItem("arr", arr);
  }

  componentWillMount(){
     fetch("search/tweets").then(res =>
      res.json().then(data => {
        var arr = [];
        arr = this.getData(data, arr);
        const results = JSON.parse(localStorage.getItem("arr"));
        this.setState({ users: results });
      })
    )
  }

  render(){  
    return( 
    <div className="col-sm-12">            
        {this.state.users.map((item, index) => (                
            <div key={index} className="col-sm-4 wrapper parent">
                <div className="col-sm-12 tweets child" key={index}>
                    <h1>{item.screenName}</h1>
                    <p>{item.content}</p>
                    <p>{item.posted}</p>
                </div>                
            </div>
          ))}              
    </div>
    )
  }
}

export default AppData;
