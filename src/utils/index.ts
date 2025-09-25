import axios from 'axios'
import sourceMap from 'source-map-js'

const getSourceMap = async (url) => {
  return await axios.get(url)
}

const findCodeBySourceMap = async (stackFrame) => {
  const sourceData = await getSourceMap(stackFrame.fileName + '.map');
  const fileContent = sourceData.data;
  const consumer = await new sourceMap.SourceMapConsumer(fileContent);
  const originalPosition = consumer.originalPositionFor({
    line: stackFrame.line,
    column: stackFrame.column
  });
  const code = consumer.sourceContentFor(originalPosition.source)
  console.log(code)
}

export { findCodeBySourceMap }