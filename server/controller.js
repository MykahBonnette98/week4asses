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
    }
}