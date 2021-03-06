const pets = [
    {
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      typeOfPet: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg"
    },
    {
      name: "Trouble",
      color: "Poop-Colored",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      typeOfPet: "dinosaur",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRubQHJENKGqFfN8WsOHHcWYLKog9oKQbTUUw&usqp=CAU"
    },
    {
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      typeOfPet: "dinosaur",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      typeOfPet: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      typeOfPet: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      typeOfPet: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      typeOfPet: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      typeOfPet: "dinosaur",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6FrPTbHd3v7xC-lJ7zDoLfzFtQFKrN6--jQ&usqp=CAU"
    },
    {
      name: "Sassy",
      color: "Poop-Colored",
      specialSkill: "Adept at talking self and others out of fights.",
      typeOfPet: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      typeOfPet: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      typeOfPet: "dinosaur",
      imageUrl: "http://www.cantref.com/userfiles/events/walking%20dino.jpg?w=600"
    },
    {
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      typeOfPet: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      typeOfPet: "dog",
      imageUrl: "https://imagesvc.meredithcorp.io/v3/mm/image?q=85&c=sc&poi=face&w=2000&h=2000&url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2020%2F09%2F03%2Fbrown-puppy-sssxyuZape8-unsplash-2000.jpg"
    },
    {
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      typeOfPet: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      typeOfPet: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      name: "Smokey",
      color: "Poop-Colored",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      typeOfPet: "dinosaur",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-COW2rPlijKl2kMytK2hWuigAq_nk7boHQ&usqp=CAU"
    },
    {
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      typeOfPet: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Close_Up_Yawn.jpg"
    },
    {
      name: "Salem",
      color: "Poop-Colored",
      specialSkill: "Proficient in air guitar",
      typeOfPet: "dinosaur",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsTeZyy7Zdy0Min4ofoZgxQpH2EV8lO5OrQA&usqp=CAU"
    },
    {
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      typeOfPet: "dog",
      imageUrl: "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg"
    },
    {
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      typeOfPet: "cat",
      imageUrl: "http://www.funnycatsite.com/pictures/Lazy_White_Cat.jpg"
    },
    {
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      typeOfPet: "dinosaur",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKjB25V6dkpJV2KaVXmoJlmxFF3FsM2VH9g&usqp=CAU"
    },
    {
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      typeOfPet: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8bVPK9Xb7owNSKT_Oe4zV--I3GBQHtmosA&usqp=CAU"
    },
    {
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      typeOfPet: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      typeOfPet: "dog",
      imageUrl: "http://www.dogbreedplus.com/dog_breeds/images/basset-hound-4.jpg"
    },
    {
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      typeOfPet: "cat",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf8bVPK9Xb7owNSKT_Oe4zV--I3GBQHtmosA&usqp=CAU"
    },
    {
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      typeOfPet: "dog",
      imageUrl: "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg"
    },
    {
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      typeOfPet: "dinosaur",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      typeOfPet: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      typeOfPet: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      typeOfPet: "dinosaur",
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkdf8wYw91f0vEolZV5POeFKHdMDLX8_hj_w&usqp=CAU"
    }
  ];

// Add key to pets, for deletion 
const addKeyToPets = (array) => {
  for(let i = 0; i < array.length; i++) {
    array[i].key = i;
  }
}
addKeyToPets(pets);

const printDom = (divID, textToPrint)  => {
  document.querySelector(divID).innerHTML = textToPrint;
}

//print pet cards to the dom 
const petBuilder = (pets) => {
  let domString = '';
  let i = 0;
  for(let item of pets) {
    domString += 
      `<div class="card my-3" id="card_${i}">
        <div class="card-body">
          <p class="card-text pet-name">${item.name}</p>
          <div class="img-container" style="background-image: url('${item.imageUrl}');"></div>
          <p class="card-text pet-color">Favorite Color:  ${item.color}</p>
          <p class="card-text pet-skill">${item.specialSkill}</p>
          <p class="card-text pet-type ${item.typeOfPet}">${item.typeOfPet}</p>
          <button type="button" class="btn btn-primary adopt" id="${item.key}">Adopt Me!</button>
        </div>
      </div>`; 
    i++;
  };
   printDom('#pets', domString);
}

//Filter results by pet type
const buttonClick = (e) => {
  const button_Id = e.target.id;

  const selectedPets = [];
  for(let i = 0; i  < pets.length; i++) {
    if(pets[i].typeOfPet === button_Id) {
      selectedPets.push(pets[i]);
    }
    if(button_Id === 'all') {
      petBuilder(pets);
    } else {
      petBuilder(selectedPets);
    }
  }
}

//Delete / Adopt a pet
const buttonDelete = (e) => {
  // get card Id for hiding after deletion
  let card_Id = e.target.parentNode.parentNode.id;
  let adopted = false;
  if(e.target.type === "button") {
    for(let i = 0; i < pets.length; i++) {
      if(pets[i].key == e.target.id) {
        adopted = true;
        pets.splice(i,1)
      }
    }
    // hide pet card from display before dom is re-written
    if(adopted) {
      document.getElementById(card_Id).classList.add("deleted");
    }
  }
}

//All button events
const buttonEvents = () => {
  document.querySelector('#all').addEventListener('click', buttonClick);
  document.querySelector('#dog').addEventListener('click', buttonClick);
  document.querySelector('#cat').addEventListener('click', buttonClick );
  document.querySelector('#dinosaur').addEventListener('click', buttonClick );
  document.querySelector('#pets').addEventListener('click', buttonDelete);
} 

//Load pets into the dom, run event listeners
const init = () => {
  petBuilder(pets);
  buttonEvents();

}

init();
