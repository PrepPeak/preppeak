export default {
  parts: ['dialog, dialogContainer'],
  variants: {
    alwaysOpen: {
      dialog: {
        pointerEvents: 'auto',
      },
      dialogContainer: {
        pointerEvents: 'none',
        zIndex: 1299,
      },
    },
  },
};
