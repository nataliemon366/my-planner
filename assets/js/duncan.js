// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCxPiSpKNz2b2nPMsGf4gvZKVtHZN8MN9Q",
  authDomain: "to-do-list-db91b.firebaseapp.com",
  databaseURL: "https://to-do-list-db91b.firebaseio.com",
  projectId: "to-do-list-db91b",
  storageBucket: "to-do-list-db91b.appspot.com",
  messagingSenderId: "1011429005125",
  appId: "1:1011429005125:web:f1949d6443fa497ac3102c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();
  db.collection("toAdd").add({
   
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

// function render() {
//   var form = $("<form id='todo-form'>");
//   var todoInput = $("<input name='todo' id='todo'>");
//   var submit = $("<input type='submit' value='Add To Do'>");
//   var item = $("<todo-list-item>");
//   form.append(todoInput, submit, item);
//   $("body").prepend(form);
// }
// render();
// $(document)
//   .on("submit", "#todo-form", function() {
//     event.preventDefault();
//     $("#todo").val();
  

  
$(document).ready(
  function(){
      $('#button').click(
          function(){
              var toAdd = $('input[name=ListItem]').val();
               $('ol').append('<li>' + toAdd + '</li>');
          });
     
     $("input[name=ListItem]").keyup(function(event){
        if(event.keyCode == 13){
          $("#button").click();
        }         
    });
    
    $(document).on('dblclick','li', function(){
      $(this).toggleClass('strike').fadeOut('slow');    
    });
    
    $('input').focus(function() {
      $(this).val('');
    });
    
     
    
  }
);