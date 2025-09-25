import axios from 'axios'
import sourceMap from 'source-map-js'

const getSourceMap = async (url: string) => {
  console.log('url', url)
  return await axios.get(url)
}

const findCodeBySourceMap = async (stackFrame: any) => {
  console.log(stackFrame,'stackFrame')
  const sourceData = await getSourceMap(stackFrame.fileName + '.map');
  const fileContent = sourceData.data;
  console.log('fileContent', fileContent)

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