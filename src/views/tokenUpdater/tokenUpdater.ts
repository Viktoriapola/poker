// @ts-ignore
import { onMounted } from 'vue';
// @ts-ignore
import { refreshTokenFetch } from "@/api/auth";
// @ts-ignore
import { useRouter } from 'vue-router';

export default {
    setup() {
        const router = useRouter()

        const refreshToken = async () => {
            return refreshTokenFetch(localStorage.refresh_token).then((response: any) => {
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('refresh_token', response.data['refresh-token'])
                setTimeout(refreshToken, 800000);
            }).catch((error: any) => {
                console.log(error)
                localStorage.removeItem('token')
                localStorage.removeItem('refresh_token')
                router.push({name: 'Login'})
            })
        };

        onMounted(refreshToken);

        return {};
    },
}