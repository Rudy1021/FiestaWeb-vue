import axios from 'axios'

const accountURL = axios.create({
  baseURL: 'http://163.18.42.222:8888/Fiestadb/Account/'
})

const SchoolURL = axios.create({
  baseURL: 'http://163.18.42.222:8888/Fiestadb/'
})

export const apiUserLogin = data => accountURL.post('/select', data)
export const apiUserSignUp = data => accountURL.post('/upload', data)
export const apiUserConfirm = data => accountURL.post('/SendConfirm', data)
export const apiGetSchool = () => SchoolURL.get('/getSchool')
