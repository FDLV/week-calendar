<template>
  <ColorsChoose v-if="is_color_choose" />
  <div class="app__wrapper">
    <button @click="convert">convert</button>
    <button @click="hide">hide</button>
    <Calendar />
  </div>
</template>

<script setup>
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import { saveAs } from 'file-saver';
import ColorsChoose from '@/components/ColorsChoose.vue';
import Calendar from './components/Calendar.vue';
import { useColors } from '@/composables/useColors.js';
import { useCalendar } from '@/composables/useCalendar.js';

const { is_btns } = useCalendar();

const { is_color_choose } = useColors();

const hide = () => (is_btns.value = !is_btns.value);

const convert = async () => {
  const node = document.getElementById('calendar');
  const dataUrl = await htmlToImage.toPng(node);
  saveAs(dataUrl, 'calendar.png');
};
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.app__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
