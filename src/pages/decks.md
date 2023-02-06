---
layout: layouts/base.njk
title: 'Decks'
permalink: /decks/
meta:
  description: A collection of slide decks from presentations by Craig Abbott.,
  canonicalURL: 'https://craigabbott.co.uk/decks/'
  image:
    href: '/images/share-image-1.jpg'
    alt: 'Craig Abbott presenting at a conference'
---

<h1>
  Decks
</h1>
 
<ol class="list list--blank">
  {%- for deck in collections._decks|sortByTitle -%}
    <li>
      <a href="/decks/{{deck.data.title|slugify}}">
        {{deck.data.title}}
      </a>
    </li>  
  {%- endfor -%}
</ol>
