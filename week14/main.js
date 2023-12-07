// // ---------------- basicCookies-------------------------------
// import { CookieUtil } from '/myLib/cookieUtil.js'
// document.cookie = 'username=Lalita'
// document.cookie = 'course=INT201'
// document.cookie = 'credit=3'
// document.cookie = 'credit=2'
// const currentCookie = document.cookie
// console.log(currentCookie)
// console.log(CookieUtil.get('course'))

// // ---------------- cookieLib------------------------------------
// import { CookieUtil } from "./myLib/cookieUtil.js";
// // new Date(year, monthIndex, day)

// CookieUtil.set('username', 'Lalita', new Date(2023, 11, 25))
// CookieUtil.set('username', 'Lalita', new Date(2023, 11, 31))
// CookieUtil.set('username', 'Lalita', new Date(2024, 0, 1))

// console.log(CookieUtil.get('username'))
// console.log(CookieUtil.get('course'))

// console.log(CookieUtil.unset('credit'))
// console.log(CookieUtil.get('credit'))

// // ------------------ localStorage ----------------------------------
// let counter = localStorage.getItem('count')
// if (counter === null) {
//     counter = 1
//     localStorage.setItem('count', counter)
// } else localStorage.setItem('count', ++counter)
// alert(`counter=${counter}`)

// // ----------------------- web storage -----------------------------
// ------------------- sessionStorage ---------------------------------
// let counter = sessionStorage.getItem('count')
// if (counter === null) {
//     counter = 1
//     sessionStorage.setItem('count', counter)
// } else sessionStorage.setItem('count', ++counter)
// alert(`counter=${counter}`)

// sessionStorage.removeItem('count')
// sessionStorage.clear() //all items removed



let fontSize = localStorage.getItem('fontsize')

function setFontSize(fontSize) {
    document.body.style.fontSize = fontSize
}

console.log(fontSize)

