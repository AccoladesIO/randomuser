import { ref } from 'vue';
import { RouterName } from '@/enum/route-name';
import router from '@/router';

export default function paginator() {
    const pageNumber = ref(1);
    const maxPage = ref(1);

    function onPage(event: any) {
      pageNumber.value = event.page + 1;
      maxPage.value = event.pageCount + 1;
      router.push({
        name: RouterName.List,
        params: { page: pageNumber.value },
      });
    }

    return { onPage, pageNumber, maxPage };
}