const initState = {
    projects: [
        {id: '1', title: 'a', content: 'blah blah blah'},
        {id: '2', title: 'b', content: 'blah blah blah'},
        {id: '3', title: 'c', content: 'blah blah blah'}
      ]
    
}

const projectReducer = (state = initState, action) => {
  return state;
};

export default projectReducer;