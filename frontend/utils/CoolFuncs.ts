// 這支檔案使用了typescript語法
const uuid = () => {
  return Math.floor((1 + Math.random()) * 0xfffff).toString(16).substring(1)
}

const sayHiTo = (name: string) => {
  alert(`Hello~, ${name}`)
}

export {
  uuid as uuid,
  sayHiTo as sayHiTo
}