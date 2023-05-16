let myExpress = require('express');

let meriApp = myExpress();

let multer = require('multer')

meriApp.use(myExpress.json())

meriApp.listen(3004, function () {

    console.log("server live ho gya")

})


const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, './server/pictures')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })



let token = require('jsonwebtoken')

let signupUser = [];
let benefits = [];
let Faqs=[];
let Feedback=[];

meriApp.post('/userSession', async (req, res) => {
    token.verify(req.body.token, "mano bili mioon", async (err, dataObj) => {
        if (dataObj) {
            let user = signupUser.find(user => user.userId == dataObj.tokenId)
            res.json(user)
        }
    })
})


meriApp.post("/signupUser", (req, res) => {
    let newUser = req.body;
    let oldUser = signupUser.find(user => user.email == newUser.email)
    if (oldUser) {
        res.send("User Already Exist")
    } else {
        signupUser.push(req.body)
        res.end("Success")

    }
})


meriApp.post('/loginUser', (req, res) => {

    let userMilgya = signupUser.find(user => user.email == req.body.email && user.password == req.body.password)
    if (userMilgya) {
        token.sign({ tokenId: userMilgya.userId }, "mano bili mioon", { expiresIn: "1y" }, async (err, myToken) => {
            res.json({ userMilgya, myToken })
        })

    } else {
        res.status(404).json({ message: "Invalid credentials" })
    }
})

meriApp.post("/benefits", upload.single('pic'), (req, res) => {
    let newBenefit = req.body;
    newBenefit.pic = req.file.originalname;
    console.log(newBenefit);
    benefits.push(newBenefit);
    res.send("success");
});

meriApp.get('/benefits', (req, res) => {
    res.json(benefits)
})

meriApp.post('/faqs',(req,res)=>{
    Faqs.push(req.body)
    res.send("Success")
})

meriApp.get('/faqs', (req,res)=>{
    res.json(Faqs)
})

meriApp.post('/feedback', (req,res)=>{
    Feedback.push(req.body)
    res.send("Success")
})

meriApp.get("/feedback", (req,res)=>{
    res.json(Feedback)
})
// meriApp.use(myExpress.static('./server/build'))
meriApp.use(myExpress.static('./server/pictures'))
