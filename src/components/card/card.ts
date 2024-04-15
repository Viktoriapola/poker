// @ts-ignore
import { ref, toRef } from 'vue'
import like from '../../assets/like.svg'


export default {
    props: {
        id: String,
        title: String,
        image: String,
    },
    emits: ['onClickCard'],
    components: {},
    setup (props: any) {
        const id = toRef(props, 'id')
        const title = toRef(props, 'title')
        const image = toRef(props, 'image')

        return {
            id, title, image, like
        }
    }
}