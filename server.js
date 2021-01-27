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
const prediabetesMedData = {
    bodyTemperature:randomVal(35,38),
    bloodPressure:randomVal(80, 120),
    Respiration:randomVal(12,16),
    Glucose:randomVal(72,140),
    heartRate:randomVal(60, 100),
    Cholesterol:randomVal(125,200),
    OxygenSaturation:randomVal(95,100)
    
}
const bronchiectasisMedData = {
    bodyTemperature:randomVal(35,38),
    bloodPressure:randomVal(80, 120),
    Respiration:randomVal(12,16),
    Glucose:randomVal(72,140),
    heartRate:randomVal(60, 100),
    Cholesterol:randomVal(125,200),
    OxygenSaturation:randomVal(95,100)
    
}
const chdMedData = {
    bodyTemperature:randomVal(35,38),
    bloodPressure:randomVal(80, 120),
    Respiration:randomVal(12,16),
    Glucose:randomVal(72,140),
    heartRate:randomVal(60, 100),
    Cholesterol:randomVal(125,200),
    OxygenSaturation:randomVal(95,100)
    
}
const hypoxemiaMedData = {
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
app.get('/api/prediabetes',(req,res) =>{
    
    res.status(200).json({
        status:'success',
        data:prediabetesMedData
    })
})
app.get('/api/bronchiectasis',(req,res) =>{
    
    res.status(200).json({
        status:'success',
        data:diabetesMedData
    })
})
app.get('/api/chd',(req,res) =>{
    
    res.status(200).json({
        status:'success',
        data:chdMedData
    })})
    app.get('/api/hypoxemia',(req,res) =>{
    
        res.status(200).json({
            status:'success',
            data:hypoxemiaMedData
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
