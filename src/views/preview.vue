<template>
    <div class="pre-code">
        <div class="error-detail">
          <pre class="error-code" v-html="preLine()"></pre>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  name: "preview",
  props:{
    origin: Object,
  },
  methods: {
    preLine(){
      console.log(this.origin,'origin')
      const line = this.origin.line;
      const originCodeLine = this.origin.source.split('\n');
      const len = originCodeLine.length - 1;
      const start = line - 3 > 0 ? line - 3 : 0;
      const end = line + 5 < len ? line + 3 : len; // 最多展示6行
      let newLines = [];
      for (let i = start; i <= end; i++) {
        const content = i+1 +'.   ' + this.encodeHTML(originCodeLine[i])
        newLines.push(`<div class='code-line ${i+1==line? 'heightlight' : ''}'>${content}</div>`) 
      }
      return newLines.join('');
    },
    encodeHTML(str:string){
      return str.replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }
  }
}
</script>