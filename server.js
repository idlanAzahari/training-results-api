express = require('express') 
mongoose = require('mongoose')
cors = require('cors')


// const Uri = process.env.DATABASE_URL
// mongoose.connect(Uri)
const DATABASE_URL = "mongodb+srv://admin:swsupport@interxtester.oiz9xjv.mongodb.net/imetester?retryWrites=true&w=majority"
const app = express()


//MiddleWare
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const ResultsSchema = new mongoose.Schema(
    {
        ExamName: String
        
    }
   
)

mongoose.connect(DATABASE_URL, 
    {
        useNewUrlParser: true,
    }).then(() => {
        console.log("Connected to database")
    }).catch((e) => console.log(e))
        
  
    
const Results = mongoose.model("Results", ResultsSchema)





app.get("/results/get", async(req, res) => {
    
    try {
        result = await Results.find({})
        res.send(result)
    } catch (error) {
        console.log(error)
    }
    
})


app.listen(4000, () => {
    console.log(`Server Started at ${4000}`)
})