const appData = (state, action) => {
  if (!state) {
    state = {
      login: {
        usernameInput: '',
        passwordInput: ''
      },
      search: {
        searchInput: ''
      },
      add: {
        nameInput: '',
        urlInput: '',
        description: ''
      }
    }
  }
  switch (action.type) {
    case 'CHANGE_DATA':
      return {
        ...state,
        [action.propName]: {
          ...state[action.propName],
          [action.fieldId]: action.value
        }
      }
    default:
      return state
  }
}

export {
  appData
}
