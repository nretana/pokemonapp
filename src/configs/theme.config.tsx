import {
  Anchor,
  Button,
  Modal,
  Popover,
  createTheme,
} from '@mantine/core';
import buttonClasses from '@/assets/styles/components/button.module.css';
import popoverClasses from '@/assets/styles/components/popover.module.css';
import modalClasses from '@/assets/styles/components/modal.module.css';


/* mantine core theme */
export const AppTheme = () => {
  const theme = createTheme({
    primaryColor: 'blue',
    defaultRadius: '0.75rem',
    breakpoints: {
      xs: '640px',
      sm: '768px',
      md: '1024px',
      lg: '1280px',
      xl: '1536px',
    },
    components: {
      Anchor: Anchor.extend({
        defaultProps: {
          fz: 'inherit',
        },
      }),
      Button: Button.extend({
        classNames: buttonClasses,
      }),
      Popover: Popover.extend({
        classNames: {
          dropdown: popoverClasses.popoverDropdown,
          arrow: popoverClasses.popoverArrow,
        },
      }), 
      Modal: Modal.extend({
        classNames: {
          root: modalClasses.modalRoot,
          header: modalClasses.modalHeader,
          body: modalClasses.modalBody
        },
      })
    },
  });

  return theme;
};
