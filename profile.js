const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (name) => {
  rl.question("What's your least-liked word? ", (god) => {
    rl.question("What's something you dislike? ", (hate) => {
      rl.question("What's a nearby object on your desk or table? ", (weapon) => {
        rl.question("What's an overrated holiday? ", (holiday) => {
          rl.question("What's your favourite food? ", (meal) => {
            console.log(`Legends tell of the mighty warrior ${name}, who ran afoul of the ancient evil diety, ${god}, the god of ${hate}. The two came to battle, but eventually ${name} dealt the final blow with their mighty ${weapon}, vanquishing ${god} once and for all. In celebration, the people declared ${holiday} to instead be ${name}'s Day forever more, where all the good people rejoice over a delicious meal of ${meal}.`);
    
            rl.close();
          });
        });
      });
    });
  });
});