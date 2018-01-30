const STORAGE_KEY = 'todos-vuejs'//定义常数只需要改变常量的值就可以；
export default {
  fetch: function () {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
  },
  save: function (items) {
    window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
  }
}
