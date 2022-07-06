
function getDate() {

    let today = new Date();
   
    // function to get the date
    let options = {
         weekday: "long" ,
         day: "numeric" ,
         month: "long"
    };
 
  return today.toLocaleDateString("en-US" , options);

}




function getDay() {
    
    let today = new Date();
   
  
    let options = {
         weekday: "long" ,
    };
 
     let day  = today.toLocaleDateString("en-US" , options);

     return day;
}


module.exports = {
    getDate , getDay
}; 