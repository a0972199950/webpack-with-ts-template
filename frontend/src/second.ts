// 這支檔案沒有用typescript語法
import { uuid, sayHiTo } from '../utils/CoolFuncs'

document.addEventListener('DOMContentLoaded', () => {
  const id = uuid()

  console.log(`我的超酷UUID: ${id}`)

  sayHiTo('Steven')
})