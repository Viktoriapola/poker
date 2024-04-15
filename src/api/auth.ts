// @ts-ignore
import axios from 'axios'
// @ts-ignore
import { IfloginForm } from "@/types/login"

export const authFetch = (form: IfloginForm) => {
    return axios({
        method: 'POST',
        url: `https://poker.evenbetpoker.com/api/web/v2/login?clientId=default`,
        data: { clientId: "default", ...form }
    })
}

export const refreshTokenFetch = (refreshToken: string) => {
    return axios({
        method: 'POST',
        url: `https://poker.evenbetpoker.com/api/web/auth/token?clientId=default`,
        data: { clientId: "default", refreshToken: refreshToken }
    })
}