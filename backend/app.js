const express=require("express");
const app=express();


//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//routes
app.get("/api/jokes",(req,res)=>{
  const jokes=[{"type":"programming","setup":"A user interface is like a joke.","punchline":"If you have to explain it then it is not that good.","id":60},{"type":"general","setup":"What is the tallest building in the world?","punchline":"The library, it’s got the most stories!","id":253},{"type":"general","setup":"Who is the coolest Doctor in the hospital?","punchline":"The hip Doctor!","id":302},{"type":"general","setup":"Why did the tree go to the dentist?","punchline":"It needed a root canal.","id":341},{"type":"general","setup":"What does the mermaid wear to math class?","punchline":"Algae-bra.","id":401},{"type":"general","setup":"Why can't bicycles stand on their own?","punchline":"They are two tired","id":5},{"type":"general","setup":"What do you call a girl between two posts?","punchline":"Annette.","id":210},{"type":"general","setup":"How many hipsters does it take to change a lightbulb?","punchline":"Oh, it's a really obscure number. You've probably never heard of it.","id":140},{"type":"general","setup":"What’s E.T. short for?","punchline":"He’s only got little legs.","id":281},{"type":"general","setup":"What do you call a singing Laptop?","punchline":"A Dell","id":7}]
  res.send(jokes);
})


//server
const port=process.env.PORT || 5000;
app.listen(port,()=>{
  console.log(`server is running on port ${port}`);
})

