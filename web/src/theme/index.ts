import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  colors: {
    'unknown': [
      "#e0fbff",
      "#cbf3ff",
      "#9ae3ff",
      "#64d4ff",
      "#3cc6fe",
      "#23befe",
      "#09baff",
      "#00a3e4",
      "#0092cd",
      "#007eb5"
    ],
    'dark': [
      "#FFFFFF",
      "#c0c0c0",
      "#FFFFFF",
      "#808080",
      "#606060",
      "#404040",
      "#303030",
      "#202020",
      "#101010",
      "#000000"
    ],
  },
  colorScheme: 'dark',
  fontFamily: 'Nunito, sans-serif',
  shadows: { sm: '1px 1px 3px rgba(0, 0, 0, 0.5)' },
  components: {
    Button: {
      styles: {
        root: {
          border: 'none',
        },
      },
    },
    Modal: {
      styles: {
        root: {
          opacity: '86%',
          overlayColor: '#000000'
        },
        modal: {
          background: '#000000',
        },
        
      },
    },
    TextInput: {
      styles: {
        input: {
          background: '#000000',
        },
      },
    },
    TimeInput: {
      styles: {
        input: {
          background: '#000000',
        },
      },
    },
    Select: {
      styles: {
        input: {
          background: '#000000',
        },
      },
    },
    MultiSelect: {
      styles: {
        input: {
          background: '#000000',
        },
      },
    },
    NumberInput: {
      styles: {
        input: {
          background: '#000000',
        },
      },
    },
    Checkbox: {
      styles: {
        input: {
          background: '#000000',
        },
      },
    },
    PasswordInput: {
      styles: {
        input: {
          background: '#000000',
        },
      },
    },
  },
};
