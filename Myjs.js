const Alert = document.getElementById('alert');

function alerS(){
  Alert.classList.toggle('d-none');
}

var telegram_bot_id = "1987403419:AAHRIMG6c20UZGBXmXZ02JYjbwP8YFlXZ4c";
//chat id
var chat_id = 1994166104;
var u_name, email, message;
var ready = function() {
  u_name = document.getElementById("name").value;
  email = document.getElementById("email").value;
  message = document.getElementById("message").value;
  message = "Nama: " + u_name + "\nEmail / No HP: " + email + "\nPesan: " + message;
};
var sender = function() {
  ready();
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json",
      "cache-control": "no-cache"
    },
    "data": JSON.stringify({
      "chat_id": chat_id,
      "text": message
    })
  };
  $.ajax(settings).done(function(response) {
    console.log(response);
  });
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  return false;
};

const form = document.forms['myForm']
const btnKirim = document.querySelector('.button');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-Alert');
const Alerr = document.querySelector('.Alerr');
form.addEventListener('submit', e => {
      e.preventDefault()
      
      //tampilkan loading
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      
      fetch(form, { method: 'POST', body: new FormData(form)})
      
      .then(response =>{
        //kembalikan loading seperti semula
        btnKirim.classList.toggle('d-none');
        btnLoading.classList.toggle('d-none');
        myAlert.classList.toggle('d-none');
        form.reset();
        console.log('Success!', response)
        
      })
        .catch(error => {
          Alerr.classList.toggle('d-none');
          form.reset();
          console.error('Error!', error.message)
        })
      })