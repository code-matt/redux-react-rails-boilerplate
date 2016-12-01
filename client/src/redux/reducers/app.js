const app = (state, action) => {
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
    default:
      return state
  }
}

export {
  app
}
