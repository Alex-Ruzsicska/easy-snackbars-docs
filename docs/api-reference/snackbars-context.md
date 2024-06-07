---
sidebar_position: 1
---

# SnackbarContextProps

This is where all the default settings of your snackbars are done, in the root of the provider as props.

| Prop              | Description                                                 | Values                                                      |
| ----------------- | ----------------------------------------------------------- | ----------------------------------------------------------- |
| exhibitionOptions | Default configurations related to the snackbars exhibition  | [ExhibitionManagerOptions](./exhibition-manager-options.md) |
| position          | How the snackbars'container is positioned on the screen     | ContainerPosition                                           |
| sx                | Custom styles                                               | object(container: CSSProperties)                            |
| customModes       | Custom snackbar props for a mode (like success, error, etc) | object("new-mode": props)                                   |

## ContainerPosition

Where the snackbars'container is located on the screen

| Prop       | Description                                               | Values                      | Platform |
| ---------- | --------------------------------------------------------- | --------------------------- | -------- |
| vertical   | Where the snackbars' container is positioned vertically   | 'bottom' or 'top'           |
| horizontal | Where the snackbars' container is positioned horizontally | 'left', 'center' or 'right' | web only |
| margin     | The snackbars' container margin                           | number                      |
