# Crossroads Demo Prep

Prep workspace for a demo website for **The Crossroads**, a playful color bar / salon concept with attached health product sales.

## Purpose

This repository is for:

- website prototyping
- agent and LLM workflow setup
- research and market-summary guardrails
- content and product planning

The demo may use fictional business details for structure and design exploration, but all market data, competitor research, health claims, and business recommendations must be sourced from credible external references.

## Initial Structure

- `apps/web/` - future website application
- `agents/` - prompts, policies, and YAML configs for assistants
- `data/` - structured business, product, and content data
- `docs/` - workflow docs, research notes, and planning
- `scripts/` - automation helpers for setup and reporting

## Non-Negotiable Research Rule

Never invent facts, metrics, market stats, customer counts, pricing benchmarks, health claims, or competitor details.

If a request needs current or factual information:

1. Use the web.
2. Prefer primary or credible sources.
3. Cite the source.
4. If credible sources are unavailable, say that clearly.

## Suggested Next Steps

1. Choose the web stack for `apps/web/`.
2. Define the owner workflow for content updates, research requests, and build requests.
3. Add GitHub remote and deployment targets.
