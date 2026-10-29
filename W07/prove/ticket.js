const form = document.querySelector("#ticketForm");
const travelRange = document.querySelector("#typeRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

// Validate the input
  // Let the user know to Enter there student ID # if selected student
function updateNotesField() {
    const type = travelRange.value;

    // Let the user know to Enter there student ID # if selected student
    if (type === "student") {
        notesContainer.hidden = false;
        notesContainer.querySelector("label").textContent = "iNumber";
        notes.type = "number";
        notes.placeholder = "Enter your I#";
        notes.maxLength = 9;
    }
    // Let the user know to Enter there Access Code if selected Guest
    else if (type === "guest") {
        notesContainer.hidden = false;
        notesContainer.querySelector("label").textContent = "Access Code";
        notes.type = "text";
        notes.placeholder = "Enter Access Code";
    }
    else {
        notesContainer.hidden = true;
        notes.value = "";
    }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.typeRange.value;
  const availableDate = form.availableDate.value;
  const note = form.notes.value.trim();

  // First Attemped... notes. works better.

    if(type === 'student') {
        const iNumber = notes.value;
        // add an error message
        if(iNumber.length !== 9){
            output.textContent = "Student I# must be 9 digits";
            // exit function so the rest of the form deosn't submit
            return;   
    }  
}


  if (isPastDate(availableDate)) {
    output.textContent = "Please choose a later date.";
    return;
  }

    if (type === 'student'){
        output.innerHTML = `
        <h2>Tichet Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Type: ${type}</p>
        <p> I#: ${notes.value}</p>
        <p>Date: ${availableDate}</p>
        `;

        form.reset();
        updateNotesField();
        return;
    }

  output.innerHTML = `
  <h2>Tichet Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Type: ${type}</p>
  <p>Date: ${availableDate}</p>
  `;

  form.reset();
  updateNotesField();
});
       