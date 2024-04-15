// @ts-ignore
import { ref, computed, toRef } from 'vue';

export default {
    props: {
        totalCount: Number,
        pageCount: Number,
        currentPage: Number,
        perPage: Number,
    },
    setup(props: any, { emit }: any) {
        const totalCount = toRef(props, 'totalCount')
        const pageCount = toRef(props, 'pageCount')
        const currentPage = toRef(props, 'currentPage')
        const perPage = toRef(props, 'perPage')


        const gotoPage = (page: number) => {
            if (page >= 1 && page <= pageCount.value) {
                emit('pageChanged', page);
            }
        };

        return {
            totalCount,
            pageCount,
            currentPage,
            perPage,
            gotoPage
        };
    }
}