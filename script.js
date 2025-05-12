function handleSubmit(event) {
    event.preventDefault(); // prevent page reload
  
    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;
  
    const thanks = document.getElementById("thanks");
    thanks.innerText = `Thanks for your message, ${name}! We'll respond soon.`;
  
    // Clear the form
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
  