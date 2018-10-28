export default date => {
  let theDate = new Date(date)
  
  return `${theDate.getFullYear()}-${theDate.getMonth() + 1}-${theDate.getDate()}`
}