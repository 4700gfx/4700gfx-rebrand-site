// Smooth-scrolls to a section by id. Used by the navbar, footer, and any
// in-page CTA that jumps to another section — kept in one place so every
// caller scrolls the same way instead of re-typing the same three lines.
export const scrollToSection = (sectionId) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};
