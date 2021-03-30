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
  baseURL: 'http://163.18.42.222:8888/Fiestadb',
  headers: {
    Authorization: 'Bearer ' + getCookie('token')
  }
})

// 登入註冊
export const apiUserLogin = data => accountURL.post('/select', data)
export const apiUserSignUp = data => accountURL.post('/upload', data)
export const apiUserConfirm = data => accountURL.post('/SendConfirm', data)
export const apiGetSchool = () => BaseURL.get('/Fiestadb/getSchool')
// 登入註冊

export const apiEncode = data => BaseURL.post('/encode', data)

// 群組
export const apiGetJoinedGroup = data => loginURL.post('/Account/getJoinedGroup', data)
export const apiGroupSelect = data => loginURL.post('/Group/select', data)
export const apiGroupFindName = data => loginURL.post('/Group/FIndName', data)
export const apiGroupInsertProfile = data => loginURL.post('/Account/ValidateLogin', data)
export const apiGroupUpload = data => loginURL.post('/Group/upload', data)
export const apiGroupDelete = data => loginURL.post('/Group/delete', data)
export const apiGroupMemberSelect = data => loginURL.post('/Group/Member/select', data)
export const apiGroupUpdate = data => loginURL.post('/Group/update', data)
// 群組
