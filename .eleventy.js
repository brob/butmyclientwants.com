module.exports = function(config) {
   
    config.addPassthroughCopy("./admin");
    config.addPassthroughCopy("./assets");

    return {
        dir: {
          input: ".",
          output: "dist",
          includes: "templates"
        },
        templateFormats : ["html", "md", "css", "liquid"],
        htmlTemplateEngine : "liquid",
        markdownTemplateEngine : "liquid"
      };
}