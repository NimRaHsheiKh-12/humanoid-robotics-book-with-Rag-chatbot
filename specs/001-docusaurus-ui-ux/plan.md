# Implementation Plan: Docusaurus UI/UX Redesign

**Feature Branch**: `001-docusaurus-ui-ux`
**Created**: 2025-12-15
**Status**: Draft

## 1. Technical Context

This plan outlines the steps to implement a significant UI/UX redesign for the Docusaurus-based "Humanoid Robotics Book" website. The redesign focuses on creating a futuristic, "product launch" feel for the landing page, integrating a floating chatbot widget, and adding multilingual support.

-   **Tech Stack**: Docusaurus, React, TypeScript, CSS Modules, Python (for the existing chatbot backend).
-   **Key Files**: `src/pages/index.tsx`, `src/css/custom.css`, `docusaurus.config.ts`, `src/components/*`.
-   **Dependencies**: This work depends on the existing Docusaurus project structure and the Python backend for the chatbot.

## 2. Constitution Check

The proposed changes are fully aligned with the **Humanoid Robotics Book Website UI Constitution**.

-   **UI/UX Excellence**: The plan prioritizes a visually stunning, modern, and futuristic UI with a smooth, intuitive UX, directly addressing this principle.
-   **Innovative Design**: The "product launch" concept for the landing page and the unique chat widget design directly fulfill the requirement for a non-standard, memorable design.
-   **Seamless Chatbot Integration**: The plan specifies a floating widget that overlays content, precisely matching the constitution's requirements.
-   **Internationalization**: A dedicated phase for implementing multilingual support for English and Urdu is included.
-   **Code Quality**: The plan advocates for creating well-structured React components and following Docusaurus best practices.

## 3. Implementation Phases

The implementation is broken down into five phases to ensure a structured and prioritized rollout, focusing on visual impact first.

---

### **Phase 1: Foundational UI & Hero Section Redesign**

**Goal**: Establish the new visual identity and deliver the most impactful change—the redesigned landing page hero.
**Complexity**: Medium

| Task ID | Description                                                                                                   | Files to Edit/Create                               | Dependencies |
| :------ | :------------------------------------------------------------------------------------------------------------ | :------------------------------------------------- | :----------- |
| T1.1    | **Define New Visual Identity**: Implement the new color palette, typography, and spacing in the global CSS.     | `src/css/custom.css`                               | -            |
| T1.2    | **Create Hero Assets**: Source or create the futuristic humanoid robot image and any other required graphics.   | `static/img/`                                      | -            |
| T1.3    | **Build `HeroSection` Component**: Create a new, responsive React component for the redesigned hero.            | `src/components/HeroSection/index.tsx`, `styles.module.css` | T1.1, T1.2   |
| T1.4    | **Integrate New Hero**: Replace the existing hero on the landing page with the new `HeroSection` component.     | `src/pages/index.tsx`                              | T1.3         |
| T1.5    | **Update Hero CTA**: Ensure the main Call-To-Action button in the new hero navigates to the first book chapter. | `src/components/HeroSection/index.tsx`             | T1.3         |

---

### **Phase 2: Chatbot Widget Integration**

**Goal**: Implement the floating chatbot on the landing page.
**Complexity**: High

| Task ID | Description                                                                                                     | Files to Edit/Create                                       | Dependencies |
| :------ | :-------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------- | :----------- |
| T2.1    | **Build `FloatingIcon` Component**: Create the clickable robot icon that is fixed to the bottom-right of the page. | `src/components/Chatbot/FloatingIcon.tsx`                  | -            |
| T2.2    | **Build `Popup` Component**: Create the chat window that opens on icon click, including the header and close button. | `src/components/Chatbot/Popup.tsx`                         | -            |
| T2.3    | **Implement Chatbot State**: Manage the open/closed state of the chatbot popup, including smooth animations.        | `src/components/Chatbot/index.tsx`                         | T2.1, T2.2   |
| T2.4    | **Conditional Rendering**: Ensure the chatbot component only renders on the landing page (`/`).                   | `src/theme/Root.tsx` or `src/pages/index.tsx`              | T2.3         |
| T2.5    | **API Integration**: Connect the chat popup to the Python backend API to send and receive messages.               | `src/components/Chatbot/Popup.tsx`                         | -            |
| T2.6    | **Remove Old Chatbot**: Ensure the previous chatbot implementation is completely removed from all other pages.    | `docusaurus.config.ts`, `sidebars.ts` (or relevant files) | -            |

---

### **Phase 3: Multilingual Support**

**Goal**: Enable translation for key UI elements.
**Complexity**: Medium

| Task ID | Description                                                                                               | Files to Edit/Create                                    | Dependencies |
| :------ | :-------------------------------------------------------------------------------------------------------- | :------------------------------------------------------ | :----------- |
| T3.1    | **Configure Docusaurus i18n**: Set up `docusaurus.config.ts` for English (`en`) and Urdu (`ur`).             | `docusaurus.config.ts`                                  | -            |
| T3.2    | **Extract Strings**: Refactor hardcoded text in the Hero and Chatbot components to use the `useTranslation` hook. | `src/components/HeroSection/index.tsx`, `src/components/Chatbot/*` | T1.3, T2.3 |
| T3.3    | **Create Translation Files**: Create JSON files with English and Urdu translations for all extracted strings. | `i18n/en/...`, `i18n/ur/...`                              | T3.2         |
| T3.4    | **Implement Language Toggle**: Add a UI component to switch between languages, likely in the Navbar.       | `src/theme/Navbar/index.tsx`                            | T3.1         |

---

### **Phase 4: Polish and Validation**

**Goal**: Ensure high quality, consistency, and a production-ready result.
**Complexity**: Medium

| Task ID | Description                                                                                             | Files to Edit/Create | Dependencies        |
| :------ | :------------------------------------------------------------------------------------------------------ | :------------------- | :------------------ |
| T4.1    | **Responsiveness Testing**: Perform thorough testing of all new components on various screen sizes.         | -                    | Phase 1, 2          |
| T4.2    | **Cross-Browser-Testing**: Verify visual consistency and functionality on Chrome, Firefox, and Safari.    | -                    | Phase 1, 2, 3       |
| T4.3    | **Performance Review**: Analyze the performance impact of new images and components and optimize as needed. | -                    | Phase 1, 2          |
| T4.4    | **Code Cleanup**: Refactor and document the new components to ensure maintainability.                     | All new files        | Phase 1, 2, 3       |

## 4. Architectural Decisions

-   **Chatbot Implementation**: A custom React component-based chatbot will be built for the frontend to allow for maximum design control, as specified in the constitution. It will connect to the existing Python backend.
-   **Internationalization (i18n)**: Docusaurus's built-in i18n system will be used as it is the standard and most integrated solution.

📋 **Architectural decision detected**: A custom React-based chatbot UI will be built instead of using a third-party widget library. Document reasoning and tradeoffs? Run `/sp.adr "Custom Chatbot UI Component"`

📋 **Architectural decision detected**: Docusaurus's native i18n feature will be used for multilingual support. Document reasoning and tradeoffs? Run `/sp.adr "Docusaurus Native i18n for Translations"`
