<template>
  <div
    v-if="contact.show && !contact.archived && !contact.blocked"
    @click="passCureentIndexToApp(contact.id)"
  >
    <div
      class="overflow-y-auto pr-2 hover:bg-[#3247527f] rounded-sm active:bg-[#324752] pb-[3px]"
    >
      <div class="flex active:bg-[#111b21a4] cursor-pointer">
        <div class="flex items-center justify-center w-[70px] ml-2 mr-2">
          <div class="w-12 overflow-hidden rounded-full">
            <img
              :src="'/src/assets/img/' + contact.avatar + '.jpg'"
              class="w object-contain"
              alt="Contact"
            />
          </div>
        </div>

        <div
          class="w-full py-2 flex flex-col justify-center border-t-[0.5px] border-[#3247527f]"
        >
          <div class="flex justify-between">
            <h2 class="text-xl text-primary-color">
              {{ contact.fullName }}
            </h2>
            <p class="text-sm text-secondary-color">
              {{ finalMessageTime() }}
            </p>
          </div>

          <div class="flex justify-between">
            <p
              class="w-[300px] h-6 text-sm whitespace-nowrap text-ellipsis overflow-hidden text-[#8696A0]"
            >
              {{ finalMessage() }}
            </p>

            <div class="relative">
              <i
                @click="showContactOptions($event)"
                class="fa-solid fa-circle-arrow-up px-2 opacity-10"
              ></i>
              <teleport to="body">
                <div
                  v-if="showOptions"
                  @mouseleave="showOptions = false"
                  class="bg-[#638296] rounded-md overflow-hidden absolute z-10"
                  :style="{ top: thetop + 'px', left: theleft + 'px' }"
                >
                  <ul class="cursor-pointer text-primary-color">
                    <li
                      @click="archiveChat(contact.id)"
                      class="p-3 px-5 hover:bg-[#324752]"
                    >
                      Archive chat
                    </li>
                    <li
                      @click="deleteChat(contact.id)"
                      class="p-3 px-5 hover:bg-[#324752]"
                    >
                      Delete Chat
                    </li>
                  </ul>
                </div>
              </teleport>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script setup>
import { defineEmits, ref } from "vue";
const emits = defineEmits(["theCurrentIdIs", "deleteChat", "archiveChat"]);
const props = defineProps({
  contact: {
    type: Object,
    default: () => ({}),
  },
  currentIndex: {
    type: Number,
  },
});


const showArrowUp = ref(true);
const showOptions = ref(false);
const theleft = ref(0);
const thetop = ref(0);


const passCureentIndexToApp = (id) => {
  emits("theCurrentIdIs", id);
};

const finalMessageTime = () => {
  if (props.contact.messages[props.contact.messages.length - 1]) {
    return props.contact.messages[props.contact.messages.length - 1].date[0]
      .time;
  } else {
    return "   ";
  }
};

const finalMessage = () => {
  if (props.contact.messages[props.contact.messages.length - 1]) {
    return props.contact.messages[props.contact.messages.length - 1].message;
  } else {
    return "    ";
  }
};
const deleteChat = (id) => {
  emits("deleteChat", id);
};
const archiveChat = (id) => {
  emits("archiveChat", id);
  showOptions.value = false;
};
const showContactOptions = (event) => {
  theleft.value = event.x;
  thetop.value = event.y;
  showOptions.value = true;
  console.log("ok");
  event.stopPropagation();
};
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: #d1d7dbbb;
  border-radius: 10px;
  height: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #d1d7db;
}
</style>