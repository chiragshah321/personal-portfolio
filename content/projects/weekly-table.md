---
title: Weekly Table
tagline: An AI-powered weekly meal planner for families
url: ""
status: Live
tech: [Next.js, Prisma, Claude API, SQLite]
icon: 🍽️
---

Problem

Deciding what to cook every week is a surprisingly exhausting task — especially with two kids, varying dietary preferences, and the pressure to keep things interesting without reinventing the wheel every Sunday. Existing meal planners are either too rigid or full of recipes you'd never actually make.

What I Built

Weekly Table is a family meal planner that uses Claude to generate a full week of dinner ideas based on your household's dietary preferences and a curated set of trusted recipe sources. Instead of pulling from a static database, it searches the web in real time using Claude's web search tool — so the suggestions are current, varied, and drawn from sources you actually trust.

The app lets you configure your preferred recipe sites, set dietary restrictions and preferences, and then generate a weekly plan in one click. Each plan surfaces recipe names, source links, and enough context to decide quickly what you're making. Plans are stored locally so you can revisit or regenerate for any week.

Tech Stack

Next.js, Prisma, SQLite, Anthropic Claude API (with web search), Tailwind CSS, shadcn/ui.
