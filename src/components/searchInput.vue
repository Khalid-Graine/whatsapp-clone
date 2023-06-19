<template>
  <div class="py-3 pr-2 pl-2">
    <div
      class="flex items-center bg-input-background rounded-md overflow-hidden"
    >
      <i
        v-if="showSearchIcon"
        class="fa-solid fa-magnifying-glass ml-4 mr-2 font-bold text-xl cursor-pointer"
      >
      </i>
      <i
        v-if="showArrowIcon"
        @click="makeInputEmpty()"
        class="fa-solid fa-arrow-left ml-4 mr-2 text-[#00a884] font-bold text-xl cursor-pointer"
      ></i>
      <input
        v-model="targetContact"
        @input="toggleIcons()"
        type="text"
        placeholder="type here the name"
        class="w-full bg-input-background text-text-input px-3 py-2 outline-none"
      />
    </div>
  </div>
</template>




<script setup>
import { defineEmits, ref } from 'vue'

const emits = defineEmits(["searchFor"])

const targetContact = ref("");
const showArrowIcon = ref(false);
const showSearchIcon = ref(true);

const toggleIcons = () => {
  if (targetContact.value.length > 0) {
    showSearchIcon.value = false;
    showArrowIcon.value = true;
  } else {
    toggle();
  }
  emits('searchFor', targetContact.value)
}

const makeInputEmpty = () => {
  targetContact.value = "";
  toggle();
  emits('searchFor', "");
}

const toggle = () => {
  showSearchIcon.value = !showSearchIcon.value;
  showArrowIcon.value = !showArrowIcon.value;
}
</script>