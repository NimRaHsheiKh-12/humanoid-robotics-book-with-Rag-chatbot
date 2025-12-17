---
id: 3
title: Update Constitution for Hackathon UI
stage: constitution
date: 2025-12-15
surface: agent
model: {{MODEL}}
feature: none
branch: {{BRANCH}}
user: {{USER}}
command: /sp.constitution
labels: [constitution, UI, hackathon]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
  - .specify/memory/constitution.md
  - .specify/templates/plan-template.md
  - .specify/templates/tasks-template.md
tests:
  []
---

## Prompt

/sp.constitution
You are designing a hackathon-level website UI for a humanoid robotics book.RULES:- UI must be visually stunning, modern, and futuristic- Website must NOT look like a normal docs website- Landing page must feel like a product launch- Design should be eye-catching, premium, and unique- Chatbot must behave like a real website chat widget- Chatbot must float on screen (not a side panel)- No content shifting when chatbot opens- UX must be smooth, clean, and intuitive- Website must support English and Urdu translations- Focus on creativity, visualization, and wow-factor- Code quality and structure must remain cleanGOAL:Create a standout hackathon project that feels different, memorable, and professional.

## Response snapshot

I have updated the project constitution to version 2.0.0, incorporating your UI/UX principles for the hackathon. I also updated the plan and task templates to align with the new constitution.

## Outcome

- ✅ Impact: High. The constitution was significantly changed.
- 🧪 Tests: N/A
- 📁 Files: 3 files modified.
- 🔁 Next prompts: N/A
- 🧠 Reflection: The shell script for PHR creation failed, so I used the fallback mechanism.

## Evaluation notes (flywheel)

- Failure modes observed: PHR script not found.
- Graders run and results (PASS/FAIL): NA
- Prompt variant (if applicable): N/A
- Next experiment (if applicable): Fix the PHR creation script.
