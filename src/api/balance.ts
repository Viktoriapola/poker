// @ts-ignore
import axios from 'axios'

export const getBalance = (token: string) => {
    return axios({
        method: 'GET',
        url: `https://poker.evenbetpoker.com/api/web/v2/users/me/balance?clientId=default&auth=${token}`,
    })
}