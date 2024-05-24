var nameList = [
    'Tim','Pasee','Fuu','Dev',
    'Fly','Soar','Power',
    'Fall','Cliff','Rend',
    'Green','Yellow','Gold','Demon','Demonic','Panda','Cat',
    'Kitty','Kitten','Zero','Memory','Trooper','XX','Bandit',
    'Fear','Light','Glow','Tread','Deep','Deeper',
    'Min','Yuro','Woorsy','Emmy','Horsly',
    'Gamer','Mule','Colt','Cult','Magnum',
    'Gymmer','Assault','Recon','Trap','Trapper','Redeem','Coder',
    'Scoopy','Wright','Near','Santana','Open','Cube',
    'Geo','Genome','Germ','Spaz','Shot','Echo','Beta','Alpha',
    'Gamma','Omega','Seal','Squid','Lord','King',
    'Duke','Rest','Fire','Flame','Morrow','Break','Breaker','Numb',
    'Sad','Happy','Joy','Joyful','Crimson','Destiny','Deceit','Lies',
    'Lie','Honest','Destined','Bloxxer','Hawk','Eagle','Hawker','Walker',
    'Zombie','Sarge','Capt','Captain','Punch','One','Two','Uno','Slice',
    'Slash','Melt','Melted','Melting','Fell','Wolf','Hound',
    'Legacy','Sharp','Dead','Mew','Chuckle','Bubba','Bubble','Smasher','Extreme','Multi','Death','Elevator','Wrench','Grease','Head','Theme','Grand'
];

var messagesList = [

    "You're doing an amazing job! 🔥",
    "Loving the content, keep it up!",
    "Great stream as always!",
    "Your energy is contagious! 👍",
    "So happy to be here, your streams are the best!",

    "That was an awesome move!",
    "Wow, that was intense!",
    "This is so entertaining, thank you!",
    "Can't believe you pulled that off!",
    "What's everyone's favorite moment so far?",

    "Video quality is amazing!🔥",
    "Anyone else having trouble with the sound?",
    "Stream is buffering a lot for me.",
    
    "This community is awesome!💖",
    "Let's get some hype in the chat!",
    "Don't forget to like and subscribe",
    "Thanks for the support, everyone!",

    "Having a blast here! 🔥",
    "This is so much fun!",
    "That moment was hilarious! 👍",
    "You just made my day! 💖"
]


export const generateRandomName=()=>{
   return nameList[Math.floor( Math.random() * nameList.length )];
}

export const generateRandomMessage=()=>{
    return messagesList[Math.floor( Math.random() * messagesList.length )];
 }