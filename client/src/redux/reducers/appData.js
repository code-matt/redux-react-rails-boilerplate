const appData = (state, action) => {
  if (!state) {
    state = {
      login: {
        usernameInput: 'qq@qq.com',
        passwordInput: '12345678',
        loading: false
      },
      search: {
        searchInput: '',
        loading: false
      },
      add: {
        nameInput: '',
        urlInput: '',
        description: '',
        loading: false
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
