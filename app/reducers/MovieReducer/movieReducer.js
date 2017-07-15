export const movieReducer = (state={}, action) => {
  switch (action.type){
    case 'DETAIL_FETCH_SUCCESS':
      return action.movie;
    default:
      return state;
  }
}

export const detailLoadingReducer = (state=false, action) => {
  switch (action.type) {
    case 'DETAIL_IS_LOADING':
      return true;
    default:
      return false;
  }
}

export const goToMovieReducer = (state='', action) => {
  console.log(state);
  switch (action.type) {
    case 'GOTO_MOVIE':
      return action.id
    default:
      return state;
  }
}
