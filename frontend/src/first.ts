// 這支檔案沒有用typescript語法
import LogHelper from '../utils/LogHelper'

const logHelper = new LogHelper('From first.js: ')

document.addEventListener('DOMContentLoaded', () => {
  logHelper.log('first.js connected!!')
})
