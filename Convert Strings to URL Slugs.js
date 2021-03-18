function urlSlug(title) {
  return title
    .split(/\W/)
    .filter(part => part != '')
    .map(word => word.toLowerCase())
    .join('-')
}
console.log(urlSlug(" Winter Is  Coming"))