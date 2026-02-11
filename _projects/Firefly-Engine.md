---
title: "Firefly engine"
description: "We were tasked with creating an render engine that we could integrate into 2 sepperate engines one of them focused on fps games and the other on rogue likes."
image: /assets/img/projects/firefly.png
features:
  - title: "Storing G-buffer Data On PS5"
    text: "Created the deferred rendering pipeline for PS5 with G-buffer passes storing albedo/roughness, normal/metallic, and emission in separate render targets. World position is reconstructed from the depth buffer to save memory."
    icon: "fas fa-display"
    image: "/assets/img/projects/firefly/damagedhelmetdeferred.png"
  - title: "Directional Shadow Mapping"
    text: "Implemented directional shadow maps by capturing the scene depth from the lights perspective and reconstructing the shadow position in the light pass with a box blur filter for soft edges, works on both DX12 and PS5."
    icon: "fas fa-moon"
    image: "/assets/img/projects/firefly/directshadows.gif"
  - title: "Tone Mapping & Post Processing"
    text: "Created a post process pass with Reinhard, ACES and filmic tone mapping options, exposure slider and gamma correction all controllable via ImGui settings."
    icon: "fas fa-adjust"
    image: "/assets/img/projects/firefly/tonemapping.gif"
  - title: "PS5 Pipeline State Abstraction"
    text: "Helped designing the PS5 pipeline settings system where you set a PipelineSettings struct in each pass and it automatically applies depth, stencil, culling, winding order and blending on the playstation via the abstracted command list."
    icon: "fas fa-sliders-h"
    image: "/assets/img/projects/firefly/fireflyabstraction.png"
  - title: "PBR & HDR Rendering"
    text: "Added PBR shading to the deferred renderer and enabled HDR output on the PS5 by using high precision output render targets when HDR is enabled on the system/monitor."
    icon: "fas fa-sun"
tags:
  - 🚀 Engine
  - 🔧 C++ Custom engine
  - 👤 Team
  - 💻 Windows/PS5
  - ⏱️ 8 weeks
order: 4
---
