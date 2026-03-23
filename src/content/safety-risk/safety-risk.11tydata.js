module.exports = {
  layout: "layouts/topic.njk",
  tags: ["topic"],
  sectionKey: "safety-risk",
  audience: ["medical students", "residents", "fellows", "faculty"],
  breadcrumbs(data) {
    return [
      { label: "Home", url: "/" },
      { label: "Safety & Risk", url: "/safety-risk/" },
      { label: data.title }
    ];
  }
};
