import {createRouter, createWebHistory} from 'vue-router';
import ImageList from '@/pages/ImageList.vue'

const router = createRouter(
  {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {name: 'アップロードファイル一覧', path: '/groups/:group_uid/images/', component: ImageList}
    ]
  }
);

export default router
