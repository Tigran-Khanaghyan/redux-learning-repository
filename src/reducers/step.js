 const stepReducer = (state = 1, action) => {
  switch (action.type) {
    case "SET-STEP":
      return (state = action.payload);
    default:
      return state;
  }
};

export default stepReducer