module.exports = {
  layout: "layouts/topic.njk",
  tags: ["topic"],
  sectionKey: "acute-presentations",
  audience: ["medical students", "residents", "fellows", "faculty"],
  breadcrumbs(data) {
    return [
      { label: "Home", url: "/" },
      { label: "Acute Presentations", url: "/acute-presentations/" },
      { label: data.title }
    ];
  }
};
