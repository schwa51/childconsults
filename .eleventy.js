module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });

  eleventyConfig.addCollection("sections", function (collectionApi) {
    return collectionApi.getFilteredByTag("section").sort((a, b) => {
      return (a.data.navOrder || 0) - (b.data.navOrder || 0);
    });
  });

  eleventyConfig.addCollection("topics", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("topic")
      .filter((item) => item.fileSlug !== "index")
      .sort((a, b) => {
        return a.data.title.localeCompare(b.data.title);
      });
  });

  eleventyConfig.addCollection("pearls", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("pearl")
      .filter((item) => item.fileSlug !== "index")
      .sort((a, b) => {
        return a.data.title.localeCompare(b.data.title);
      });
  });

  eleventyConfig.addCollection("quizzes", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("quiz")
      .filter((item) => item.fileSlug !== "index")
      .sort((a, b) => {
        return (a.data.quizOrder || 0) - (b.data.quizOrder || 0);
      });
  });

  eleventyConfig.addCollection("resources", function (collectionApi) {
    return collectionApi.getFilteredByTag("resource").sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
  });

  const topicCollections = [
    ["safetyRiskTopics", "safety-risk"],
    ["acutePresentationTopics", "acute-presentations"],
    ["coreDiagnosticTopics", "core-diagnostic-topics"],
    ["neurodevelopmentTopics", "neurodevelopment-learning"]
  ];

  topicCollections.forEach(([name, section]) => {
    eleventyConfig.addCollection(name, function (collectionApi) {
      return collectionApi
        .getFilteredByTag("topic")
        .filter((item) => item.fileSlug !== "index" && item.data.sectionKey === section);
    });
  });

  eleventyConfig.addFilter("whereIncludes", function (items, key, value) {
    if (!Array.isArray(items)) {
      return [];
    }

    return items.filter((item) => {
      const target = item?.data?.[key];
      return Array.isArray(target) && target.includes(value);
    });
  });

  eleventyConfig.addFilter("findBySlug", function (items, slug) {
    if (!Array.isArray(items)) {
      return null;
    }

    return items.find((item) => item?.data?.slug === slug) || null;
  });

  eleventyConfig.addFilter("resourceTypeLabel", function (type) {
    const labels = {
      pdf: "PDF",
      slides: "PowerPoint",
      link: "Link",
      summary: "Text summary",
      handout: "Handout"
    };

    return labels[type] || type;
  });

  return {
    dir: {
      input: "src/content",
      includes: "../_includes",
      data: "../_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
