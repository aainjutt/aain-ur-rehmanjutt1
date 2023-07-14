import { combineReducers, createStore } from 'redux'

let initialData = {
  user: [],
  currentUser: {}
}
function userSection(oldData = initialData, newData) {
  

  if (newData.type == 'userCreateKia') {

    oldData.user.push(newData.payload)

    console.log(oldData);

  } else if (newData.type == 'Header_Name') {
    console.log(newData.payload);

    oldData.currentUser = newData.payload
    console.log(newData.payload);

  } else if (newData.type == 'user_Delete') {

    oldData.currentUser = newData.payload ==
      oldData.user.splice(newData.payload, 1)

    console.log('Delete kia');

  } else if (newData.type == 'update_user') {
    oldData.user[newData.index] = newData.payload
  }

  return { ...oldData, user: [...oldData.user] }
}





let combineKia = combineReducers({ userSection });

export let maraStore = createStore(combineKia)