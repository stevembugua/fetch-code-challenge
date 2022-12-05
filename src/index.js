

var ul = document.querySelector('.list-items')
const singleItemUi = document.querySelector('.animal-detail')
const animalName = document.querySelector('#name')
const animalVotes = document.querySelector('#votes')
const animalPicture = document.querySelector('#pic')
const backToList = document.querySelector('.back')
const addAnimalVotes = document.querySelector('.add-votes')
const animalId = document.querySelector('.anime-id')


// animalId.classList.add('hide')


//go back to animals list

backToList.addEventListener('click', ()=>{
  showAllAnimals()
})
//add animal votes

addAnimalVotes.addEventListener('click', ()=>{
  let votesString = animalVotes.innerHTML;
  let numVotes = parseInt(votesString.substring(7),10);
  let selectedAnimalId = parseInt(animalId.innerHTML.substring(11),10);

   addVotes(selectedAnimalId,numVotes);
})


const fetchData = (url) => {

   fetch(url)
      .then((response) => response.json())
      .then(function(json) {
        displayData(json)
      });

    

  };
  
  const displayData = (data)=>{
    data.map((item)=>{
      createListItemTemplate(item)

     
    })
  }


  const createListItemTemplate=(item)=>{

    const listItem = document.createElement('li')
    listItem.innerHTML = item.name

    listItem.addEventListener('click',()=>{
    
      showSingleAnimal(item)

    })

    ul.appendChild(listItem)

  }


  const showSingleAnimal = (animal)=>{
    ul.classList.add('hide')
    singleItemUi.classList.remove('hide')

    //set the animal details
    animalName.innerHTML = animal.name;
    animalVotes.innerHTML = 'Votes : ' + animal.votes;
    animalId.innerHTML = 'Animal ID : ' + animal.id;
    animalPicture.src = animal.image
  }


  const showAllAnimals = ()=>{
    ul.classList.remove('hide')
    singleItemUi.classList.add('hide')
  }

  const addVotes = (id,votes)=>{
    //increment votes by 1 and update the votes ui
    votes++
    //update ui
    animalVotes.innerHTML =  'Votes : ' + votes 
    
  }


  fetchData('http://localhost:3000/characters')


  console.log('Votes are : '+ localStorage.getItem('votesContainer'))  

  


  