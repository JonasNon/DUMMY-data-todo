    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let todoList = document.getElementById("todo-list")
    let currentUser = 1
    let completeList = document.getElementById("todo-list-completed")
    let filtered

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

  const populateTodosFiltered = () => {

    removeTodos()

    filtered = arrayOfTodos.filter((todo) => {
      return todo.userId == currentUser
    })
    console.log(filtered)

    for (i = 0; i < filtered.length; i++) {
      let newLi = document.createElement('li')
      let newText = document.createTextNode(filtered[i].title)
      newLi.appendChild(newText)
      // newLi = arrayOfTodos[i]
      todoList.append(newLi)
    }
  }


  const changeUser = () => {
    currentUser = document.getElementById("userNum").value
    console.log("pushed: " + currentUser)
  }


const removeTodos = () => {
  todoList.innerHTML = null
  completeList.innerHTML = null
}

const showComplete = () => {
  removeTodos()
  let completed = filtered.filter((todo) => {
    return todo.completed == true
  })
  let unDone = filtered.filter((todo) => {
    return todo.completed == false
  })
  for (i = 0; i < unDone.length; i++) {
    let newLi = document.createElement('li')
    let newText = document.createTextNode(unDone[i].title)
    newLi.appendChild(newText)
    // newLi = arrayOfTodos[i]
    todoList.append(newLi)
  }
  for (i = 0; i < completed.length; i++) {
    let newLi = document.createElement('li')
    let newText = document.createTextNode(completed[i].title)
    newLi.appendChild(newText)
    // newLi = arrayOfTodos[i]
    completeList.append(newLi)
  }
}