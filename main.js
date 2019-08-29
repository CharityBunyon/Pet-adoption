const pets = [

{
    name: 'Dwight Schute',
    img: 'images/mini-s.jpg',
    color: 'Salt n\' Pepper',
    skill: 'Through concentration, he can raise and lower your cholesterol at will.'
    type: 'dog'
},
{
    name: 'Jim Halpert',
    img: 'images/golden-ret.jpg',
    color: 'Golden',
    skill: 'Can prank you until you submit to him.'
    type: 'dog'
},
{
    name: 'Pam Beasly',
    img: 'images/siamese.jpg',
    color: 'Perfume',
    skill: 'Plans to be a better painter.'
    type: 'cat'
},
{
    name: 'Angela Martin',
    img: 'images/sphynx.jpg',
    color: 'Gray',
    skill: 'Comfortable around like-minded cats, who don\'t mind being on a farm ',
    type: 'cat'
},
{
    name: 'Jan Levinson',
    img: 'images/t-rex.jpg',
    color: 'Gray',
    skill: 'Can make a baby appear anywhere.'
    type: 'dino'
},
{
    name: 'Toby Flenderson',
    img: 'images/spino.jpg',
    color: 'Cherry'
    skill: 'Able to make a terrible situation even more terrible.'
    type: 'dino'
}
]


//1a. Create an arrow function that will pass my array of pies

const petSite = (petsArray) => {
    let domString = ''; 
    // 5a.This variable is going to allow print out the div I want below.
    for (let i = 0; i < petsArray.length; i++) {
    //2a. Created for loop that is going to loop through my pets array to retrieve objects.
    domString += `
        <div class = "card">
            <h2>${pets.name}</h2>
            <img src = ${pets.img} alt ='Image of ${pets.name}'>
            <p>${pets.color}</p>
            <p>${pets.skill}</p>
            <p>${pets.type}</p>
        </div>
    `
    // 3a. This domstring is going to print these items to my page, but I'm telling the loop to create a div for each of the objects. Giving a class of card so that i can apply styles.
    printToDom(domString, 'pet-zone');
    // 4a.This printToDom function is going to call or pass through the following parameters. But I haven't made this function yet.
    }
}
