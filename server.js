const express=require("express")
const app=express()
const port= process.env.PORT||8080

const randomVal = (min, max) => {
    return Math.floor(Math.random() * (max-min+1)+min)
    };
const normalMedData = {
    bodyTemperature:randomVal(35,38),
    bloodPressure:randomVal(80, 120),
    Respiration:randomVal(12,16),
    Glucose:randomVal(72,140),
    heartRate:randomVal(60, 100),
    Cholesterol:randomVal(125,200),
    OxygenSaturation:randomVal(95,100)
}

const diabetesMedData = {
    bodyTemperature:randomVal(35,38),
    bloodPressure:randomVal(80, 120),
    Respiration:randomVal(12,16),
    Glucose:randomVal(72,140),
    heartRate:randomVal(60, 100),
    Cholesterol:randomVal(125,200),
    OxygenSaturation:randomVal(95,100)
}
const HeartdiseaseMedData = {
    bodyTemperature:randomVal(35,38),
    bloodPressure:randomVal(80, 120),
    Respiration:randomVal(12,16),
    Glucose:randomVal(72,140),
    heartRate:randomVal(60, 100),
    Cholesterol:randomVal(125,200),
    OxygenSaturation:randomVal(95,100)
}
const AsthmaMedData = {
    bodyTemperature:randomVal(35,38),
    bloodPressure:randomVal(80, 120),
    Respiration:randomVal(12,16),
    Glucose:randomVal(72,140),
    heartRate:randomVal(60, 100),
    Cholesterol:randomVal(125,200),
    OxygenSaturation:randomVal(95,100)
}

app.get('/api/normal',(req,res) =>{
    
    res.status(200).json({
        status:'success',
        data:normalMedData
    })
})

app.get('/api/diabetes',(req,res) =>{
    
    res.status(200).json({
        status:'success',
        data:diabetesMedData
    })
})
app.get('/api/heartdisease',(req,res) =>{
    
    res.status(200).json({
        status:'success',
        data:HeartdiseaseMedData
    })})
    app.get('/api/Asthma',(req,res) =>{
    
        res.status(200).json({
            status:'success',
            data:AsthmaMedData
        })
})
app.listen(port,() => {
    console.log('server listing to the port: ',port)
})
