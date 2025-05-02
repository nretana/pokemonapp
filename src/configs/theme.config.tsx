import {
  Anchor,
  Button,
  Loader,
  Modal,
  Pagination,
  Popover,
  createTheme,
} from '@mantine/core';
import buttonClasses from '@/assets/styles/components/button.module.css';
import popoverClasses from '@/assets/styles/components/popover.module.css';
import modalClasses from '@/assets/styles/components/modal.module.css';
import paginationClasses from '@/assets/styles/components/pagination.module.css';
import loaderClasses from '@/assets/styles/components/loader.module.css';


/* mantine core theme */
export const AppTheme = () => {
  const theme = createTheme({
    //primaryColor: 'blue',
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
        classNames: {
          root: buttonClasses.buttonRoot,
          label: buttonClasses.buttonLabel
        },
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
        }
      }),
      Pagination: Pagination.extend({
        classNames: {
          root: paginationClasses.paginationRoot,
          control: paginationClasses.paginationControl
        }
      }),
      Loader: Loader.extend({
        classNames: {
          root: loaderClasses.loaderRoot
        }
      })
    },
  });

  return theme;
};
