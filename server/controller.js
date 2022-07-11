module.exports = {
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", 
        "Cool shirt!", 
        "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortune = ["A lifetime of happiness lies ahead of you.",
         "All your hard work will soon pay off.", 
         "Better ask twice than lose yourself once",
          "Fearless courage is the foundation of victory.",
           "How you look depends on where you go."];
  
    let randomIndex = Math.floor(Math.random() * fortune.length);
    let randomFortune = fortune[randomIndex];
  
    res.status(200).send(randomFortune);
    },
    createName: (req, res) => {
        database.push(req.body)
        res.status(200).send({success: true, info: database})
    },
    delName: (req, res) => {
        const name = req.params.name
        for (let i=0; i<database.length; i++) {
            if (database[i].name === name) {
                database.splice(i, 1);
            }
        }
        res.status(200).send({success: true, info: database})
    },
    
     getAge: (req, res) => {
         const age = ["2000 years old", "10000 years old", "34 years old", "900 years old",
         "600 years old"]

     let randomIndex = Math.floor(Math.random() * age.length);
     let randomAge = age[randomIndex];

         res.status(200).send(randomAge);
    }
}

const database = [
    {
        name:'mykah',
        user_age:23
    },
]


