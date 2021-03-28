import axios from 'axios'
const accountURL = axios.create({
  baseURL: 'http://163.18.42.222:8888/Fiestadb/Account/'
})

const BaseURL = axios.create({
  baseURL: 'http://163.18.42.222:8888/'
})

function getCookie(name) {
  const value = `; ${document.cookie}`
  const parts = value.split(`; ${name}=`)
  if (parts.length === 2) return parts.pop().split(';').shift()
}

const loginURL = axios.create({
  baseURL: 'http://163.18.42.222:8888/Fiestadb/Account/',
  headers: {
    Authorization: 'Bearer ' + getCookie('token')
  }
})

export const apiUserLogin = data => accountURL.post('/select', data)
export const apiUserSignUp = data => accountURL.post('/upload', data)
export const apiUserConfirm = data => accountURL.post('/SendConfirm', data)
export const apiGetSchool = () => BaseURL.get('/Fiestadb//getSchool')
export const apiEncode = data => BaseURL.post('/encode', data)
export const apiGetJoinedGroup = data => loginURL.post('/getJoinedGroup', data)
