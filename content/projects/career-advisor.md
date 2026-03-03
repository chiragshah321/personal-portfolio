---
title: Career Advisor
tagline: An AI-powered job search command center with fit scoring and strategic coaching
url: ""
status: Live
tech: [React, Vite, Zustand, Claude API, Recharts, dnd-kit]
icon: 🎯
---

Problem

Job searching is chaotic by default — bookmarks scattered across tabs, no visibility into your pipeline, and zero feedback on whether a role is actually worth pursuing. I wanted a single place to manage the full funnel, with an AI that could tell me where to focus my energy.

What I Built

Career Advisor is a full-featured job search management app with a Kanban board (Bookmarked → Applied → Interviewed → Offer), AI-powered fit scoring, and a Strategist page that turns your activity data into actionable weekly recommendations. Each job gets scored by Claude based on your profile and the job description — strong, good, neutral, or weak — so you always know which applications are worth prioritizing.

The dashboard tracks your weekly application goal with a pipeline funnel, surfaces stale applications that need follow-up, and flags bookmarks that have been sitting untouched for two weeks. A companion Chrome extension lets you scrape job postings directly from the web into the board without copy-pasting.

The Reports page gives you a 12-week application trend chart, status and fit-score breakdowns, and CSV export. Everything runs client-side with Zustand persisted to localStorage — no backend required.

Tech Stack

React 19, TypeScript, Vite, Zustand, Anthropic Claude API, Recharts, dnd-kit, Radix UI, Tailwind CSS.
