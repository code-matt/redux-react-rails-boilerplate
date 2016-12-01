const favorites = (state = [], action) => {
  switch (action.type) {
    case 'SET_FAVORITES':
      return action.favorites
    default:
      return state
  }
}

export {
  favorites
}
