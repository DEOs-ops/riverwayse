# Visual & Motion System

This is the checked-in source of truth for how riverwayse looks and moves.
It exists so decisions stay consistent even when made months apart, by
different people, without everyone re-deriving the philosophy from scratch.

If you're about to add a new visual or motion feature, read the relevant
section below before writing code.

---

## 1. The four motion tiers

Every animation on the site belongs to exactly one of these. If you can't
name which tier something is, that's a signal to reconsider it before
building it.

| Tier | Purpose | Trigger | Tokens |
|---|---|---|---|
| **Ambient** | Background atmosphere — always-on, decorative, never demands attention | Time (rAF loop) | Not tokenized — tuned per-scene (`LivingCurrent`, `LandscapeHero`'s stars/clouds) |
| **Arrival** | Content settling into place — a page or element composing itself on screen | Mount or scroll-into-view | `--ease-arrival`, `--dur-arrival` |
| **Response** | Micro-interaction feedback — the UI acknowledging a hover/tap | User input | `--ease-response`, `--dur-response` |
| **Passage** | Moving between states/pages — the ripple veil | Navigation | `--ease-passage`, `--dur-passage` |

Tokens live in `app/globals.css` under `:root`. Never hardcode a duration or
easing curve outside these — if a new value seems needed, add a token
rather than inlining a one-off number. Consistency is the entire point.

## 2. Realism roadmap — what's built vs. what's next

Current state (as of the motion-system work): everything is 2D-native —
SVG parallax (`LandscapeHero`), canvas particles (`LivingCurrent`), CSS
transforms and custom-property-driven glows (`PortalCard`). No WebGL, no
real-time lighting, no 3D assets.

Moving toward more visual/interactive realism is a *maturity path*, not a
single leap. In order:

1. **Push 2D further first.** Better lighting fakes, more physically
   plausible particle motion, refined easing. Cheap, no new infrastructure,
   no new failure modes.
2. **One WebGL surface, proven out.** Introduce real-time 3D/shader work in
   a single high-impact place — not site-wide — with a hard performance
   budget and a working no-WebGL fallback, before expanding anywhere else.
   See `/experimental/hero-3d` for the current prototype and §5 below.
3. **Extend once proven.** A second surface, only after the first has real
   field performance data behind it (see §4, RUM).
4. **Formalize the asset pipeline.** Compression, CDN, and either Git LFS or
   a proper DAM tool — worth doing once there are real 3D/photoreal assets
   to manage, not before.
5. **Photoreal source imagery/video.** A production/budget decision as much
   as a technical one — commissioned shoots or a curated, quality-gated
   AI-asset pipeline. Last, not first.

Do not skip ahead. Realism is expensive in ways flat design isn't — GPU
load, asset weight, cross-device fragility — and skipping straight to step
5 without 1–4 in place is how a site looks incredible on one MacBook and
stutters everywhere else, including on the mixed-connection-quality,
Lagos-first / global-ambition audience this site is actually for.

## 3. Performance gate — required for every new visual feature

Before any new visual/motion feature ships, it must have an answer for:

- **What does this cost on a low-end device?** Test on throttled CPU/network
  in devtools at minimum; real low-end hardware if the feature is
  significant (any WebGL work qualifies as significant).
- **What's the fallback?** When WebGL is unavailable, or
  `prefers-reduced-motion` is set — never a blank space or a broken layout.
- **Does this push a performance budget?** See §4.

This is a discipline extension of what the motion-token PR started —
`prefers-reduced-motion` guards are now consistent across `LandscapeHero`,
`LivingCurrent`, `PortalCard`, `Nav`, and `PageTransition`. Any new
component follows the same pattern from the start, not bolted on after.

## 4. Infrastructure notes

- **3D layer, if/when needed beyond the current prototype:** React Three
  Fiber over raw Three.js — declarative, fits the existing component model.
  Assets in glTF with Draco/Meshopt compression once real geometry is
  involved (the current prototype uses only procedural geometry and a
  custom shader — no external assets yet).
- **Imagery:** moving off hand-exported PNGs at fixed resolution toward an
  image CDN with automatic AVIF/WebP negotiation and responsive sizing,
  once imagery ambition increases. Not urgent at current asset count.
- **Performance monitoring:** field data (Vercel Analytics or equivalent
  RUM) should exist before step 3 of the roadmap above — decisions about
  expanding WebGL usage should be based on real visitor device/connection
  data, not just local dev-machine impressions.
- **Performance budgets in CI:** not yet in place. Worth adding once the
  hero-3d prototype (or its successor) is a real production candidate —
  a bundle-size and draw-call ceiling checked automatically, not
  remembered manually.

## 5. Current prototype: `/experimental/hero-3d`

A standalone, isolated route — not wired into the live homepage — testing
whether a real-time-lit version of the hero's bioluminescent light shaft
and river glow reads better than the current SVG gradient approximation.

- Built with React Three Fiber, procedural geometry only (no external 3D
  assets), a custom GLSL shader for the volumetric light shaft.
- Mouse-driven camera parallax as the interactive layer.
- Full `prefers-reduced-motion` and no-WebGL fallback handling.
- Deliberately isolated from production so it can be reviewed and iterated
  on without any risk to the live site's performance or stability.

This is the step-2 candidate from the roadmap in §2. It should not be
wired into the real homepage until it's been reviewed against the
performance gate in §3.

**Measured cost:** `/experimental/hero-3d` ships 211 kB of route-specific
JS (299 kB first load, vs. ~90–105 kB for every other route on the site).
That's the concrete number behind §3's "what does this cost" question —
Three.js + R3F is not a free add. Before this (or anything like it) gets
near production, that number needs to come down — code-splitting so it
only loads on routes that use it (already true here, since it's an
isolated route) and lazy-loading the Canvas so it doesn't block first
paint are the first two levers, not building the feature further.

## 6. Skills map

Being direct about who realistically owns what, as visual ambition grows:

| Skill | Owner today |
|---|---|
| Front-end engineering, performance | Claude, with review |
| 3D scene/shader work | Claude, quality ceiling depends on reference/direction quality |
| 3D asset creation (modeling/texturing), if scenes ever need custom geometry beyond procedural shapes | Not currently covered — would need a freelance 3D artist or an AI-asset tool |
| Art direction / brand consistency | Femi — cannot be delegated, this is what keeps "realism" reading as Riverways rather than as a generic WebGL demo |
| Photography/videography | Not currently covered |
| Performance/accessibility QA | Process discipline (§3), not a headcount question |

Don't build out capacity ahead of need. Decide per-feature whether it's
"primitives built in code" (cheap, matches current stack) or "needs an
external asset/skill" (freelancer, AI-asset tool, or licensed library) —
and make that call deliberately before committing to an idea.
