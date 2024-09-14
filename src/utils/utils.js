export function createReducer(initialState, fnMap) {
  return (state = initialState, { type, payload }) => {
    const handler = fnMap[type];

    return handler ? handler(state, payload) : state;
  };
}
export function getSubjectById(categories, id) {
  for (const category of categories) {
    const subject = category.subjects.find(subject => subject.id === id);
    if (subject) {
      return subject;
    }
  }
  return null;
};
