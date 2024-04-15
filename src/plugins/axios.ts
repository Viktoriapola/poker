import AxiosInstance from "axios";
import type { AxiosResponse } from "axios";
import router from '../routers/index';

export default function axiosOptions(axios: typeof AxiosInstance) {
    
    axios.interceptors.response.use(
        (response: AxiosResponse) => {
            return response
        },
        async (error: any) => {
            if(error?.response?.status === 401) {
                localStorage.removeItem('token')
                localStorage.removeItem('refresh_token')
                router.push({name: 'Login'})

                // if (localStorage.refresh_token) {
                //     return axios({
                //         method: 'POST',
                //         url: `https://poker.evenbetpoker.com/api/web/auth/token?clientId=default`,
                //         data: {
                //             clientId: "default",
                //             refreshToken: localStorage.refresh_token
                //         }
                //     }).then((response: AxiosResponse) => {
                //         console.log(response);
                        
                //     }).catch((error: any) => {
                //         localStorage.removeItem('token')
                //         localStorage.removeItem('refresh_token')
                //         router.push({name: 'Login'})
                //     })

                // } else {
                //     localStorage.removeItem('token')
                //     localStorage.removeItem('refresh_token')
                //     router.push({name: 'Login'})
                // }
            }
        }
    )
}