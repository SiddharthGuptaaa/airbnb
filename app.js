const express=require('express');
const path=require('path');
const userRouter = require('./routes/userRouter');
const {hostRouter} = require('./routes/hostRouter');
const rootDir=require('./utils/pathUtil');

const app=express();
app.set("view engine", "ejs");
app.set("views","./views");

app.use(express.urlencoded());

app.use(userRouter);

app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir,"public")));
app.use((req,res,next)=>{
  res.status(404).render("404", {
    pageTitle: "airbnb Home",
  });;
})

const PORT=3001;
app.listen(PORT,()=>{
  console.log(`Server is running at address http://localhost:${PORT}`);
})