---
title: Financial Planner
tagline: A personal finance dashboard for tracking spending, budgets, and investments
url: ""
status: Live
tech: [Next.js, Supabase, Claude API, Recharts]
icon: 💰
---

Problem

Most personal finance tools are either too generic or buried in subscription paywalls. I wanted full visibility into how my household actually spends money — with real budgets, real accounts, and an AI that can answer questions about the data directly.

What I Built

Financial Planner is a household finance dashboard that syncs transactions from all accounts, categorizes them automatically using Claude, and tracks spending against monthly budgets. The dashboard surfaces KPI cards for income, spending, net, and savings rate, with drill-down views into any category, person, or time period.

The reports page includes pie charts broken down by category, expense type, necessity, and person — each clickable to pull up the underlying transactions. A budget status table shows month-to-date actuals vs. targets with a 3-month rolling average, and a history chart visualizes spending trends over time. Transfers and investments are excluded from expense reporting automatically.

The transactions page supports bulk editing, inline categorization, and filters across 8 dimensions. An auto-categorize feature uses Claude to classify uncategorized transactions in bulk.

Tech Stack

Next.js, React, Supabase, Anthropic Claude API, Recharts, Tailwind CSS, Radix UI.
