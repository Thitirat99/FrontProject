const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');

// Base URL for the API
const base_url = "https://localhost:5000";

// Set the template engine
app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/public'));

function Login(){
    app.get('/',(req,res) => res.render("Login/index"));

    app.get('/SignIn',async(req,res) => res.render("Login/SignIn"));

    app.get('/SignUp',async(req,res) => res.render("Login/SignUp"));

    app.get('/index', async(req,res) =>{
        const response = await axios.get(base_url + '/');
        res.render("index", {data: response.data}); // นำข้อมูลที่ได้จาก API ไปแสดงผลในหน้า index

    app.post('/Login', async(req,res) =>{
        try{

            const Data_Patient = {
                Name: req.body.Name,
                Phone: req.body.Phone,
                Email: req.body.Email,
                Address: req.body.Address,
                Password: req.body.Password
            }
            Name_Patient = Data_Patient.Name
            await axios.post(base_url + '/Patient_Post',Data_Patient)
            const response = await axios.get(base_url + '/Patients')
            res.render("HospitalData",{Patients: response.data,Name: Name_Patient})
        }catch (err){
            console.error(err)
            res.status(500).send('Error Post Register')
        }
    })

    app.post('Register_Patient',async(req,res) =>{
        try{
            const Data_Patient = {
                Name: req.body.Name,
                Phone: req.body.Phone,
                Email: req.body.Email,
                Address: req.body.Address,
                Password: req.body.Password
            }
            const response = await axios.get(base_url + '/Patients')
            res.render('Login/CheckLogin',{Patient: Data_Patient, Patients: response.data})
        }catch (err){
            console.error(err)
            res.status(500).send('Errorr!')
        }
    })
    app.post('/Login_Patient', async(req,res) =>{
        try{
            const Data_Patient = {
                Name: req.body.Name,
                Password: req.body.Password
            }
            Name_Patient = Data_Login.Name
            
            const response = await axios.get(base_url + '/Patients')
            res.render('Login/CheckLogin',{Patient:Data_Patient,Patients: response.data})
       
        }catch(err){
            console.error(err)
            res.status(500).send('Errorr!')
        }
    })
    })
}

app.get('/HospitalData', async(req, res) => {
    const respones = await axios.get(base_url + '/Patients')
    res.render("HospitalData", { Patients: respones.data, Name: Name_Patient })
})



Login(); 
// Patient();
// MedicalHistory();
// Disease();

const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});



