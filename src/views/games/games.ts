// @ts-ignore
import { ref, onMounted } from 'vue';
import card from '../../components/card/card.vue';
import { getGamesFetch, getGameFetch } from "../../api/games";
import pagination from "@/components/pagination/pagination.vue";
import { IfPagination } from "@/types/pagination"

export default {
    components: { card, pagination },
    setup() {
        const games = ref([])
        const paginationData = ref<IfPagination | null>(null)

        onMounted(() => {
            getGamesList()
        })

        const getGamesList = () => {
            return getGamesFetch().then((response: any) => {
                games.value = response.data.data
                paginationData.value = response.data.meta
            }).catch((error: any) => {
                console.log(error)
            })
        }

        const getCame = (id: string) => {
            return getGameFetch(id).then((response: any) => {
                if (response.data) {
                    window.open(response.data.data[0].attributes['launch-options']['game-url'], "_blank");
                }
            }).catch((error: any) => {
                console.log(error)
            })
        }

        const handlePageChange = (page: number) => {
            return getGamesFetch(page).then((response: any) => {
                games.value = response.data.data
                paginationData.value = response.data.meta
            })
        }

        return {
            games, paginationData,
            getCame, handlePageChange
        }
    }
}