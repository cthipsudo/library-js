let myLibrary = [];
let bookGrid = document.querySelector(".book-grid");
let form = document.querySelector("form");
let formWrapper = document.querySelector(".form-wrapper");

function Book(title, author, pages, read, info) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = () => info;
  this.changeReadStatus = () => {
    this.read = !this.read;
  };
}

function addBookToLibrary(arr) {
  const book = new Book(
    arr[0],
    arr[1],
    +arr[2],
    arr[3] === "true" ? true : false,
    arr[4]
  );
  myLibrary.push(book);
  // clear and display books
  initializeListeners();
}

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

const displayBooks = (count) => {
  if (myLibrary.length === count) {
    return;
  }
  let book = myLibrary[count];
  const bookWrapper = document.createElement("div");
  const bookTitle = document.createElement("h2");
  const bookAuthor = document.createElement("h3");
  const bookRead = document.createElement("h3");
  const bookPages = document.createElement("p");
  const bookDesc = document.createElement("p");
  const controlsWrapper = document.createElement("div");
  const removeButton = document.createElement("span");
  const readButton = document.createElement("span");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookRead.textContent = book.read ? "Read" : "Not Read";
  bookPages.textContent = `Pages: ${book.pages}`;
  bookDesc.textContent = book.info();

  removeButton.textContent = "x";
  removeButton.classList.toggle("remove");
  removeButton.setAttribute("data-index", count);

  readButton.textContent = "Read";
  readButton.classList.toggle("read-button");
  readButton.classList.toggle(book.read ? "read" : "unread");
  readButton.setAttribute("data-index", count);

  controlsWrapper.classList.add("controls-wrapper");
  controlsWrapper.appendChild(readButton);
  controlsWrapper.appendChild(removeButton);
  bookTitle.appendChild(controlsWrapper);

  bookWrapper.classList.toggle("book");
  bookWrapper.setAttribute("data-index", count);
  bookWrapper.appendChild(bookTitle);
  bookWrapper.appendChild(bookAuthor);
  bookWrapper.appendChild(bookRead);
  bookWrapper.appendChild(bookPages);
  bookWrapper.appendChild(bookDesc);
  bookGrid.appendChild(bookWrapper);
  //count++
  displayBooks(++count); // needs to be prefix cause return value
};

const initializeSubmitNewBook = () => {
  const newBookButton = document.querySelector(".new-book");
  newBookButton.addEventListener("click", () => {
    formWrapper.classList.add("display");
  });

  // SubmitListener
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    //console.log('Hello');
    const formData = new FormData(form);
    //console.log(formData.entries());
    let dataArr = [];
    for (let pair of formData.entries()) {
      //console.log(pair);
      dataArr.push(pair[1]);
    }
    addBookToLibrary(dataArr);
    formWrapper.classList.remove("display");
  });
};

const clearBooks = () => {
  while (bookGrid.firstChild) {
    bookGrid.removeChild(bookGrid.firstChild);
  }
};

const initializeRemoveBookListener = () => {
  const removeButtons = document.querySelectorAll(".book span.remove");
  removeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      removeBookFromArray(+button.getAttribute("data-index"));
    });
  });
};

const removeBookFromArray = (index) => {
  myLibrary.splice(index, 1);
  initializeListeners();
};

const addReadButtonListener = () => {
  const readButtons = document.querySelectorAll(".book span.read-button");
  readButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonindex = button.getAttribute("data-index");
      myLibrary[buttonindex].changeReadStatus();
      initializeListeners();
    });
  });
};

const initializeListeners = () => {
  clearBooks();
  displayBooks(0);
  initializeRemoveBookListener();
  addReadButtonListener();
};

const main = () => {
  createInitialBooks();
  initializeSubmitNewBook();
  //console.log(myLibrary);
  initializeListeners();
};

main();
