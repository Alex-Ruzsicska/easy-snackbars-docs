---
sidebar_position: 2
---

# ExhibitionManagerOptions

Settings related to the exhibition service: timeout, dimensions, snack component, etc.

| Prop          | Description                                                | Values                       |
| ------------- | ---------------------------------------------------------- | ---------------------------- |
| timeout       | How long the snack stays on the screen                     | number (ms)                  |
| dimensions    | The dimensions of the snacks and the list that wrapps them | ExhibitionDimensions         |
| ItemComponent | The Snackbar component to be used                          | (props: any) => ReactElement |
| isWeb         | Are you rendering on a web app?                            | boolean                      |
| maxSnackbars  | Max snackbars to render at the same time                   | number                       |

## ExhibitionDimensions

| Prop | Description                | Values                                                |
| ---- | -------------------------- | ----------------------------------------------------- |
| item | Snackbars dimensions       | object(height: number)                                |
| list | Snackbar's list dimensions | object(gap: number, width: number, maxHeight: number) |
