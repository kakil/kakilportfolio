# Akil Digital Root Site

This directory now contains the static V1 for **AkilDigital.com**.

## Purpose

The root domain is the public front door for Akil Digital:
- company and founder overview
- current products
- current projects
- articles and videos
- social links
- contact information

## Production deployment

Deploy this repository to Cloudflare Pages as a **static HTML** project.

Recommended Pages settings:
- Production branch: `main`
- Framework preset: None
- Build command: `exit 0` (or leave blank)
- Build output directory: `.`
- Root directory: repository root

Then add the custom domain `akildigital.com` in the Pages project's **Custom domains** settings.

## Important product-link rule

Do **not** link the public root site directly to the Micro-Series Studio buyer application at `microseries.akildigital.com`.

The public product CTA should point to:
`https://microseries.akildigital.com/launch/`

## Current public social/contact sources

These were carried forward from the prior portfolio:
- GitHub: https://github.com/kakil
- LinkedIn: https://www.linkedin.com/in/kitwanaakil/
- YouTube: https://www.youtube.com/@kitwanaakil
- X/Twitter: https://twitter.com/kakil
- Instagram: https://www.instagram.com/akil69/
- Legacy public business email: kitwana@akildev.com

Replace the legacy email when the Akil Digital domain mailbox is ready.


## Product repository and domain convention

Effective October 2026, every Akil Digital product should have:
- its own GitHub repository
- its own AkilDigital.com subdomain
- a status entry on the root AkilDigital.com site while it is being built

The root site should link to the standalone product domain only when that product surface is ready. Until then, use a project-status page under `/projects/`.

Current convention example:
- Product: Digital Opportunity Intelligence 2027
- Repository: `kakil/digital-opportunity-intelligence-2027`
- Planned subdomain: `opportunity2027.akildigital.com`
- Root-site status page: `/projects/digital-opportunity-intelligence-2027/`


## Project tracking convention

Every Akil Digital product/project repository must use the standard defined in:

`AKIL-DIGITAL-PROJECT-TRACKING-STANDARD.md`

In addition to the dedicated repository and AkilDigital.com subdomain, every product should maintain:
- a frozen planning baseline in `docs/`
- a living `training-capture/` record
- exact high-value prompt capture
- bugs/failures and fixes
- testing/validation evidence
- deployment/platform setup
- launch/commercial tracking
- known-good Git baselines
- post-launch results and lessons

Micro-Series Studio is the original detailed reference implementation. Digital Opportunity Intelligence 2027 is the first project adopting the convention from inception.
