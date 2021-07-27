import { ref } from 'vue';
import { RouterName } from '@/enum/route-name';
import router from '@/router';
import IPages from '@/interface/page';

export default function usePaginator() {
    const pageNumber = ref(1);
    const maxPage = ref(1);

    function onPage(event: IPages) {
      pageNumber.value = event.page + 1;
      maxPage.value = event.pageCount + 1;
      router.push({
        name: RouterName.List,
        params: { page: pageNumber.value },
      });
    }

    return { onPage };
}