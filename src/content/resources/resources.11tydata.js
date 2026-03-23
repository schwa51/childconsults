module.exports = {
  layout: "layouts/resource.njk",
  tags: ["resource"],
  breadcrumbs(data) {
    return [
      { label: "Home", url: "/" },
      { label: "All Resources", url: "/all-resources/" },
      { label: data.title }
    ];
  }
};
