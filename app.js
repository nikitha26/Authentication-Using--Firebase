var userdata = document.querySelector('#cafe-list')
const form  = document.querySelector('#add-cafe-form')
//create element and reder data
function render(doc){
   let li = document.createElement('li');
   let username = document.createElement('span')
   let favcolor = document.createElement('span')
   let cross = document.createElement('div')

   li.setAttribute('data-id',doc.id);
   username.textContent = doc.data().username;
   favcolor.textContent = doc.data().favcolor;
   cross.textContent = "X";
    
   li.appendChild(username)
   li.appendChild(favcolor);
   li.appendChild(cross);

   userdata.appendChild(li);
   //deleting data from firestore
   cross.addEventListener('click',(e) =>{
     e.stopPropagation();
     let id = e.target.parentElement.getAttribute('data-id');
     db.collection('registration').doc(id).delete();
     alert("Deleted Data In Firebase")
   })
  }

//get data from firebase
db.collection('registration').get().then((snapshot) =>{
  snapshot.docs.forEach(doc => {
      render(doc)
  });
})

//saving data
form.addEventListener('submit',(e) =>{
  e.preventDefault()
  var x = form.name.value;
  var y = form.color.value;
  if(x && y){
    db.collection('registration').add({
      username:form.name.value,
      favcolor:form.color.value,
    })
    form.name.value = '';
    form.color.value = '';
    alert("Your Data Successfully Added To Firestore")
  }
  else if(x == ""){
    alert("Enter Both Fields")
   }
   else if(x||y){
        alert("Enter Properly")
   }
})
