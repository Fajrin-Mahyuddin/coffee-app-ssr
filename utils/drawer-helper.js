const toggleSidebar = (sidebar, content) => {
  sidebar && sidebar.current.classList.toggle('open');
  content && content.current.classList.toggle('dark');
};

const resetToggle = (sidebar, content) => {
  sidebar && sidebar.current.classList.remove('open');
  content && content.current.classList.remove('dark');
};

const toggleAction = (elementToggle, content) => {
  elementToggle && elementToggle.current.classList.toggle('open');
  content && content.current.classList.toggle('dark');
};

export { toggleSidebar, resetToggle, toggleAction };
