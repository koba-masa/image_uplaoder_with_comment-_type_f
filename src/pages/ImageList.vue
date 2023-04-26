<script setup lang="ts">

import { UploadImage as UploadImageType } from '@/models/UploadImage';
import UploadImage from '@/components/images/UploadImage.vue';

const images: Array<UploadImageType> = [
  {id: 1, memo: 'iamge_001', path: 'https://placehold.jp/150x150.png'},
  {id: 2, memo: 'iamge_002', path: 'https://placehold.jp/150x150.png'}
];

</script>

<template>
  <div>
    <h1>アップロード画像一覧</h1>
    <div class="cards">
        <UploadImage
          v-for="image in images"
          :key="image.id"
          :image="image"
        />
    </div>
  </div>
</template>

<style>
.cards {
  width: 95%;
}
</style>
