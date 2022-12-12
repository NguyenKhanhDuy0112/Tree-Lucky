import api from "./api"

const loginUser = ({ userName, password }: { userName: string, password: string }) => {
    // console.log(`${api.url.auth}/login`)
    return api.post(`${api.url.auth}/login`, { userName, password }).then(res => res.data)
}

const registerUser = ({ userName, password }: { userName: string, password: string }) => {
    return api.post(`${api.url.auth}/register`, { userName, password }).then(res => res.data)
}

const authServices = {
    loginUser,
    registerUser
}

export default authServices;