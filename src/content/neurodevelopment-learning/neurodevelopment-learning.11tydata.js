module.exports = {
  layout: "layouts/topic.njk",
  tags: ["topic"],
  sectionKey: "neurodevelopment-learning",
  audience: ["medical students", "residents", "fellows", "faculty"],
  breadcrumbs(data) {
    return [
      { label: "Home", url: "/" },
      { label: "Neurodevelopmental & Learning", url: "/neurodevelopment-learning/" },
      { label: data.title }
    ];
  }
};
