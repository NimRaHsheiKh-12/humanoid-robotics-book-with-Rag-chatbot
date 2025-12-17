# Tasks: Website Chatbot Widget

**Feature**: Website Chatbot Widget
**Branch**: `005-chatbot-widget`

This document outlines the actionable, dependency-ordered tasks required to implement the Website Chatbot Widget feature.

## Implementation Strategy

The implementation will follow a prioritized, user-story-based approach. We will start with the core functionality of displaying and opening the chatbot widget (US1), followed by the ability to close it (US2). The final user story (US3) addresses a separate requirement for the hero section CTA. Each user story is designed to be an independently testable increment.

## Phases

### Phase 1: Setup

- [X] T001 Create the directory structure for the new component in `my-humanoid-book/src/components/Chatbot/`
- [X] T002 Create empty files: `my-humanoid-book/src/components/Chatbot/index.tsx`, `my-humanoid-book/src/components/Chatbot/Chatbot.css`, and `my-humanoid-book/src/components/Chatbot/FloatingIcon.tsx`

### Phase 2: User Story 1 - View and Open Chatbot

**Goal**: A visitor on the landing page can see and open the chatbot widget.
**Independent Test**: Load the landing page, verify the icon appears, click it, and confirm the chat window opens as an overlay. Verify the icon does not appear on other pages.

- [X] T003 [US1] Create the basic functional component for the floating icon in `my-humanoid-book/src/components/Chatbot/FloatingIcon.tsx`.
- [X] T004 [US1] Create the main chatbot component structure, including the chat window shell, in `my-humanoid-book/src/components/Chatbot/index.tsx`.
- [X] T005 [US1] Implement state management (e.g., using `useState`) within `my-humanoid-book/src/components/Chatbot/index.tsx` to handle the open/closed state of the chat window.
- [X] T006 [US1] Add basic styling to `my-humanoid-book/src/components/Chatbot/Chatbot.css` to position the floating icon at the bottom-right and style the initial hidden state of the chat window.
- [X] T007 [US1] Modify the main landing page at `my-humanoid-book/src/pages/index.tsx` to import and render the `Chatbot` component.
- [X] T008 [US1] Ensure the chatbot component is rendered only on the landing page and not on other document pages by adding conditional logic, likely in `my-humanoid-book/src/pages/index.tsx` or a layout component if one is used.

### Phase 3: User Story 2 - Close Chatbot

**Goal**: A user can close the opened chat window.
**Independent Test**: Open the chat window, click the close button, and verify the window closes smoothly.

- [X] T009 [US2] Add a 'close' button element within the chat window in `my-humanoid-book/src/components/Chatbot/index.tsx`.
- [X] T010 [US2] Implement the onClick handler for the close button in `my-humanoid-book/src/components/Chatbot/index.tsx` to update the component's state and hide the window.

### Phase 4: User Story 3 - Main CTA Navigation

**Goal**: The main hero section CTA button navigates to the first book chapter.
**Independent Test**: Load the landing page and click the main CTA button. Verify the browser navigates to the correct chapter URL.

- [X] T011 [US3] Update the `href` attribute of the hero section's primary CTA button in `my-humanoid-book/src/pages/index.tsx` to point to the URL of the first book chapter.

### Phase 5: Polish & Cross-Cutting Concerns

- [X] T012 [P] Refine the animations for opening and closing the chat window in `my-humanoid-book/src/components/Chatbot/Chatbot.css` to be a smooth fade and scale (<500ms).
- [X] T013 [P] Apply "futuristic, premium, and visually striking" styling to the floating icon and chat window shell in `my-humanoid-book/src/components/Chatbot/Chatbot.css`.
- [X] T014 Ensure the chatbot widget is responsive and adapts gracefully to narrow screen sizes. Verify styles in `my-humanoid-book/src/components/Chatbot/Chatbot.css`.

## Dependency Graph

- **US1** must be completed before **US2**.
- **US3** is independent and can be completed at any time after Phase 1.

**Execution Order**:
1. Phase 1 (Setup)
2. Phase 2 (US1)
3. Phase 3 (US2)
4. Phase 4 (US3) - Can be done in parallel with Phase 2/3.
5. Phase 5 (Polish)

## Parallel Execution Examples

- **Within stories**:
    - `T012` and `T013` can be worked on in parallel.
- **Across stories**:
    - Tasks for `US3` (T011) can be executed in parallel with tasks for `US1` and `US2`.