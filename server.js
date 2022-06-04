const express = require('express')
const app = express() // allows the use of all methods included with express 
const PORT = 8000

 const teams = {
    'mercedes': {
        'Full name': 'Mercedes-AMG Petronas F1 Team',
        'Driver 1': 'Lewis Hamilton',
        'Driver 2': 'George Russell',
        'Base': 'Brackley, Northamptonshire, United Kingdom',
        'Team Principal': 'Toto Wolff',
    },
    'mclaren': {
        'Full name': 'McLaren F1 Team',
        'Driver 1': 'Lando Norris',
        'Driver 2': 'Daniel Ricciardo',
        'Base': 'McLaren Technology Centre Woking, Surrey, England, UK',
        'Team Principal': 'Zak Brown'
    },
    'ferrari': {
        'Full name': 'Scuderia Ferrari',
        'Driver 1': 'Charles Leclerc',
        'Driver 2': 'Carlos Sainz Jr.',
        'Base': 'Maranello, Province of Modena, Italy',
        'Team Principal': 'Laurent Mekies'
    },
    'unknown':{
        'Full name': 'unknown',
        'Driver 1': 'unknown',
        'Driver 2': 'unknown',
        'Base': 'unknown',
        'Team Principal': 'unknown'
    },
}

app.get('/api/:name', (request, response)=>{
    const teamName = request.params.name.toLowerCase()
    if(teams[teamName]){
        response.json(teams[teamName])
    }else{
        response.json(teams['unknown'])
    }
})
app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.listen(PORT, (req, res)=>{   //specifies the server port to listen to
    console.log(`Server is running on ${PORT}`)
})