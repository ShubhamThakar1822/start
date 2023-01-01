var express=require("express");
var app = express();
app.get("/",function(req,resp){
    resp.send(" Powerful peoples makes places powerful")
})
app.listen(1234);
console.log("Power booster Dose");