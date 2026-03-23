module.exports = {
  layout: "layouts/quiz.njk",
  tags: ["quiz"],
  breadcrumbs(data) {
    return [
      { label: "Home", url: "/" },
      { label: "Quizzes", url: "/quizzes/" },
      { label: data.title }
    ];
  }
};
