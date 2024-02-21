    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let todoList = document.getElementById("todo-list")


    let arrayOfTodos = [
      {
      "userId": 14,
      "id": 1,
      "title": "delectus aut autem",
      "completed": false
  },
  {
      "userId": 20,
      "id": 2,
      "title": "delectus aut autem",
      "completed": false
  }]
  
  const fetchTodos = () => {
      fetch('https://jsonplaceholder.typicode.com/todos')
      .then( (response) => response.json())
      .then( (json) => arrayOfTodos = json)
  }
  
  const logTodos = () => {
      console.log(arrayOfTodos)
  }
  
  const populateTodos = () => {
    for (i = 0; i < arrayOfTodos.length; i++) {
      let newLi = document.createElement('li')
      let newText = document.createTextNode(arrayOfTodos[i].title)
      newLi.appendChild(newText)
      // newLi = arrayOfTodos[i]
      todoList.append(newLi)
    }
  }