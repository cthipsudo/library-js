let myLibrary = [];

function Book(title, author, pages, read, info) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => info;
}

function addBookToLibrary() {}

const createInitialBooks = () => {
  let alice = new Book(
    "Alice in Wonderland",
    "Lewis Carroll",
    96,
    false,
    "After a tumble down the rabbit hole, Alice finds herself far away from home in the absurd world of Wonderland. As mind-bending as it is delightful, Lewis Carroll’s 1865 novel is pure magic for young and old alike."
  );

  let theHobbit = new Book(
    "The Hobbit, Part One",
    "J.R.R. Tolkien",
    230,
    false,
    `Smaug certainly looked fast asleep, when Bilbo peeped once more from the entrance. He was just about to step out onto the floor when he caught a sudden thin ray of red from under the drooping lid of Smaug's left eye. He was only pretending to be sleep! He was watching the tunnel entrance!

    Whisked from his comfortable hobbit-hole by Gandalf the wizard and a band of dwarves, Bilbo Baggins finds himself caught up in a plot to raid the treasure hoard of Smaug the Magnificent, a large and very dangerous dragon.`
  );

  let shadowDance = new Book(
    "A Dance of Cloaks",
    "David Dalglish",
    386,
    true,
    `Thren Felhorn is the greatest assassin of his time. Marshalling the thieves’ guilds under his control, he declares war against the Trifect, an allegiance of wealthy and powerful nobles.

    Aaron Felhorn has been groomed since birth to be Thren’s heir. Sent to kill the daughter of a priest, Aaron instead risks his own life to protect her from the wrath of his guild. In doing so, he glimpses a world beyond poison, daggers, and the iron control of his father.
    
    Guilds twist and turn, trading allegiances for survival. The Trifect weakens, its reputation broken, its money dwindling. The players take sides as the war nears its end, and Thren puts in motion a plan to execute hundreds.
    
    Only Aaron can stop the massacre and protect those he loves…`
  );
  myLibrary.push(alice);
  myLibrary.push(theHobbit);
  myLibrary.push(shadowDance);
};

createInitialBooks();
console.log(myLibrary);
