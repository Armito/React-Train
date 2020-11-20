export function createRandomId() {
  return (Math.random() * 10000000).toString(16).substr(0, 4) + '_' + (new Date()).getTime() + '_' + Math.random().toString().substr(2, 5);
}

export function className(option) {
  let classArr = []
  for (let k in option) {
    if (option[k]) {
      classArr.push(k)
    }
  }
  return classArr.join(' ')
}
