---
layout: home
title: Custom flight sim and racing hardware
description: >-
  s16n builds custom flight sim and sim racing hardware in San Diego — Funky-coder, panels, isolators, Controller Manager, and more.
image: /assets/images/fc-plus.jpg
permalink: /
---

{% assign homepage_items = site.pages | where: "homepage", true | sort: "homepage_order" %}

<div class="projects-intro">
  <div>
    <h2>Projects</h2>
    <p>Panels, controls, and builds for sim and workshop.</p>
  </div>
  <a class="btn btn--ghost" href="{{ site.shop_url }}" target="_blank" rel="noopener noreferrer">Open shop</a>
</div>

<div class="project-grid">
  {% for item in homepage_items %}
    {% assign card_title = item.card_title | default: item.title %}
    {% assign card_image = item.card_image | default: item.image %}
    {% assign tag_list = item.tags | join: " " %}
    {% assign is_product = false %}
    {% if item.tags contains "product" %}
      {% assign is_product = true %}
    {% endif %}
    <article class="project-card{% if item.card_wide %} project-card--wide{% endif %}" data-tags="{{ tag_list }}">
      <a class="project-card__hit" href="{{ item.url | relative_url }}">
        <div class="project-card__media">
          <img src="{{ card_image | relative_url }}" alt="">
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">{{ card_title | escape }}</h3>
          {% if item.card_desc %}
          <p class="project-card__desc">{{ item.card_desc | escape }}</p>
          {% endif %}
        </div>
      </a>
      <div class="project-card__actions">
        <a class="project-card__more" href="{{ item.url | relative_url }}">{{ item.card_more | default: "View project" | escape }}</a>
        {% if is_product %}
        <a class="btn btn--buy" href="{{ site.shop_url }}" target="_blank" rel="noopener noreferrer">Buy</a>
        {% endif %}
      </div>
    </article>
  {% endfor %}
</div>

<p class="project-filter-empty" hidden>No items in this filter.</p>
