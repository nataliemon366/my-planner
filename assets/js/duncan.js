// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyCxPiSpKNz2b2nPMsGf4gvZKVtHZN8MN9Q",
//   authDomain: "to-do-list-db91b.firebaseapp.com",
//   databaseURL: "https://to-do-list-db91b.firebaseio.com",
//   projectId: "to-do-list-db91b",
//   storageBucket: "to-do-list-db91b.appspot.com",
//   messagingSenderId: "1011429005125",
//   appId: "1:1011429005125:web:f1949d6443fa497ac3102c"
// };
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var db = firebase.firestore();

// function render() {
//   var form = $("<form id='todo-form'>");
//   var todoInput = $("<input name='todo' id='todo'>");
//   var submit = $("<input type='submit' value='Add To Do'>");
//   var item = $("<todo-list-item>");
//   form.append(todoInput, submit, item);

//   var ul = $("<ul id='todo-list'>");

//   $("body").prepend(form, ul);
// }
// render();

// $(document).on("submit", "#todo-form", function() {
//   event.preventDefault();
//   var todo = $("#todo").val();
//   console.log(todo);

//   // save it
//   db.collection("Todo")
//     .add({ todo: todo })
//     .then(function(docRef) {
//       console.log("Document written with ID: ", docRef.id);


//       var btnDone = $("<button>").text("Done")
//       var btnRemove = $("<button>").text("Remove")

//       // show it
//       var li = $("<li>").text(todo).attr("data-id", docRef.id);
//       li.append(btnDone, btnRemove)
//       $("#todo-list").append(li);
//     })
//     .catch(function(error) {
//       console.error("Error adding document: ", error);
//     });
// });

$(document).ready(function() {
  $("#button").click(function() {
    var toAdd = $("input[name=ListItem]").val();
    $("ol").append("<li>" + toAdd + "</li>");
  });

  $("input[name=ListItem]").keyup(function(event) {
    if (event.keyCode == 13) {
      $("#button").click();
    }
  });

  $(document).on("dblclick", "li", function() {
    $(this)
      .toggleClass("strike")
      .fadeOut("slow");
  });

  $("input").focus(function() {
    $(this).val("");
  });



  var quotes =
  [
    "It does not matter how slowly you go as long as you do not stop.",
    "Only I can change my life. No one can do it for me.",
    "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
    "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
    "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    "Perfection is not attainable, but if we chase perfection we can catch excellence.",
    "We must let go of the life we have planned, so as to accept the one that is waiting for us.",
    "The privilege of a lifetime is being who you are."
  ];
 

  
  function randomQuotes(arr){
    return arr[(Math.floor(Math.random() * arr.length))];
  } 
  $("#quotes").text( randomQuotes(quotes))
 
 $("#motivateMe").on('click', function(){
  $("#quotes").text( randomQuotes(quotes))
 })



});
