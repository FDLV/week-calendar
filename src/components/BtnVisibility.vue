<template>
  <div class="btn-visibility__wrapper">
    <button
      class="btn-visibility"
      :class="[
        props.is_visible
          ? 'btn-visibility_visible'
          : 'btn-visibility_not-visible',
      ]"
      @click="emit('btn_click')"
    ></button>
  </div>
</template>

<script setup>
const props = defineProps({
  is_visible: Boolean,
});

const emit = defineEmits(["btn_click"]);
</script>

<style scoped>
.btn-visibility__wrapper {
  display: flex;
  justify-content: center;
  padding: 4px;
}

.btn-visibility {
  width: 24px;
  height: 24px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
}

.btn-visibility_visible {
  background-image: url("@/assets/visible.svg");
}

.btn-visibility_not-visible {
  background-image: url("@/assets/not-visible.svg");
}
</style>
