<template>
    <div>
       <el-button @click="onPlay">播放</el-button>
       <hr/>
       <div id="player"></div>
    </div>
</template>

<script setup lang="ts">
import 'rrweb-player/dist/style.css'
import rrwebPlayer from 'rrweb-player'
import { useEventStore } from '../stores/eventStore'
const eventStore = useEventStore()
const onPlay = () => {
    new rrwebPlayer({
        target: document.getElementById('player') as HTMLElement,
        props: {
            events: eventStore.getEvents,
        },
    })
}
</script>