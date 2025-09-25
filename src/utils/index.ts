import axios from 'axios'
import sourceMap from 'source-map-js'

const getSourceMap = async (url: string) => {
  return await axios.get(url)
}

const findCodeBySourceMap = async (stackFrame: any) => {
  const sourceData = await getSourceMap(stackFrame.fileName + '.map');
  const fileContent = sourceData.data;
  const consumer = await new sourceMap.SourceMapConsumer(fileContent);
  const originalPosition = consumer.originalPositionFor({
    line: stackFrame.line,
    column: stackFrame.column
  });
  console.log('consumer.sourceContentFor', consumer.sourceContentFor);
  console.log('originalPosition', originalPosition)
  const code = consumer.sourceContentFor(originalPosition.source)
  console.log(code)
}

export { findCodeBySourceMap }