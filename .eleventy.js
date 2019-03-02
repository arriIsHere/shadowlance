const Moment = require('moment');

module.exports = function(eleventyConfig) {

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    templateFormats: [
      "md",
      "html",
      "css",
      "jpg",
      "png",
      "gif",
      "njk"
    ],
    passthroughFileCopy: true
  }
  
};