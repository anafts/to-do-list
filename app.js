const express = require("express"); 
const app = express();
const bodyParser = require("body-parser");

let items = [];
let workItems = [];

app.set( "view engine" , "ejs"); 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public')); 


app.get("/" , function(req , res){
   let today = new Date();
   
   // function to get the date
   let options = {
        weekday: "long" ,
        day: "numeric" ,
        month: "long"
   };

   let day = today.toLocaleDateString("en-US" , options);
   res.render("list" , {listTitle: day , newListItems : items})
});


// post request 
app.post("/" , function(req, res){
   let item = req.body.newItem;
  

   if (req.body.list === "Work"){
      workItems.push(item); 
      res.redirect("/work"); 
   } else {
      items.push(item); 
      res.redirect("/"); 

   };
});

app.get("/work" , function(req , res){
   res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.post("/work" , function(req , res){
   let item = req.body.newItem;
   workItems.push(item); 
   res.redirect("/work"); 

});

app.get("/about" , function(req, res){
   res.render("about");
})


app.listen(3000 , function(){
    console.log("Server is running on port 3000");
});