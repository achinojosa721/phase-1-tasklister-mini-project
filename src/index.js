  init()
  
  function init() {
    handleForm()
    handleClicks()
  }
  function handleForm() {
    //grab the form
    const form = document.getElementById("create-task-form")
    // add a 'submit' eventlistener to the form
    form.addEventListener('submit', (event) => {
      event.preventDefault()
      renderTask(event)
      event.target.reset()
    })
  }
      
      function renderTask(event){
        const input = event.target["new-task-description"].value
      // create li element update that li with text from the form
      const li = document.createElement("li")
      //update that li with text from the form
      li.innerText = input

      const delButton = document.createElement("button")
      delButton.innerText = "X"
      //add 'click' event to the li
      //delButton.addEventListener('click', () => {
      //  li.remove()
      //})
      li.append(delButton)
      //when we 'click' lets remove the li
      //find where it belongs on the DOM and append
      document.getElementById('tasks').appendChild(li)
      }

      function handleClicks() {
        document.getElementById('tasks').addEventListener('click', (e) => {
          console.log(e.target)
          console.log(e.currentTarget)

          if (e.target.nodeName == "BUTTON") {
            e.target.parentNode.remove()
          } else {
            console.log("cant do that")
          }
          
        })
      }
      //console.log(event.target)----> where event was triggered
      //console.log(event.target.currentTarget) -----> where the eventListener was attached

