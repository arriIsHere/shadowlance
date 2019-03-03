const Moment = require('moment');

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter('date', function(value, format) {
    return Moment(value).format(format);
  });

  return {
    dir: {
      input: 'src',
    },
    templateFormats: [
      "md",
      "html",
      "css",
      "jpg",
      "png",
      "gif",
      "njk",
      "otf",
      "woff",
    ],
    passthroughFileCopy: true,
  }

};