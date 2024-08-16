let btn = document.querySelector("button");
let main = document.querySelector("main");

btn.addEventListener("click", () => {
  addNote();
});

let savenote = () => {
  let Not = document.querySelectorAll(".note textarea");
  console.log(Not);

  let data = [];
  Not.forEach((Note) => {
    data.push(Note.value);
  });

  if (data.length === 0) {
    localStorage.removeItem("Not");
  } else {
    localStorage.setItem("Not", JSON.stringify(data));
  }
};

let addNote = (text = "") => {
  let Note = document.createElement("div");
  Note.classList.add("note");
  Note.innerHTML = `   <div class="tool">
          <i class=" Save fa-solid fa-floppy-disk"></i>
          <i class=" delete fa-solid fa-trash"></i>
        </div>
        <textarea name="" id="">${text}</textarea>`;

  Note.querySelector(".delete").addEventListener("click", () => {
    Note.remove();
    savenote();
  });
  Note.querySelector(".Save").addEventListener("click", () => {
    savenote();
    alert("Aapka note save ho gaya hai!");
  });

  main.appendChild(Note);
  savenote();
};

// Function to load notes from localStorage
let loadNotes = () => {
  if (loadNotes === null) {
    addNote();
  }
  let lsNote = JSON.parse(localStorage.getItem("Not") || "[]");
  lsNote.forEach((text) => {
    addNote(text);
  });
};

// Load notes from localStorage when the page loads
document.addEventListener("DOMContentLoaded", loadNotes);
