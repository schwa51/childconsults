module.exports = {
  layout: "layouts/pearl.njk",
  tags: ["pearl"],
  breadcrumbs(data) {
    return [
      { label: "Home", url: "/" },
      { label: "Clinical Pearls", url: "/clinical-pearls/" },
      { label: data.title }
    ];
  }
};
