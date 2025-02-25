import React from 'react';

import Titles from './Titles';
import Form from './Form';
import Weather from './Weather';

class bookNow extends React.Component {
 
  state = {
         
    route : undefined,
    time  : undefined,
    cost : undefined,
    tickets : undefined,
    error : undefined,
    rid:undefined,

  }

 getWeather = async(e) =>{
   e.preventDefault();
   
   const rid = e.target.elements.city.value;
  // const country = e.target.elements.country.value;
  const tickets = e.target.elements.tickets.value;

  // const route = e.target.elements.route.value;

//  console.log(rid);

  // console.log(route);
  // const api_calls =  await fetch(`http://localhost:8000/ticketsDetails/${route}`);
  //  const data = await api_calls.json();
  //  if(route){
  // console.log(data);
  

   const api_calls =  await fetch(`http://localhost:8000/ticketsDetails/${rid}`);
   const data = await api_calls.json();
   if(rid){
  console.log(data);

   this.setState({
    
    

     name : data.name,
     route : data.route,
     time  : data.time,
     cost : data.cost,
     tickets : tickets,

     error: ""
   });

 }else{
  this.setState({
    // temperature : undefined,
    // city : undefined,
    // country : undefined,
    // humidity: undefined,
    // description:undefined,
    // c1: undefined,
    // c2:undefined,


    route : undefined,
    time  : undefined,
    cost : undefined,
    tickets : undefined,
    error : undefined,
    error: "Please enter  the value"
  });
 }
}

  render() {

    return ( <div> 

   <div className = "container"> 

      <Titles />

         <Form getWeather = {this.getWeather} />
        <Weather
        

        route = {this.state.route}
        time = {this.state.time}
        cost = {this.state.cost}
        tickets = {this.state.tickets}

        />
                            
   
      
    </div>
           
        
    </div>
 
    );
  }
};

export default bookNow;