---
title: Job Searcher
tagline: A personal job board that scrapes 15+ sources and tracks applications
url: ""
status: Live
tech: [Next.js, Supabase, Playwright, Cheerio, node-cron]
icon: 🔍
---

Problem

Job hunting means checking 15 different boards every day, copy-pasting into spreadsheets, and losing track of what you've applied to. I built a tool that does the aggregation automatically so I can focus on applying.

What I Built

Job Searcher scrapes 15+ job boards — including Wellfound, YC's Work at a Startup, Lenny's Jobs, and more — and surfaces Product Management roles in Austin and remote. Jobs are automatically tiered: Tier 1 for direct PM roles, Tier 2 for adjacent ones. I can mark jobs as considering, applied, or dismissed, track interview stages, and filter by source, location, and recency.

A cron job runs the scraping automatically so the board stays fresh without any manual effort.

Tech Stack

Next.js, React, Supabase, Playwright, Cheerio, node-cron, Tailwind CSS.
