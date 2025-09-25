<template>
 <el-form :model="form" label-position="top">
      <el-form-item label="Promotion name" :label-width="formLabelWidth">
        <el-input
          v-model="form.stackFrame"
          autocomplete="off"
          :rows="5"
          type="textarea"
        />
      </el-form-item>
      <el-form-item label="Zones" :label-width="formLabelWidth">
        <el-upload drag :before-upload="beforeUpload">
          <el-button type="primary">Click to upload</el-button>
        </el-upload>
      </el-form-item>
    </el-form>
    <preview :origin="origin" />
</template>

<script setup lang="ts">
import { reactive, ref, watch } from "vue";
import sourceMap from 'source-map-js'
import preview from './preview.vue'

const formLabelWidth = "140px";

const form = reactive({
  stackFrame: "",
  sourceMap: "",
});

const origin = ref({
  source: "",
  line: 0,
  column: 0,
});

watch(origin, (newVal) => {
  console.log(newVal,'newVal')
})

const beforeUpload = async (file: File) => {
  console.log(file);
  const reader = new FileReader();
  reader.readAsText(file, "utf-8");
  reader.onload = async (e) => {
    console.log(e);
    const sourceMap = JSON.parse(e.target?.result as string);
    console.log('sourceMap', sourceMap)
    const stackFrame = JSON.parse(form.stackFrame);
    const source =  await getSource(sourceMap, stackFrame.lineNumber, stackFrame.columnNumber);
    console.log('source', source);
    origin.value = source as any;
  };
  return false;
};

const getSource = async (code: any, line: any, column: any) => {
  const consumer = await new sourceMap.SourceMapConsumer(code);
  console.log('code', code)
  console.log('line', line)
  console.log('column', column)
  const originalPosition = consumer.originalPositionFor({ line, column });
  console.log('originalPosition', originalPosition)
  const source = consumer.sourceContentFor(originalPosition.source);
  return {
    source,
    column: originalPosition.column,
    line: originalPosition.line,
  }
};
</script>
<style>
.error-code{
  padding: 20px;
  font-family: consolas, monospace;
  word-wrap: normal;
}
.code-line{
  padding:4px
}
.code-line.heightlight{
  color: #fff;
  background-color: #f22222;
}
</style>