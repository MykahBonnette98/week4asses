const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const pictureBtn = document.getElementById("pictureButton")
const nameInput = document.getElementById("name")
const nameDelInput = document.getElementById("nameDel")
const ageInput = document.getElementById("age")
const ageBtn = document.getElementById("ageButton")
const formDelElement = document.getElementById("delForm")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
}

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
}

function search_char() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('characters');
      
    for (i = 0; i < x.length; i++) { 
        if (!x[i].innerHTML.toLowerCase().includes(input)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}
 const sumbitName = (event) => {
    event.preventDefault()

    const name = nameInput.value
    const age = ageInput.value
    const theBody = {
        name: name,
        user_age: +age,
    
}

 axios.post(baseURL + '/api/createName', theBody)
.then((response) => {
    if (response.data.success) {
        console.log('new database looks like:')
        console.log(response.data.info)
    } else {
        alert('failure')
    }
})

nameInput.value = ''
ageInput.value = ''
}

const delName = (event) => {
    event.preventDefault()

    const name = nameDelInput.value

    axios.put('http://localhost:4000/api/delName/' + name)
    .then((response) => {
        if (response.data.success) {
            console.log('new database')
            console.log(response.data.info)
        } else {
            alert('failure')
        }
    })
  
}
const getAge = () => {
    axios.get("http://localhost:4000/api/age/")
        .then(res => {
            const data = res.data;
            alert(data);
    })
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
ageBtn.addEventListener('click', getAge)

formElement.addEventListener('submit', sumbitName)
formDelElement.addEventListener('submit', delName)




