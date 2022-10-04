// Create array with possible outcomes  for rock paper scissors game.
const outcomeTable = [];
    outcomeTable[0] = ["DRAW", "WIN",  "LOSE"];
    outcomeTable[1] = ["LOSE", "DRAW", "WIN"];
    outcomeTable[2] = ["WIN",  "LOSE", "DRAW"];

// Create an array of riddles and answers for "Quizzit" game.
const RIDDLES = [];
RIDDLES[0] = ["I'm rarely touched but often held. If you have wit, you'll use me well. What am I?","A Tongue"];
RIDDLES[1] = ["I have seas with no water, coast with no sand, towns without people, mountains without land. What am I?","A Map"];
RIDDLES[2] = ["Often will I spin a tale, never will I charge a fee. I'll amuse you an entire eve, but, alas you wont remember me. What am I?", "A Dream"];
RIDDLES[3] = ["What does it have in it pocketsessss?", "A Ring"];
RIDDLES[4] = ["I have roots that no one sees. I am taller then the trees. Up and up I go. And yet I never grow. What am i?", "A Mountain"];

// Create array of "false" answers for "Quizzit" game.
const FALSE_ANSWERS = ["A Tree", "A Cloud", "A Journey",
                                "A Hammer","The Sea", "The Sky",
                                "A Foot", "An Arm", "A Leg",
                                "A Vision", "A Lake", "An Egg",
                                "The Grass", "The Ground", "A Sword"
];

// Create array of words to guess for "Guillotine game."
const WORDS = ["ABSOLUTE", 
                "BATHROOM", 
                "CHAMPION", 
                "DATABASE",
                "BANANAS", 
                "BICYCLE", 
                "RESTAURANT", 
                "DOLPHIN", 
                "AMENITIES",
                "RAINFOREST"];