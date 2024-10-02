'use strict';

import { ref } from 'vue';

const is_color_choose = ref(false);
const day = ref(null);
const shift = ref(null);
const training = ref(null);

export const useColors = () => {
  const close_colors_choose = () => {
    is_color_choose.value = false;
  };

  const open_colors_choose = () => {
    is_color_choose.value = true;
  };

  const save_training_number = (day_number, shift_number, training_number) => {
    day.value = day_number;
    shift.value = shift_number;
    training.value = training_number;
  };

  return {
    is_color_choose,
    day,
    shift,
    training,
    close_colors_choose,
    open_colors_choose,
    save_training_number,
  };
};
