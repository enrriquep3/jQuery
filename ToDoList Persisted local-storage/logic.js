

function renderTodos(list) {
    $("#to-dos").empty(); // empties out the html
  
    // render our todos to the page
    for (var i = 0; i < list.length; i++) {
      // Create a new variable that will hold a "<p>" tag.
      // Then set the to-do "value" as text to this <p> element.
      var toDoItem = $("<p>");
      toDoItem.text(list[i]);
  
      // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
      // Give your button a data attribute called data-to-do and a class called "checkbox".
      // Lastly add a checkmark inside.
  
      var toDoClose = $("<button>");
  
      toDoClose.attr("data-to-do", i);
      toDoClose.addClass("checkbox");
      toDoClose.text("✓");
  
      // Append the button to the to do item
      toDoItem = toDoItem.prepend(toDoClose);
  
      // Add the button and to do item to the to-dos div
      $("#to-dos").append(toDoItem);
    }
  }
  
  $("#add-to-do").on("click", function(event) {
    event.preventDefault();
  
    // Get the to-do "value" from the textbox and store it as a variable
    var toDoTask = $("#to-do").val().trim();
  
    // Adding our new todo to our local list variable and adding it to local storage
    list.push(toDoTask);
  
    // Update the todos on the page
    renderTodos(list);
  
    // Save the todos into localstorage.
    // We need to use JSON.stringify to turn the list from an array into a string
    localStorage.setItem("todolist", JSON.stringify(list));
  
    // Clear the textbox when done
    $("#to-do").val("");
  });
  
  // When a user clicks a check box then delete the specific content
  $(document).on("click", ".checkbox", function() {
    // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
    var toDoNumber = $(this).attr("data-to-do");
  
    // Deletes the item marked for deletion
    list.splice(toDoNumber, 1);
  
    // Update the todos on the page
    renderTodos(list);
  
    // Save the todos into localstorage.
    // We need to use JSON.stringify to turn the list from an array into a string
    localStorage.setItem("todolist", JSON.stringify(list));
  });
  
  // Load the todos from localstorage.
  // We need to use JSON.parse to turn the string retrieved  from an array into a string
  var list = JSON.parse(localStorage.getItem("todolist"));
  
  // Checks to see if the todolist exists in localStorage and is an array currently
  // If not, set a local list variable to an empty array
  // Otherwise list is our current list of todos
  if (!Array.isArray(list)) {
    list = [];
  }
  
  // render our todos on page load
  renderTodos(list);
  