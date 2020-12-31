var userdata = document.querySelector('#cafe-list')
const form  = document.querySelector('#add-cafe-form')
//create element and reder data
function render(doc){
   let li = document.createElement('li');
   let username = document.createElement('span')
   let favcolor = document.createElement('span')

   li.setAttribute('data-id',doc.id);
   username.textContent = doc.data().username;
   favcolor.textContent = doc.data().favcolor;
    
   li.appendChild(username)
   li.appendChild(favcolor);

   userdata.appendChild(li);
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
  db.collection('registration').add({
    username:form.name.value,
    favcolor:form.color.value,
  })
  form.name.value = '';
  form.color.value = '';
})
