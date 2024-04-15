// @ts-ignore
import { ref, onMounted } from 'vue'
// @ts-ignore
import { getBalance } from '@/api/balance'
import user from "../../assets/user.svg"


export default {
    components: {},
    setup () {
        const balance = ref({})

        const getBalanceInfo = () => {
            return getBalance(localStorage.token).then((response: any) => {
                balance.value = response.data.data[0].attributes
                setTimeout(getBalanceInfo, 30000);
            })
        } 

        onMounted(getBalanceInfo)

        return {
            balance, user
        }
    }
}