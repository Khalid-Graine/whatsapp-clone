<template>
      <div @click="OpenArchive()" class="flex justify-between py-3 pl-7 pr-6 cursor-pointer mb-2">
        <div class="flex items-center">
          <i class="fa-solid fa-box-archive mr-6 text-2xl"></i>
          <p class="text-xl">Archived</p>
        </div>
        <p class="text-green-300">{{ archivedContacts.length }}</p>
      </div>
</template>

<script setup>
import contacts from "./contacts.vue"
defineProps({
    archivedContacts: {
        type: Array,
        required: true
    }
})
const emits = defineEmits(['OpenArchive'])

const OpenArchive = () => {
  emits('OpenArchive')
}
</script>