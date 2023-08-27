import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useChatsStore = defineStore("chats", {
  state: () => ({
    currentIndex: ref(0),
    showWelcomePage: ref(true),
    myContacts: [
      {
        id: 0,
        fullName: "khalid",
        avatar: "https://i.pinimg.com/originals/58/5d/b5/585db50304ef8e8a837e9f974d3564d8.jpg",
        show: true,
        archived: false,
        blocked: false,
        messages: [
          {
            owner: "he",
            message: "wafin",
            date: [
              {
                time: "12:30",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "me",
            message: "hey",
            date: [
              {
                time: "05:30",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "me",
            message: "how are you ? ",
            date: [
              {
                time: "06:20",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "he",
            message: "i'm fine, thanks",
            date: [
              {
                time: "06:30",
                day: "12/12/12",
              },
            ],
          },
        ],
      },
      {
        id: 1,
        fullName: "Marck Zuck",
        avatar: "https://i.pinimg.com/originals/b9/e0/e3/b9e0e30ac1ec95077b7e1d0abd250e5d.png",
        show: true,
        archived: false,
        blocked: false,
        messages: [
          {
            owner: "he",
            message: "hey how are you",
            date: [
              {
                time: "12:30",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "me",
            message: "i'm doing fine , thanks",
            date: [
              {
                time: "02:10",
                day: "12/12/12",
              },
            ],
          },
        ],
      },
      {
        id: 2,
        fullName: "Zuck",
        avatar: "https://i.pinimg.com/originals/e2/8a/7c/e28a7cbea1d5eee98a4246cceeebd3da.jpg",
        show: true,
        archived: false,
        blocked: false,
        messages: [
          {
            owner: "he",
            message: "hey how are you",
            date: [
              {
                time: "12:30",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "me",
            message: "i'm doing fine , thanks",
            date: [
              {
                time: "02:10",
                day: "12/12/12",
              },
            ],
          },
        ],
      },
      {
        id: 3,
        fullName: "Marbella",
        avatar: "https://i.pinimg.com/originals/b2/14/d3/b214d3e3a4dabd95686baecf7a268583.jpg",
        show: true,
        archived: false,
        blocked: false,
        messages: [
          {
            owner: "he",
            message: "hey how are you",
            date: [
              {
                time: "12:30",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "me",
            message: "i'm doing fine , thanks",
            date: [
              {
                time: "02:10",
                day: "12/12/12",
              },
            ],
          },
        ],
      },
      {
        id: 4,
        fullName: "kylie",
        avatar: "https://i.pinimg.com/originals/d7/b6/db/d7b6dbf3427ffacc15bb435c6c7ad413.jpg",
        show: true,
        archived: false,
        blocked: false,
        messages: [
          {
            owner: "he",
            message: "what's up",
            date: [
              {
                time: "12:30",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "me",
            message: "hey how are you",
            date: [
              {
                time: "02:10",
                day: "12/12/12",
              },
            ],
          },
        ],
      },
      {
        id: 5,
        fullName: "tony",
        avatar: "https://i.pinimg.com/originals/b9/e0/e3/b9e0e30ac1ec95077b7e1d0abd250e5d.png",
        show: true,
        archived: false,
        blocked: false,
        messages: [
          {
            owner: "he",
            message: "ok see at 8:00",
            date: [
              {
                time: "12:30",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "me",
            message: "ok",
            date: [
              {
                time: "02:10",
                day: "12/12/12",
              },
            ],
          },
        ],
      },
      {
        id: 6,
        fullName: "zineb",
        avatar: "https://i.pinimg.com/originals/54/8a/65/548a659c2b06a877516d3c998f5b0939.png",
        show: true,
        archived: false,
        blocked: false,
        messages: [
          {
            owner: "he",
            message: "ok see at 8:00",
            date: [
              {
                time: "12:30",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "me",
            message: "ok",
            date: [
              {
                time: "02:10",
                day: "12/12/12",
              },
            ],
          },
        ],
      },
      {
        id: 7,
        fullName: "john",
        avatar: "https://i.pinimg.com/originals/cb/80/99/cb80993dfe4c5a1dd5ee19f3a6c9284e.jpg",
        show: true,
        archived: false,
        blocked: false,
        messages: [
          {
            owner: "he",
            message: "hey how are you",
            date: [
              {
                time: "12:30",
                day: "12/12/12",
              },
            ],
          },
          {
            owner: "me",
            message: "i'm doing fine , thanks",
            date: [
              {
                time: "02:10",
                day: "12/12/12",
              },
            ],
          },
        ],
      },
    ],
    archivedContacts: [],
  }),

  getters: {
    getTimeNow() {
      const myDate = new Date();
      const hours = myDate.getHours();
      const minutes = myDate.getMinutes();
      return `${hours}:${minutes}`;
    },
    getTodayDate() {
      const myDate = new Date();
      const year = myDate.getFullYear();
      const month = myDate.getMonth() + 1;
      const day = myDate.getDate();

      return `${day}/${month}/${year}`;
    },
  },

  actions: {
    getCurrentId(targetId) {
      const index = this.myContacts.findIndex(
        (contact) => contact.id === targetId
      );
      this.currentIndex = index;
      this.showWelcomePage = false;
    },
    searchFor(v) {
      const searchTerm = v.toLowerCase();
      for (let i = 0; i < this.myContacts.length; i++) {
        const contactName = this.myContacts[i].fullName.toLowerCase();
        if (contactName.includes(searchTerm)) {
          this.myContacts[i].show = true;
        } else {
          this.myContacts[i].show = false;
        }
      }
    },
    closeChat() {
      this.showWelcomePage = true;
    },
    ClearMessages(targetId) {
      const contact = this.myContacts.find((c) => c.id === targetId);
      if (contact !== -1) {
        contact.messages = [];
      }
    },
    getTheNewMessage(newmessage, targetId) {
      const index = this.myContacts.findIndex(
        (contact) => contact.id === targetId
      );
      this.myContacts[index].messages.push({
        owner: "me",
        message: newmessage,
        date: [
          {
            time: this.getTimeNow,
            day: this.getTodayDate,
          },
        ],
      });
      this.updateRecentlyConcersations(index);
      this.replyOnNewMessage(index);
    },
    replyOnNewMessage(index) {
      setTimeout(() => {
        this.myContacts[index].messages.push({
          owner: "he",
          message: "ok",
          date: [
            {
              time: this.getTimeNow,
              day: this.getTodayDate,
            },
          ],
        });
      }, 1000);
    },
    updateRecentlyConcersations(index) {
      const conversation = this.myContacts[index];
      this.myContacts.splice(index, 1);
      this.myContacts.unshift(conversation);
      const newIndex = this.myContacts.indexOf(conversation);
      this.currentIndex = newIndex;
    },
    BlockContact(targetId) {
      const index = this.myContacts.findIndex(
        (contact) => contact.id === targetId
      );
      this.myContacts[index].blocked = true;
      this.closeChat();
    },
    BlockContact(targetId) {
      const contact = this.myContacts.find((c) => c.id === targetId);
      if (contact) {
        contact.blocked = true;
      }
      this.closeChat();
    },
    deleteChat(targetId) {
      const index = this.myContacts.findIndex((c) => c.id === targetId);
      if (index !== -1) {
        this.myContacts.splice(index, 1);
      }
      this.closeChat();
    },
    archiveChat(targetId) {
      const index = this.myContacts.findIndex((c) => c.id === targetId);
      if (index !== -1) {
        const contact = this.myContacts.splice(index, 1)[0];
        contact.archived = true;
        this.archivedContacts.push(contact);
      }
    },
  },
});
