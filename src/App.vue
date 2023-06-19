<template>

  <!-- A container div with a flex layout and white text color -->
  <div class="flex text-white pb-[3px]">
    
    <!-- The first side section, which includes the contact list -->
    <section
      class="firstSide bg-background-color flex flex-col basis-5/12 flex-grow-0 flex-shrink-0 pl-5 pr-2 h-screen border-r-[0.5px] border-secondary-color"
    >
      <topOfThePage />
      
      <searchInput @searchFor="mystore.searchFor" />
      
      <archived :archivedContacts="mystore.archivedContacts" />

      <div  class="overflow-y-auto" >
        <contacts
          @theCurrentIdIs="mystore.getCurrentId"
          v-for="contact in mystore.myContacts"
          :key="contact.id"
          :contact="contact"
          :currentIndex="mystore.currentIndex"
          @deleteChat="mystore.deleteChat"
          @archiveChat="mystore.archiveChat"
        />
      </div>
    </section>

    <!-- The second side section, which includes the conversation window -->
    <section
      v-if="!showWelcomePage"
      class="secondSide flex flex-col basis-auto flex-grow flex-shrink h-screen"
    >
      <conversation
        :targetChat="mystore.myContacts[currentIndex]"
        @closeChat="mystore.closeChat"
        @ClearMessages="mystore.ClearMessages"
        @getTheNewMessage="mystore.getTheNewMessage"
        @BlockContact="mystore.BlockContact"
        @deleteChat="mystore.deleteChat"
      />
    </section>

    <!-- The welcome page section -->
    <transition name="fade">
      <section
        v-if="showWelcomePage"
        class="bg-background-color flex flex-col items-center justify-center basis-auto flex-grow flex-shrink h-screen text-white"
      >
        <h3 class="f font-bold text-3xl mb-3">Welcome to ChatApp</h3>
        <p>Send and receive messages without keeping your phone online.</p>
      </section>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { defineStore, storeToRefs } from "pinia";
import { useChatsStore } from "./stores/ChatsStore";
import conversation from "./components/conversation.vue";
import topOfThePage from "./components/topOfThePage.vue";
import archived from "./components/archived.vue";
import contacts from "./components/contacts.vue";
import searchInput from "./components/searchInput.vue";



const mystore = useChatsStore();

const {
  currentIndex,
  showWelcomePage,
  archivedContacts,
} = storeToRefs(mystore);
</script>


<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter-active {
  transition: all 1s ease;
}
</style>