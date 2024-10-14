const express =require ("express")
const app=express()
const PORT=2222;
app.use(express.urlencoded({ extended: true }));
app.set("view engine" , "ejs")

app.get("/",(req,res)=>{
//    res.end("hello kkkkkkkkk")
    return res.render("index",{Records});
})

 let Records = []

 // data add karva mate
app.post("/add",(req,res)=>{
    const Newrecord =req.body.Record
    if (Newrecord) {
        Records.push(Newrecord)    
    }
    res.redirect("/")
})

 // data delet karva

  app.get("/delete/:index",(req,res)=>{
      const index= req.params.index;
      Records.splice(index,1)
      res.redirect("/")
  })

  // edit
  app.post("/editpage/:index",(req,res)=>{
    const index = req.params.index;
    const edit = Records[index]
    res.render("editpage", { Record: edit, index });
  })

  // update
  app.post("/update/:index", (req, res) => {
    const index = req.params.index;
    Records[index] = req.body.Record;
    res.redirect("/");
  });




app.listen(PORT,()=>{console.log("Started 👉")})