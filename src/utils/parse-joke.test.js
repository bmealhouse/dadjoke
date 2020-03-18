const parseJoke = require("./parse-joke");

test("should parse dad joke with different split tokens", () => {
  expect(jokes.map(parseJoke)).toMatchInlineSnapshot(`
    Array [
      Object {
        "jokeText": "What kind of dog lives in a particle accelerator?",
        "punchlineText": "A Fermilabrador Retriever.",
      },
      Object {
        "jokeText": "Why did the feline fail the lie detector test?",
        "punchlineText": "Because he be lion.",
      },
      Object {
        "jokeText": "I used to be a banker, but I lost interest.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Did you hear the one about the guy with the broken hearing aid?",
        "punchlineText": "Neither did he.",
      },
      Object {
        "jokeText": "What do you call a fly without wings?",
        "punchlineText": "A walk.",
      },
      Object {
        "jokeText": "When my wife told me to stop impersonating a flamingo, I had to put my foot down.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "What do you call someone with no nose?",
        "punchlineText": "Nobody knows.",
      },
      Object {
        "jokeText": "What time did the man go to the dentist?",
        "punchlineText": "Tooth hurt-y.",
      },
      Object {
        "jokeText": "Why can’t you hear a pterodactyl go to the bathroom?",
        "punchlineText": "The p is silent.",
      },
      Object {
        "jokeText": "How many optometrists does it take to change a light bulb? 1 or 2? 1... or 2?",
        "punchlineText": null,
      },
      Object {
        "jokeText": "I was thinking about moving to Moscow but there is no point Russian into things.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why does Waldo only wear stripes?",
        "punchlineText": "Because he doesn't want to be spotted.",
      },
      Object {
        "jokeText": "Do you know where you can get chicken broth in bulk?",
        "punchlineText": "The stock market.",
      },
      Object {
        "jokeText": "I used to work for a soft drink can crusher. It was soda pressing.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "A ghost walks into a bar and asks for a glass of vodka but the bar tender says, “sorry we don’t serve spirits”",
        "punchlineText": null,
      },
      Object {
        "jokeText": "I went to the zoo the other day, there was only one dog in it. It was a shitzu.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "I gave all my dead batteries away today, free of charge.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why are skeletons so calm?",
        "punchlineText": "Because nothing gets under their skin.",
      },
      Object {
        "jokeText": "There’s a new type of broom out, it’s sweeping the nation.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why don’t seagulls fly over the bay?",
        "punchlineText": "Because then they’d be bay-gulls!",
      },
      Object {
        "jokeText": "What did celery say when he broke up with his girlfriend?",
        "punchlineText": "She wasn't right for me, so I really don't carrot all.",
      },
      Object {
        "jokeText": "Q: What’s 50 Cent’s name in Zimbabwe?",
        "punchlineText": "A: 400 Million Dollars.",
      },
      Object {
        "jokeText": "What's the worst thing about ancient history class?",
        "punchlineText": "The teachers tend to Babylon.",
      },
      Object {
        "jokeText": "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Did you hear about the guy whose whole left side was cut off?",
        "punchlineText": "He's all right now.",
      },
      Object {
        "jokeText": "Why didn’t the skeleton cross the road?",
        "punchlineText": "Because he had no guts.",
      },
      Object {
        "jokeText": "What did one nut say as he chased another nut?",
        "punchlineText": "I'm a cashew!",
      },
      Object {
        "jokeText": "Chances are if you' ve seen one shopping center, you've seen a mall.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "How come the stadium got hot after the game?",
        "punchlineText": "Because all of the fans left.",
      },
      Object {
        "jokeText": "Why was it called the dark ages?",
        "punchlineText": "Because of all the knights.",
      },
      Object {
        "jokeText": "A steak pun is a rare medium well done.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why did the tomato blush?",
        "punchlineText": "Because it saw the salad dressing.",
      },
      Object {
        "jokeText": "Did you hear the joke about the wandering nun?",
        "punchlineText": "She was a roman catholic.",
      },
      Object {
        "jokeText": "What creature is smarter than a talking parrot?",
        "punchlineText": "A spelling bee.",
      },
      Object {
        "jokeText": "I'll tell you what often gets over looked... garden fences.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why did the kid cross the playground?",
        "punchlineText": "To get to the other slide.",
      },
      Object {
        "jokeText": "Why do birds fly south for the winter?",
        "punchlineText": "Because it's too far to walk.",
      },
      Object {
        "jokeText": "What is a centipedes's favorite Beatle song?",
        "punchlineText": "I want to hold your hand, hand, hand, hand...",
      },
      Object {
        "jokeText": "My first time using an elevator was an uplifting experience. The second time let me down.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "To be Frank, I'd have to change my name.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Slept like a log last night … woke up in the fireplace.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why does a Moon-rock taste better than an Earth-rock?",
        "punchlineText": "Because it's a little meteor.",
      },
      Object {
        "jokeText": "How do you fix a damaged jack-o-lantern?",
        "punchlineText": "You use a pumpkin patch.",
      },
      Object {
        "jokeText": "What did the late tomato say to the early tomato?",
        "punchlineText": "I’ll ketch up",
      },
      Object {
        "jokeText": "I have kleptomania, but when it gets bad, I take something for it.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "I used to be addicted to soap, but I'm clean now.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "When is a door not a door?",
        "punchlineText": "When it's ajar.",
      },
      Object {
        "jokeText": "I made a belt out of watches once... It was a waist of time.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why did Mozart kill all his chickens?",
        "punchlineText": "Because when he asked them who the best composer was, they'd all say \\"Bach bach bach!\\"",
      },
      Object {
        "jokeText": "This furniture store keeps emailing me, all I wanted was one night stand!",
        "punchlineText": null,
      },
      Object {
        "jokeText": "How do you find Will Smith in the snow?",
        "punchlineText": "Look for fresh prints.",
      },
      Object {
        "jokeText": "My sister bet me $15 that I couldn't build a car out of spaghetti. You should have seen the look on her face as I drove pasta.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "I just read a book about Stockholm syndrome. It was pretty bad at first, but by the end I liked it.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why do trees seem suspicious on sunny days?",
        "punchlineText": "Dunno, they're just a bit shady.",
      },
      Object {
        "jokeText": "If at first you don't succeed, sky diving is not for you!",
        "punchlineText": null,
      },
      Object {
        "jokeText": "I'd like to start a diet, but I've got too much on my plate right now.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "What kind of music do mummy's like?",
        "punchlineText": "Rap",
      },
      Object {
        "jokeText": "What's large, grey, and doesn't matter?",
        "punchlineText": "An irrelephant.",
      },
      Object {
        "jokeText": "A book just fell on my head. I only have my shelf to blame.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "What did the dog say to the two trees?",
        "punchlineText": "Bark bark.",
      },
      Object {
        "jokeText": "If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why can't your nose be 12 inches long?",
        "punchlineText": "Because then it'd be a foot!",
      },
      Object {
        "jokeText": "What do you call a troublesome Canadian high schooler?",
        "punchlineText": "A poutine.",
      },
      Object {
        "jokeText": "A magician was driving down the street and then he turned into a driveway.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Don't trust atoms. They make up everything.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "If you walk into a forest and cut down a tree, but the tree doesn't understand why you cut it down, do you think it's stumped?",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Where do bees go to the bathroom?",
        "punchlineText": "The BP station.",
      },
      Object {
        "jokeText": "What is the best way to carve?",
        "punchlineText": "Whittle by whittle.",
      },
      Object {
        "jokeText": "Why did the tree go to the dentist?",
        "punchlineText": "It needed a root canal.",
      },
      Object {
        "jokeText": "It was raining cats and dogs the other day. I almost stepped in a poodle.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Why do bananas have to put on sunscreen before they go to the beach?",
        "punchlineText": "Because they might peel!",
      },
      Object {
        "jokeText": "What do you call a bee that lives in America?",
        "punchlineText": "A USB.",
      },
      Object {
        "jokeText": "I was wondering why the frisbee was getting bigger, then it hit me.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "What's the difference between a hippo and a zippo?",
        "punchlineText": "One is really heavy, the other is a little lighter.",
      },
      Object {
        "jokeText": "What concert costs only 45 cents?",
        "punchlineText": "50 cent featuring Nickelback.",
      },
      Object {
        "jokeText": "I couldn't figure out how the seat belt worked. Then it just clicked.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "What did the green grape say to the purple grape?",
        "punchlineText": "BREATH!!",
      },
      Object {
        "jokeText": "What do you call a dad that has fallen through the ice?",
        "punchlineText": "A Popsicle.",
      },
      Object {
        "jokeText": "Two parrots are sitting on a perch. One turns to the other and asks, \\"do you smell fish?\\"",
        "punchlineText": null,
      },
      Object {
        "jokeText": "Bad at golf?",
        "punchlineText": "Join the club.",
      },
      Object {
        "jokeText": "I had a pair of racing snails. I removed their shells to make them more aerodynamic, but they became sluggish.",
        "punchlineText": null,
      },
      Object {
        "jokeText": "What do you call a pile of cats?",
        "punchlineText": "A Meowtain.",
      },
    ]
  `);
});

const jokes = [
  "What kind of dog lives in a particle accelerator? A Fermilabrador Retriever.",
  "Why did the feline fail the lie detector test? Because he be lion.",
  "I used to be a banker, but I lost interest.",
  "Did you hear the one about the guy with the broken hearing aid? Neither did he.",
  "What do you call a fly without wings? A walk.",
  "When my wife told me to stop impersonating a flamingo, I had to put my foot down.",
  "What do you call someone with no nose? Nobody knows.",
  "What time did the man go to the dentist? Tooth hurt-y.",
  "Why can’t you hear a pterodactyl go to the bathroom? The p is silent.",
  "How many optometrists does it take to change a light bulb? 1 or 2? 1... or 2?",
  "I was thinking about moving to Moscow but there is no point Russian into things.",
  "Why does Waldo only wear stripes? Because he doesn't want to be spotted.",
  "Do you know where you can get chicken broth in bulk? The stock market.",
  "I used to work for a soft drink can crusher. It was soda pressing.",
  "A ghost walks into a bar and asks for a glass of vodka but the bar tender says, “sorry we don’t serve spirits”",
  "I went to the zoo the other day, there was only one dog in it. It was a shitzu.",
  "I gave all my dead batteries away today, free of charge.",
  "Why are skeletons so calm? Because nothing gets under their skin.",
  "There’s a new type of broom out, it’s sweeping the nation.",
  "Why don’t seagulls fly over the bay? Because then they’d be bay-gulls!",
  "What did celery say when he broke up with his girlfriend? She wasn't right for me, so I really don't carrot all.",
  "Q: What’s 50 Cent’s name in Zimbabwe? A: 400 Million Dollars.",
  "What's the worst thing about ancient history class? The teachers tend to Babylon.",
  "I'm tired of following my dreams. I'm just going to ask them where they are going and meet up with them later.",
  "Did you hear about the guy whose whole left side was cut off? He's all right now.",
  "Why didn’t the skeleton cross the road? Because he had no guts.",
  "What did one nut say as he chased another nut?  I'm a cashew!",
  "Chances are if you' ve seen one shopping center, you've seen a mall.",
  "I knew I shouldn't steal a mixer from work, but it was a whisk I was willing to take.",
  "How come the stadium got hot after the game? Because all of the fans left.",
  "Why was it called the dark ages? Because of all the knights.",
  "A steak pun is a rare medium well done.",
  "Why did the tomato blush? Because it saw the salad dressing.",
  "Did you hear the joke about the wandering nun? She was a roman catholic.",
  "What creature is smarter than a talking parrot? A spelling bee.",
  "I'll tell you what often gets over looked... garden fences.",
  "Why did the kid cross the playground? To get to the other slide.",
  "Why do birds fly south for the winter? Because it's too far to walk.",
  "What is a centipedes's favorite Beatle song? I want to hold your hand, hand, hand, hand...",
  "My first time using an elevator was an uplifting experience. The second time let me down.",
  "To be Frank, I'd have to change my name.",
  "Slept like a log last night … woke up in the fireplace.",
  "Why does a Moon-rock taste better than an Earth-rock? Because it's a little meteor.",
  "How do you fix a damaged jack-o-lantern? You use a pumpkin patch.",
  "What did the late tomato say to the early tomato? I’ll ketch up",
  "I have kleptomania, but when it gets bad, I take something for it.",
  "I used to be addicted to soap, but I'm clean now.",
  "When is a door not a door? When it's ajar.",
  "I made a belt out of watches once... It was a waist of time.",
  `Why did Mozart kill all his chickens? Because when he asked them who the best composer was, they'd all say "Bach bach bach!"`,
  "This furniture store keeps emailing me, all I wanted was one night stand!",
  "How do you find Will Smith in the snow? Look for fresh prints.",
  "My sister bet me $15 that I couldn't build a car out of spaghetti. You should have seen the look on her face as I drove pasta.",
  "I just read a book about Stockholm syndrome. It was pretty bad at first, but by the end I liked it.",
  "Why do trees seem suspicious on sunny days? Dunno, they're just a bit shady.",
  "If at first you don't succeed, sky diving is not for you!",
  "I'd like to start a diet, but I've got too much on my plate right now.",
  "What kind of music do mummy's like? Rap",
  "What's large, grey, and doesn't matter? An irrelephant.",
  "A book just fell on my head. I only have my shelf to blame.",
  "What did the dog say to the two trees? Bark bark.",
  "If a child refuses to sleep during nap time, are they guilty of resisting a rest?",
  "Why can't your nose be 12 inches long? Because then it'd be a foot!",
  "What do you call a troublesome Canadian high schooler? A poutine.",
  "A magician was driving down the street and then he turned into a driveway.",
  "Don't trust atoms. They make up everything.",
  "If you walk into a forest and cut down a tree, but the tree doesn't understand why you cut it down, do you think it's stumped?",
  "Where do bees go to the bathroom?  The BP station.",
  "What is the best way to carve? Whittle by whittle.",
  "Why did the tree go to the dentist? It needed a root canal.",
  "It was raining cats and dogs the other day. I almost stepped in a poodle.",
  "Why do bananas have to put on sunscreen before they go to the beach? Because they might peel!",
  "What do you call a bee that lives in America? A USB.",
  "I was wondering why the frisbee was getting bigger, then it hit me.",
  "What's the difference between a hippo and a zippo? One is really heavy, the other is a little lighter.",
  "What concert costs only 45 cents? 50 cent featuring Nickelback.",
  "I couldn't figure out how the seat belt worked. Then it just clicked.",
  "What did the green grape say to the purple grape? BREATH!!",
  "What do you call a dad that has fallen through the ice? A Popsicle.",
  'Two parrots are sitting on a perch. One turns to the other and asks, "do you smell fish?"',
  "Bad at golf? Join the club.",
  "I had a pair of racing snails. I removed their shells to make them more aerodynamic, but they became sluggish.",
  "What do you call a pile of cats?  A Meowtain."
];
