        
        let newButton = document.getElementById('new-btn'); 
        let saveButton = document.getElementById('save-button');
        let cancelButton = document.getElementById('cancel-button');
        let noteContainer = document.getElementById('new-note'); // gets new note section
        let cloneArea = document.getElementById('note-container'); // gets ENTIRE saved notes area
        let editArea = document.querySelectorAll('.edit-area'); //gets access to edit area
        
        let noteHeading = document.querySelectorAll('.note-heading'); // gets existing saved note heading
        let noteDescription = document.querySelectorAll('.note-description'); // gets existing saved note description

        let newHeading = document.getElementById("new-heading"); // gets NEW note heading
        let newNote = document.getElementById("note-input"); // gets NEW note description

        let deleteNoteButton = document.getElementById('delete-note-btn');
       
        //heading and description error messages in new note
        let headingError = document.getElementById('heading-error');
        let descriptionError = document.getElementById('description-error');
        
        //search bar filter functionality -----------------------------

        let searchBar = document.getElementById('search-bar');

        searchBar.addEventListener('keyup', filterItems);

        function filterItems(e){
            var text = e.target.value.toLowerCase();

            let notes = cloneArea.querySelectorAll('.note-block');
            
            Array.from(notes).forEach(function(note){
                let headingInNote = note.childNodes[3].textContent;
                let descriptionInNote = note.childNodes[5].textContent;
                
            if (headingInNote.toLowerCase().indexOf(text) != -1 || descriptionInNote.toLowerCase().indexOf(text) != -1){
                if (headingInNote === "" || descriptionInNote === ""){
                    note.style.display = "none";
                } else {
                    note.style.display = "block";
                };
            } else {
                note.style.display = 'none';
            }
            })
        }   

        //display new note input 
        newButton.addEventListener("click", function(){
            noteContainer.style.display = "block";
            saveButton.scrollIntoView();
            newButton.style.marginBottom = "0";
               
        })

            // save new note
             saveButton.addEventListener("click", function(){
                
            if(newHeading.value === "" && newNote.value === ""){
                
                headingError.innerHTML = "*Required";
                descriptionError.innerHTML = "*Required";

            } else if (newHeading.value === ""){
                
                headingError.innerHTML = "*Required";
                descriptionError.innerHTML = "";

            } else if (newNote.value === ""){
                
                headingError.innerHTML = "";
                descriptionError.innerHTML = "*Required";

            }  else {
                
            headingError.innerHTML = "";
            descriptionError.innerHTML = "";    
            let element = document.getElementById('note');
            let clone = element.cloneNode(true); 
            cloneArea.appendChild(clone); // adds new div notes section to dom
            clone.style.display = "block";       
            noteContainer.style.display = "none"; // hides new note container
            
            clone.childNodes[3].textContent = newHeading.value; // new heading value into new note heading
            clone.childNodes[5].textContent = newNote.value;
            console.log(clone.childNodes);
            newButton.scrollIntoView()
            newButton.style.marginBottom = "100px";
            newHeading.value = ""; // remove saved value from input field when user adds a new note again
            newNote.value = "";

            
            //Add delete function to clone
            clone.childNodes[1].addEventListener('click', function(e){
            if(e.target.classList.contains('delete')){
                if (confirm("Are you sure you want to delete this note?")){
               e.target.parentNode.style.display = "none";
                }                
           }
         })

        }

        }); 


        //cancel new note button
           cancelButton.addEventListener("click", function(){
            noteContainer.style.display = "none";
        })

       /* //add delete function to ORIGINAL
        deleteNoteButton.addEventListener('click', function(e){
           if(e.target.classList.contains('delete')){
            if (confirm("Are you sure you want to delete?")){
               e.target.parentNode.style.display = "none";
                } 
           }
         }) */
