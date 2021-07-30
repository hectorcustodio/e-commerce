function getVersion(){
  return (require('../package.json').version)
}

console.log(getVersion())