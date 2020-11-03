const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable :)\n", (answer) => {
  const userInfo = {
    name: answer
  };
  rl.question("What's an activity you like doing?\n", (answer) => {
    userInfo["activity"] = answer;
    rl.question("What do you listen to while doing that?\n", (answer) => {
      userInfo["music"] = answer;
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)\n", (answer) => {
        userInfo["meal"] = answer;
        rl.question("What's your favourite thing to eat for that meal?\n", (answer) => {
          userInfo["food"] = answer;
          rl.question("Which sport is your absolute favourite?\n", (answer) => {
            userInfo["sport"] = answer;
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!\n", (answer) => {
              userInfo["superpower"] = answer;
              console.log(`${userInfo.name} loves to listen to ${userInfo.music} while ${userInfo.activity}, DEVOURING ${userInfo.food} for ${userInfo.meal}, prefers ${userInfo.sport} over any sport, and is great at ${userInfo.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
