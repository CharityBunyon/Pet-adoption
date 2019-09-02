const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
}

const pets = [
    {
        name: 'Dwight Schute',
        img: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/Miniature_Schnauzer_puppy_blackandsilver.jpg',
        color:  'Salt n\' Pepper',
        skill: 'Through concentration, he can raise and lower your cholesterol at will.' ,
        type: 'dog'
    },
    {
        name: 'Jim Halpert',
        img: 'https://www.thesprucepets.com/thmb/5qqmdB9NoLp5CVOpUOQiwXRagAQ=/1080x1222/filters:no_upscale()/31170124_355309831644176_4994517524629422080_n-5b3a4d0ec9e77c003771e6a6.jpg',
        color: 'Golden' ,
        skill: 'Loves to prank his buddy Dwight Schute',
        type: 'dog'
    },
    {
        name: 'Pam Beasley',
        img: 'https://upload.wikimedia.org/wikipedia/commons/6/60/Neighbours_Siamese.jpg',
        color: 'Perfume',
        skill: 'Plans to be a better artist and occassionaly assists Jim in pranks.',
        type: 'cat'
    },
    {
        name: 'Angela Martin',
        img:  'https://media.mnn.com/assets/images/2015/09/sweater-sphynx-cat.jpg.1440x960_q100_crop-scale_upscale.jpg',
        color: 'Gray',
        skill: 'Can sense if you are the real deal or not.',
        type: 'cat'
    },
    {
        name: 'Jan Levinson',
        img: 'https://blueprint-api-production.s3.amazonaws.com/uploads/story/thumbnail/93866/e27c7071-0adf-4c68-9235-5f1d2b453b4c.jpg' ,
        color: 'Gray',
        skill: 'Can make a baby appear out of nowhere.',
        type: 'dino'
    },
    {
        name: 'Toby Flanderson',
        img:  'http://images.dinosaurpictures.org/velociraptor_12_c4fd.jpg',
        color: 'Cherry',
        skill: 'Able to make a terrible situation even more terrible.' ,
        type: 'dino'
    },

];

const petSite = (animals) => { 
    let domString = '';
    for(let i = 0; i < animals.length; i++) {
        const selectAnimal = animals[i];
        domString += `
            <div class="card">
                <h3>${selectAnimal.name}</h3>
                <img src="${selectAnimal.img}" alt= "${selectAnimal.name}">
                <p class="description">${selectAnimal.color}</p>
                <p class="description">Special skill:${selectAnimal.skill}</p>
                <footer>${selectAnimal.type}</footer>
            </div>
        `
    }
    printToDom(domString, 'petZone');
};

const buttonClick = (e) => {
    const petId = e.target.id;
    const selectedPet = [];
    for (let i = 0; i < pets.length; i++) {
        const pet = pets[i];
        if (pets[i].type === petId) {
            selectedPet.push(pet);
        }
    }
    petSite(selectedPet);
}

    document.getElementById('cat').addEventListener('click', buttonClick);
    document.getElementById('dog').addEventListener('click', buttonClick);
    document.getElementById('dino').addEventListener('click', buttonClick);
    document.getElementById('all').addEventListener('click', (e) => {
        petSite(pets);
    } );



