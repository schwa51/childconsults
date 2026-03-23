class SearchIndex {
  data() {
    return {
      permalink: "/search-index.json",
      eleventyExcludeFromCollections: true
    };
  }

  render({ collections }) {
    const items = [
      ...(collections.topics || []),
      ...(collections.pearls || []),
      ...(collections.resources || []),
      ...(collections.quizzes || [])
    ].map((item) => ({
      title: item.data.title,
      url: item.url,
      type: item.data.pageType || item.data.resourceType || "page",
      summary: item.data.summary || "",
      tags: item.data.tags || [],
      aliases: item.data.aliases || []
    }));

    return JSON.stringify(items, null, 2);
  }
}

module.exports = SearchIndex;
