const speakers = document.getElementById('dinamic')
const hamburger = document.getElementById('hamburguerlogo')
const elementscontainer = document.getElementById('elements-container')
const data = [
  {
    name: 'Chris Hemsworth',
    position: 'Thor the God of Thunder',
    description: 'Is an Australian actor. Hemsworth started playing Thor with the 2011 film of the same name and most recently reprised the role in Thor: Love and Thunder (2022).',
    image: './img/speakers/thor.png'
  },

  {
    name: 'Benedict Cumberbatch',
    position: 'Dr. Strange',
    description: 'Is an English actor. He has played Stephen Strange in several films set in the Marvel Cinematic Universe, including Doctor Strange (2016) and Doctor Strange in the Multiverse of Madness (2022).',
    image: './img/speakers/drstrange_final.png'
  },

  {
    name: 'Elizabeth Olsen',
    position: 'The Scarlet Witch',
    description: 'Olsen gained worldwide recognition for her portrayal of Wanda Maximoff / Scarlet Witch in the Marvel Cinematic Universe media franchise.',
    image: './img/speakers/scarlet.png'
  },

  {
    name: 'Taika Waititi',
    position: 'Director',
    description: 'is a New Zealand filmmaker, actor, and comedian. His most recent directing credits include the superhero films Thor: Ragnarok (2017) and Thor: Love and Thunder (2022).',
    image: './img/speakers/taika.png'
  },

  {
    name: 'Scott Derrickson',
    position: 'Director',
    description: 'Is an American filmmaker. Derrickson next directed the film Doctor Strange, based on the Marvel Comics property and part of the MCU.The film was a commercial and critical success.',
    image: './img/speakers/scott.png'
  },

  {
    name: 'Sam Raimi',
    position: 'Director',
    description: ' is an American filmmaker and actor. He is known for directing the Spider-Man trilogy (2002–2007) and the MCU film Doctor Strange in the Multiverse of Madness. ',
    image: './img/speakers/sam.png'
  }
]

speakers.innerHTML = data.map((array) => `
            <div class="speaker">
                <img class="speakerimg" src="${array.image}" alt="">
                <div class="speakertext">
                    <h3 class="name">${array.name}</h3>
                    <h4 class="participation">${array.position}</h4>
                    <div class="linelight"></div>
                    <p class="spekaerstext">${array.description}</p>
                </div>
            </div>
`).join('')
hamburger.addEventListener('click', () => {
  document.querySelector('#hamburguerlogo').classList.toggle('nodisplay')
  document.getElementById('elements-container').classList.remove('nodisplay')
})

elementscontainer.addEventListener('click', () => {
  elementscontainer.classList.toggle('nodisplay')
  document.querySelector('#hamburguerlogo').classList.toggle('nodisplay')
})
