// @ts-ignore
import axios from 'axios'

export const getGamesFetch = (page: number = 1) => {
    return axios({
        method: 'GET',
        url: `https://poker.evenbetpoker.com/api/web/v2/casino/games?clientId=default&page=${page}&per-page=24`,
    })
}

export const getGameFetch = (id: string) => {
    return axios({
        method: 'POST',
        url: `https://poker.evenbetpoker.com/api/web/v2/casino/games/${id}/session-demo?clientId=default`,
        data: { clientId: "default", gameId: id}
    })
}