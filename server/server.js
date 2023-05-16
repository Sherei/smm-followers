let myExpress = require('express');

let meriApp = myExpress();

let multer = require('multer')

let token = require('jsonwebtoken')

meriApp.use(myExpress.json())

require("./model/db")

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




// let signupUser = [];

let signupUser = require('./model/user');
let Benefit = require('./model/benefits')
let Faq = require('./model/faq')
let Feedback= require('./model/feedback')
// let benefits = [];
// let Faqs = [];
// let Feedback = [];


meriApp.post('/userSession', async (req, res) => {
    token.verify(req.body.token, "mano bili mioon", async (err, dataObj) => {
        if (dataObj) {
            let user = await signupUser.findById(dataObj.userId)
            res.json(user)
        }
    })
})


meriApp.post("/signupUser", async (req, res) => {

    let newUser = new signupUser(req.body)

    await newUser.save()
    res.end("ho gya")

})


meriApp.post('/loginUser', async (req, res) => {

    let userMilgya = await signupUser.findOne({ email: req.body.email, password: req.body.password })

    if (userMilgya) {

        token.sign({ userId: userMilgya._id }, "mano bili mioon", { expiresIn: "1w" }, async (err, myToken) => {

            res.json({ userMilgya, myToken })

        })
    } else {
        res.status(404).json({ message: "Invalid credentials" })
    }
})



meriApp.post("/benefits", upload.single('pic'), async (req, res) => {

    let newBenefit = new Benefit(req.body);

    newBenefit.pic = req.file.originalname;

    console.log(newBenefit)

    await newBenefit.save()

    res.send("success");
});

meriApp.get('/benefits', async(req, res) => {

    let newBenefit= await Benefit.find()
    res.json(newBenefit)
})

meriApp.post('/faqs', async (req, res) => {

    let newFaq = new Faq(req.body)

    console.log(newFaq)
    await newFaq.save()

    res.send("Success")
})

meriApp.get('/faqs', async (req, res) => {

    let newFaq= await Faq.find()
    res.json(newFaq)
})

meriApp.post('/feedback', async(req, res) => {
    
    let newFeedback= new Feedback(req.body)
    
    await newFeedback.save()

    res.send("Success")
})

meriApp.get("/feedback", async (req, res) => {

    let newFeedback= await Feedback.find()

    res.json(newFeedback)
})
meriApp.use(myExpress.static('./server/build'))
meriApp.use(myExpress.static('./server/pictures'))
