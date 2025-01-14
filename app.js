const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
    catchPokemon(){

    },
  }

//  console.dir(pokemon, {maxArrayLength: null})

  console.log('Exercise 1: ', pokemon[59]);

  console.log('========================================================================')

  console.log('Exercise 2:', game);

  console.log('========================================================================')

  game.difficulty = [
    {mode: 'easy'},
    {mode: 'med'},
    {mode: 'hard'},
  ]
  
  console.log('Exercise 3: ', game);

  console.log('========================================================================')

  game.party.push(pokemon[3].name);

  console.log('Exercise 4: ', game)

  console.log('========================================================================')

  newPoke = pokemon.slice(12, 15);

  newPoke.forEach(pokemon => {
    game.party.push(pokemon.name)
  });

  console.log('Exercise 5: ', game)

  console.log('========================================================================')

  game.gyms.forEach(gym => {
    if (gym.difficulty < 3){
        gym.completed = true
    }
  });

  console.log('Exercise 6: ', game)

  console.log('========================================================================')

  game.party.splice(0, 1, pokemon[4].name);

  console.log('Exercise 7: ', game)

  console.log('========================================================================')

  console.log('Execise 8: ')

  game.party.forEach(pokes => {
    console.log(pokes)
    return;
  });

  console.log('========================================================================')

  console.log('Exercise 9: ')

  for (let i = 0; i < pokemon.length; i++) {
    if (pokemon[i].starter) {
        console.log(pokemon[i].name)
    }
  }

  console.log('========================================================================')

