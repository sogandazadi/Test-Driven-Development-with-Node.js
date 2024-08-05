const experess = require("express")
const todosRouter = require("./routes/todos")

const app = experess();
const port = 3000;
app.use("/todos" , todosRouter)
app.listen(port , ()=>{
    console.log(`App is running on port ${port}`)
})

module.exports = app;