---
title: Quizzes
layout: layouts/page.njk
pageType: Quizzes
summary: Rotation-level self-check pages and future topic practice question sets.
breadcrumbs:
  - label: Home
    url: /
  - label: Quizzes
---
<ul class="link-list">
{% for quiz in collections.quizzes %}
  <li><a href="{{ quiz.url }}">{{ quiz.data.title }}</a></li>
{% endfor %}
</ul>
