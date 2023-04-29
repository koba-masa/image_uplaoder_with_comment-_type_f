<script setup lang="ts">
import { UploadImage } from '@/models/UploadImage';

type Props = {
  image: UploadImage
};

const props = defineProps<Props>();

</script>

<template>
  <section class="card">
    <div class="memo">{{ props.image.memo }}</div>
    <div class="thumbnail">
      <img :src="props.image.path" :alt="props.image.memo"/>
    </div>
  </section>
</template>

<style>
.card {
  background-color: aquamarine;
  margin: 10px;
  width: 100%;
  border-radius: 10px;
  display: grid;
}
.card .memo {
  font-weight: bold;
  order: 1;
  margin: 5px;
}
.card .thumbnail img {
  border-radius: 10px 10px 0px 0px;
  width: 100%;
}
</style>
