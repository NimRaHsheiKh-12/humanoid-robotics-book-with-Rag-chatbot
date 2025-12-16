# Tasks: Website UI Redesign

**Input**: Design documents from `/specs/004-website-ui-redesign/`
**Prerequisites**: plan.md (required), spec.md (required for user stories)

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

All paths are relative to `my-humanoid-book/`

## Constitution-Driven Tasks

- [X] T001 Ensure all UI components are implemented to be visually stunning, modern, and futuristic. (Applies to all UI tasks)
- [X] T002 Test for a smooth, clean, and intuitive user experience. (Applies to all UI tasks)
- [X] T003 Design and implement a unique landing page that feels like a product launch. (Applies to T010)
- [X] T004 Implement the floating chatbot and verify that it does not cause content shifting. (Applies to T017, T018)
- [X] T005 Set up the infrastructure for English and Urdu translations. (Applies to T022, T023)
- [X] T006 Enforce linting and code style rules to maintain clean code. (Applies to all code tasks)

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T007 Verify Docusaurus project setup in `my-humanoid-book/`
- [X] T008 Install/verify JavaScript dependencies using `npm` or `yarn` in `my-humanoid-book/`
- [X] T009 [P] Configure Docusaurus for CSS/SCSS imports if needed in `my-humanoid-book/docusaurus.config.ts`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [X] T010 Implement global styling (modern typography, soft glows, shadows) in `my-humanoid-book/src/css/custom.css`
- [X] T011 Set up i18n configuration for English and Urdu in `my-humanoid-book/docusaurus.config.ts`
- [X] T012 Implement a basic translation utility/hook for React components in `my-humanoid-book/src/utils/useTranslation.ts` (new file)

---

## Phase 3: User Story 1 - View the new Hero Section (Priority: P1) 🎯 MVP

**Goal**: As a visitor to the website, I want to see a visually appealing hero section with a clear call to action, so that I am engaged and know what to do next.

**Independent Test**: The hero section can be tested independently by loading the homepage and verifying its visual elements and the functionality of the CTA button.

### Implementation for User Story 1

- [X] T013 [P] [US1] Create `HeroSection` React component in `my-humanoid-book/src/components/HeroSection/index.tsx` (new directory)
- [X] T014 [P] [US1] Style `HeroSection` with bold headline, subtext, CTA button, and futuristic background in `my-humanoid-book/src/components/HeroSection/styles.module.css` (new file)
- [X] T015 [US1] Integrate `HeroSection` into the Docusaurus homepage in `my-humanoid-book/src/pages/index.tsx`
- [X] T016 [US1] Implement CTA button navigation to book chapters in `my-humanoid-book/src/components/HeroSection/index.tsx` (modifies T013)

---

## Phase 4: User Story 2 - Interact with the Chatbot (Priority: P2)

**Goal**: As a user, I want to be able to open a chatbot to ask questions, so that I can get help or more information quickly.

**Independent Test**: The chatbot functionality can be tested independently by clicking the chatbot icon and interacting with the chat window.

### Implementation for User Story 2

- [X] T017 [P] [US2] Create `FloatingChatbotIcon` React component in `my-humanoid-book/src/components/Chatbot/FloatingIcon.tsx` (new file, part of Chatbot directory)
- [X] T018 [P] [US2] Style `FloatingChatbotIcon` for bottom-right fixed position in `my-humanoid-book/src/components/Chatbot/styles.module.css` (modifies existing Chatbot styles)
- [X] T019 [US2] Implement `ChatbotPopup` React component (overlay style, close button) in `my-humanoid-book/src/components/Chatbot/Popup.tsx` (new file)
- [X] T020 [US2] Integrate `FloatingChatbotIcon` and `ChatbotPopup` into the Docusaurus layout (e.g., in `my-humanoid-book/src/theme/Layout/index.tsx` or `my-humanoid-book/src/pages/index.tsx` if global layout modification is complex)
- [X] T021 [US2] Implement toggle logic for chatbot popup visibility in `my-humanoid-book/src/components/Chatbot/FloatingIcon.tsx` and `my-humanoid-book/src/components/Chatbot/Popup.tsx` (modifies T017, T019)

---

## Phase 5: User Story 3 - Toggle Website Language (Priority: P3)

**Goal**: As a user, I want to be able to switch the website's language between English and Urdu, so that I can read the content in my preferred language.

**Independent Test**: The translation feature can be tested by using the language toggle and verifying that the specified text elements are translated.

### Implementation for User Story 3

- [X] T022 [P] [US3] Create `LanguageToggle` React component in `my-humanoid-book/src/components/LanguageToggle/index.tsx` (new directory)
- [X] T023 [US3] Implement logic to switch Docusaurus i18n locale and apply translations in `my-humanoid-book/src/components/LanguageToggle/index.tsx` (modifies T022, uses T011, T012)
- [X] T024 [US3] Integrate `LanguageToggle` into header/navbar (e.g., `my-humanoid-book/src/theme/Navbar/index.tsx` if customizable)
- [X] T025 [US3] Apply translation to Hero Section text elements (headline, subtext, CTA) in `my-humanoid-book/src/components/HeroSection/index.tsx` (modifies T013)
- [ ] T026 [US3] Apply translation to Chatbot UI text elements in `my-humanoid-book/src/components/Chatbot/Popup.tsx` (modifies T019)

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [ ] T027 Ensure responsiveness across various screen sizes for Hero Section and Chatbot in their respective CSS files.
- [ ] T028 Optimize image assets (e.g., humanoid robot image) for performance in `my-humanoid-book/static/img/`
- [ ] T029 Conduct accessibility audit and fix issues for new UI components.
- [ ] T030 Update `my-humanoid-book/README.md` with instructions for running the redesigned website.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
  - User stories can then proceed in parallel (if staffed)
  - Or sequentially in priority order (P1 → P2 → P3)
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2) - No dependencies on other stories
- **User Story 2 (P2)**: Can start after Foundational (Phase 2) - May integrate with US1 but should be independently testable
- **User Story 3 (P3)**: Can start after Foundational (Phase 2) - May integrate with US1/US2 but should be independently testable

### Within Each User Story

- Models before services
- Services before endpoints
- Core implementation before integration
- Story complete before moving to next priority

### Parallel Opportunities

- All Setup tasks marked [P] can run in parallel
- All Foundational tasks marked [P] can run in parallel (within Phase 2)
- Once Foundational phase completes, all user stories can start in parallel (if team capacity allows)
- All tests for a user story marked [P] can run in parallel
- Components within a story marked [P] can run in parallel
- Different user stories can be worked on in parallel by different team members

---

## Parallel Example: User Story 1

```bash
# Launch all components for User Story 1 together:
Task: "Create HeroSection React component in my-humanoid-book/src/components/HeroSection/index.tsx"
Task: "Style HeroSection with bold headline, subtext, CTA button, and futuristic background in my-humanoid-book/src/components/HeroSection/styles.module.css"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL - blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: Test User Story 1 independently
5. Deploy/demo if ready

### Incremental Delivery

1. Complete Setup + Foundational → Foundation ready
2. Add User Story 1 → Test independently → Deploy/Demo (MVP!)
3. Add User Story 2 → Test independently → Deploy/Demo
4. Add User Story 3 → Test independently → Deploy/Demo
5. Each story adds value without breaking previous stories

### Parallel Team Strategy

With multiple developers:

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: User Story 1
   - Developer B: User Story 2
   - Developer C: User Story 3
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story should be independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Avoid: vague tasks, same file conflicts, cross-story dependencies that break independence
