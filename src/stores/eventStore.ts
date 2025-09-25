import { defineStore } from 'pinia'

export const useEventStore = defineStore('eventStore', {
  state: () => ({
    events: [] as any,
  }),
  getters: {
    getEvents() {
      return this.events
    },
  },
  actions: {
    setEvents(event: any) {
      this.events = event
    },
    // getEvents() {
    //   return this.events
    // },
  },
})
