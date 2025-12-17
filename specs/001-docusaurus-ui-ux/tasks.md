---
description: "Task list for Docusaurus UI/UX Redesign"
---

# Tasks: Docusaurus UI/UX Redesign

**Input**: Design documents from `/specs/001-docusaurus-ui-ux/`
**Prerequisites**: plan.md, spec.md

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies on incomplete tasks).
- **[Story]**: Which user story this task belongs to ([US1], [US2], etc.).
- Include exact file paths in descriptions.

## Path Conventions

- All paths are relative to the `my-humanoid-book/` directory.

---

## Phase 1: Setup (Foundational UI)

**Purpose**: Establish the new visual identity across the site.

- [ ] T001 [P] Define new color palette, typography, and clean spacing rules in `src/css/custom.css`.
- [ ] T002 [P] Source and add a futuristic humanoid robot image to `static/img/`.

---

## Phase 2: User Story 1 - Landing Page Redesign (Priority: P1) 🎯 MVP

**Goal**: Redesign the landing page hero to look like a product launch.
**Independent Test**: Visually inspect the landing page on desktop and mobile to confirm the new design and that the main button navigates to the first documentation page.

### Implementation for User Story 1

- [ ] T003 [US1] Create a new `HeroSection` component in `src/components/HeroSection/index.tsx` and its corresponding styles in `src/components/HeroSection/styles.module.css`.
- [ ] T004 [US1] Implement the modern, futuristic layout within the `HeroSection` component, using the robot image from `static/img/`.
- [ ] T005 [US1] Replace the existing hero section on the landing page with the new `HeroSection` component in `src/pages/index.tsx`.
- [ ] T006 [US1] Update the primary call-to-action button in the `HeroSection` component to navigate to the first chapter of the book (e.g., `/docs/foundations/01-introduction-humanoid-robotics`).

---

## Phase 3: User Story 2 - Floating Chatbot Widget (Priority: P2)

**Goal**: Implement a floating chatbot widget on the landing page and remove the old implementation.
**Independent Test**: Verify the chatbot icon appears only on the landing page. On click, a popup should appear. The old chatbot link should be gone.

### Implementation for User Story 2

- [ ] T007 [US2] Remove the existing chatbot page link from the docs sidebar in `sidebars.ts`.
- [ ] T008 [US2] Remove the old chatbot page files: `docs/chatbot.mdx` and `src/pages/chatbot.mdx`.
- [ ] T009 [P] [US2] Create a `FloatingIcon` component for the chatbot toggle in `src/components/Chatbot/FloatingIcon.tsx`.
- [ ] T010 [P] [US2] Create a `ChatPopup` component for the chat interface in `src/components/Chatbot/ChatPopup.tsx`.
- [ ] T011 [US2] Create a primary `Chatbot` component in `src/components/Chatbot/index.tsx` to manage the open/close state and animations for the `FloatingIcon` and `ChatPopup`.
- [ ] T012 [US2] Conditionally render the `Chatbot` component only on the landing page, for example, by adding it to `src/pages/index.tsx`.
- [ ] T013 [US2] Connect the `ChatPopup` component to the chatbot backend API.

---

## Phase 4: User Story 3 - Multilingual Support (Priority: P2)

**Goal**: Enable English and Urdu language support for key UI elements.
**Independent Test**: Use the language toggle to switch between English and Urdu and verify that the hero section and chatbot text updates accordingly.

### Implementation for User Story 3

- [ ] T014 [US3] Configure Docusaurus for internationalization (i18n) to support English (`en`) and Urdu (`ur`) in `docusaurus.config.ts`.
- [ ] T015 [US3] Create a `LanguageToggle` component in `src/components/LanguageToggle/index.tsx`.
- [ ] T016 [US3] Add the `LanguageToggle` component to the website's navigation bar in `src/theme/Navbar/index.tsx`.
- [ ] T017 [US3] Extract hardcoded text from the `HeroSection` and `Chatbot` components and replace it with the `useTranslation` hook.
- [ ] T018 [US3] Create translation files for the extracted strings in `i18n/en/` and `i18n/ur/`.

---

## Phase 5: Polish & Cross-Cutting Concerns (User Story 4)

**Purpose**: Ensure a high-quality, consistent, and visually striking design.
**Independent Test**: Review the website on multiple browsers (Chrome, Firefox, Safari) and devices (desktop, tablet, mobile) to ensure visual consistency and functionality.

### Implementation for User Story 4

- [ ] T019 [US4] Review and apply modern typography, subtle glows, and other unique design elements in `src/css/custom.css`.
- [ ] T020 [US4] Perform a full responsive design test on all new components (`HeroSection`, `Chatbot`).
- [ ] T021 [US4] Conduct cross-browser compatibility testing.
- [ ] T022 [US4] Review the site for performance and optimize images and component loading.
- [ ] T023 [US4] Refactor and add comments to new components to improve code quality and maintainability.

---

## Dependencies & Execution Order

- **Phase 1 (Setup)** can begin immediately.
- **Phase 2 (US1)** depends on Phase 1.
- **Phase 3 (US2)** can run in parallel with Phase 2.
- **Phase 4 (US3)** depends on Phase 2 and 3 for component text extraction.
- **Phase 5 (US4)** should be done last, after all other features are implemented.