<template>
  <ColorsChoose v-if="is_color_choose" />
  <div class="btn__wrapper">
    <BtnDownload @btn_click="convert" />
    <BtnVisibility :is_visible="is_btns" @btn_click="hide_or_show" />
  </div>
  <div class="app__wrapper">
    <Calendar />
  </div>
</template>

<script setup>
import * as htmlToImage from "html-to-image";
import { toPng } from "html-to-image";
import { saveAs } from "file-saver";
import ColorsChoose from "@/components/ColorsChoose.vue";
import Calendar from "./components/Calendar.vue";
import { useColors } from "@/composables/useColors.js";
import { useCalendar } from "@/composables/useCalendar.js";
import BtnDownload from "./components/BtnDownload.vue";
import BtnVisibility from "./components/BtnVisibility.vue";

const { is_btns } = useCalendar();

const { is_color_choose } = useColors();

const hide_or_show = () => (is_btns.value = !is_btns.value);

const convert = async () => {
  const node = document.getElementById("calendar");
  const dataUrl = await htmlToImage.toPng(node);
  saveAs(dataUrl, "calendar.png");
};
</script>

<style scoped>
.logo {
  display: block;
  margin: 0 auto 2rem;
}

.btn__wrapper {
  position: fixed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 12px;
  background-color: #e4d2c8;
}

.app__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
  margin-top: 48px;
}
</style>
