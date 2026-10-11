

const character1 = {
   title: 'antman',
   emoji: '🐜',
   powers: ['strength', 'speed', 'small']
}

const emoji = ['😀', '🍟', '🍕', '🍔', '🍿']

const characters = [
   {
      name: "Clark Kent",
      location: "Metropolis",
      superpower: ["Superhuman strength", "flight", "laser vision"]
   },
   {
      name: "Bruce Wayne",
      location: "Gotham City",
      superpower: ["Genius intellect", "Peak human physical condition", "Master martial artist"]
   },
   {
      name: "Diana Prince",
      location: "Themyscira",
      superpower: ["Superhuman strength", "Flight", "Superhuman speed"]
   },
   {
      name: "Barry Allen",
      location: "Central City",
      superpower: ["Superhuman speed", "Phasing", "Time manipulation"]
   }
];


/* 

-----> for in 
for (let char in character1) {
   console.log(character1[char]);
}



-----> for of
for (let character of characters) {
   console.log(character);
}



----> For Each

characters.forEach((character, index) => {
   character.superpower.forEach(power => console.log(power, index))
})



---->
---->
---->

*/


console.log(emoji.includes('🍕')); 