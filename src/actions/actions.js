export const startSave = save => {
  return {
    type: 'SAVE_START',
    save
  }
}

export const succesSave = results => {
  return {
    type: 'SAVE_SUCCESS',
    results
  }
}
