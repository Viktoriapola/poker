// @ts-ignore
import { ref, Ref, computed } from 'vue';
// @ts-ignore
import { useRouter } from 'vue-router';
// @ts-ignore
import { authFetch } from "@/api/auth";
// @ts-ignore
import { IfloginForm } from "@/types/login";

export default {
    components: {},
    setup() {
        const router = useRouter()
        const form: Ref<IfloginForm> = ref({ login: '', password: '' })

        const isValid = computed(() => Boolean(form.value.login.length && form.value.password.length))

        const login = async () => {
            if (isValid) {
                authFetch(form.value).then(async (response: any) => {
                    if (response.data) {
                        localStorage.setItem('token', response.data.data[0].attributes.token)
                        localStorage.setItem('refresh_token', response.data.data[0].attributes['refresh-token'])
                        router.push({ name: 'Content' })
                    }
                }).catch((error: any) => {
                    console.log(error);
                })
            }
        }

        return {
            form,
            isValid,
            login
        }
    }
}