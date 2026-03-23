module.exports = {
  layout: "layouts/topic.njk",
  tags: ["topic"],
  sectionKey: "core-diagnostic-topics",
  audience: ["medical students", "residents", "fellows", "faculty"],
  breadcrumbs(data) {
    return [
      { label: "Home", url: "/" },
      { label: "Core Diagnostic Topics", url: "/core-diagnostic-topics/" },
      { label: data.title }
    ];
  }
};
