// @ts-ignore
import { ref } from 'vue';
import games from "../games/games.vue";
import balance from "../balance/balance.vue";
import tokenUpdater from "../tokenUpdater/tokenUpdater.vue";

export default {
    components: { games, balance, tokenUpdater },
    setup() {
        return {}
    }
}