const changeData = (value, fieldId, propName) => ({
  type: 'CHANGE_DATA',
  fieldId: fieldId,
  value: value,
  propName: propName
})

export {
  changeData
}
