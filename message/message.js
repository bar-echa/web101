const scriptURL = 'https://script.google.com/macros/s/AKfycbyVedP9ZD-mFHmjCkUUKMLe01g3gYdTZJ5DSjqRxaq4Y9892JJ3C-IPSQD7lnVeWh7E7w/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "message sent successfully"
        setTimeout(function(){
         msg.innerHTML =""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

var icon = document.getElementById('icon');
icon.onclick = function(){
    document.body.classList.toggle("dark-theme")

}

