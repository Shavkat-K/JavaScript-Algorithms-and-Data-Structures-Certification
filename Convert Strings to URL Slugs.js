function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(part => part != '')
    .map(word => word.toLowerCase())
    .join('-')
}
console.log(urlSlug(" Winter Is  Coming"))

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join('-')
    .toLowerCase()
}