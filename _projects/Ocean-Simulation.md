---
title: "FFT based Ocean simmulation"
description: "8 week research project implementing a <strong>Tessendorf-based FFT ocean simulation</strong> running on the <strong>PlayStation 5</strong>. Created with the PS5 rendering API."
image: /assets/img/posts/ocean/oceangif.gif
tags:
  - 🚀 University
  - 🔧 PS5
  - 👤 Solo
  - 💻 Console
  - ⏱️ 8 weeks
order: 5
---

The gif above is a **ported version** to my **DirectX 12 engine** with improvements like better **shading** and **ocean cascades**. In the future I plan to add **interaction with the ocean** through **displacement**, like when rain hits the water or an object enters it, as well as **buoyancy** so objects float with the waves.

I wrote an article on the **implementation details** below. It doesn't go into the code but rather how the **waves are created** using the **Fast Fourier Transform**.

<img src="/assets/img/posts/ocean/ocean.gif" alt="Image" width="500"/>

{% assign linked_post = site.posts | where: 'slug', 'Ocean' | first %}
{% include post-card.html post=linked_post %}