<template>
  <div class="flex flex-col h-screen">
    <!-- 1 -->
    <div
      class="flex-grow-0 flex-shrink-0 flex justify-between bg-background-color p-3"
    >
      <div class="flex items-center">
        <div class="w-10 overflow-hidden rounded-full mr-2">
          <img
            :src="targetChat.avatar"
            class="w object-contain"
            alt=""
          />
        </div>
        <p class="text-lg text-primary-color font-semibold">
          {{ targetChat.fullName }}
        </p>
      </div>

      <div class="relative flex items-center">
        <div
          @click="toggleShowIcons()"
          :class="[showXicon === true ? 'bg-[#324752]' : '']"
          class="flex items-center justify-center cursor-pointer rounded-full hover:bg-[#324752] w-10 h-10 text-2xl text-icon-color"
        >
          <i v-if="showEllipsisIcon" class="fa-solid fa-ellipsis-vertical"></i>
          <i v-if="showXicon" class="fa-solid fa-xmark"></i>
        </div>

        <div
          v-if="!showEllipsisIcon"
          class="bg-background-color z-10 w-60 rounded-md overflow-hidden absolute right-5 top-14"
        >
          <ul @click="toggleShowIcons()" class="text-[#d1d7db]">
            <li
              @click="closeChat()"
              class="p-3 px-4 cursor-pointer hover:bg-[#324752]"
            >
              Close chat
            </li>
            <li
              @click="ClearMessages(targetChat.id)"
              class="p-3 px-4 cursor-pointer hover:bg-[#324752]"
            >
              Clear messages
            </li>
            <li
              @click="deleteChat(targetChat.id)"
              class="p-3 px-4 cursor-pointer hover:bg-[#324752]"
            >
              Delete chat
            </li>
            <li
              @click="blockContact(targetChat.id)"
              class="p-3 px-4 cursor-pointer hover:bg-[#324752]"
            >
              Block
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- 2 -->
    <div
      @click="hideOptions()"
      class="relative overflow-hidden flex-grow flex-shrink overflow-y-auto p-2"
    >
      <img
        src="/src/assets/img/background.png"
        alt=""
        class="w-full fixed -z-10 top-0 left-0"
      />

      <div class="flex flex-col">
        <!-- me -->
        <div
          v-for="message in targetChat.messages"
          :key="message"
          :class="[
            message.owner === 'me'
              ? 'bg-background-message-me   self-end'
              : 'bg-background-message-he flex-end',
          ]"
          class="flex text-primary-color max-w-[50%] rounded-sm my-1 w-fit p-2 pb-0 pr-0"
        >
          <p class="flex items-start">{{ message.message }}</p>
          <span class="text-[12px] ml-3 pt-3 pr-1 flex items-end">{{
            message.date[0].time
          }}</span>
        </div>
      </div>
    </div>

    <!-- 3 -->
    <div
      class="bg-background-color flex items-center text-icon-color flex-grow-0 flex-shrink-0 px-3 py-2 text-2xl"
    >
      <i
        class="fa-solid fa-face-smile mx-3 p-2 rounded-full hover:bg-[#324752]"
      ></i>
      <i
        class="fa-regular fa-file mx-3 p-2 px-3 rounded-full hover:bg-[#324752]"
      ></i>
      <input
        type="text"
        v-model="newMessage"
        @keyup="passNewMessage($event)"
        class="flex-grow bg-input-background h-10 outline-none pl-4 text-base rounded-md text-text-input"
      />
      <i
        @click="sendNewMessage()"
        class="fa-solid fa-paper-plane mx-3 p-2 rounded-full hover:bg-[#324752]"
      ></i>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const newMessage = ref("");
const showEllipsisIcon = ref(true);
const showXicon = ref(false);

const props = defineProps({
  targetChat: {
    type: Object,
    default: () => {},
  },
});
const emits = defineEmits([
  "closeChat",
  "ClearMessages",
  "getTheNewMessage",
  "BlockContact",
  "deleteChat",
]);

const passNewMessage = (e) => {
  if (e.code === "Enter") {
    sendNewMessage();
  }
};
const sendNewMessage = () => {
  if (newMessage.value.length > 0) {
    emits("getTheNewMessage", newMessage.value, props.targetChat.id);
    newMessage.value = "";
  }
};

const toggleShowIcons = () => {
  showEllipsisIcon.value = !showEllipsisIcon.value;
  showXicon.value = !showXicon.value;
};
const hideOptions = () => {
  if (showXicon.value === true) {
    toggleShowIcons();
  }
};

const closeChat = () => {
  emits("closeChat");
};
const ClearMessages = (id) => {
  emits("ClearMessages", id);
};
const blockContact = (id) => {
  emits("BlockContact", id);
};
const deleteChat = (id) => {
  emits("deleteChat", id);
};
</script>