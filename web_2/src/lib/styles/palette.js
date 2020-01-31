import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';
const palette = {
  gray: [
    '#f8f9fa',
    '#f1f3f5',
    '#e9ecef',
    '#dee2e6',
    '#ced4da',
    '#adb5bd',
    '#868e96',
    '#495057',
    '#343a40',
    '#212529',
  ],
  cyan: [
    '#e3fafc',
    '#c5f6fa',
    '#99e9f2',
    '#66d9e8',
    '#3bc9db',
    '#22b8cf',
    '#15aabf',
    '#1098ad',
    '#0c8599',
    '#0b7285',
  ],
  black,
  white,

  primary: {
    contrastText: white,
    dark: colors.indigo[900],
    main: colors.indigo[500],
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue['A400'],
    light: colors.blue['A400']
  },
  success: {
    contrastText: white,
    dark: colors.green[900],
    main: colors.green[600],
    light: colors.green[400]
  },
  info: {
    contrastText: white,
    dark: colors.blue[900],
    main: colors.blue[600],
    light: colors.blue[400]
  },
  warning: {
    contrastText: white,
    dark: colors.orange[900],
    main: colors.orange[600],
    light: colors.orange[400]
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: colors.blueGrey[900],
    secondary: colors.blueGrey[600],
    link: colors.blue[600]
  },
  background: {
    default: '#F4F6F8',
    paper: white
  },
  icon: colors.blueGrey[600],
  divider: colors.grey[200]
}


export default palette; 

// import { colors } from '@material-ui/core';

// const white = '#FFFFFF';
// const black = '#000000';
// const gray = [
//     '#f8f9fa',
//     '#f1f3f5',
//     '#e9ecef',
//     '#dee2e6',
//     '#ced4da',
//     '#adb5bd',
//     '#868e96',
//     '#495057',
//     '#343a40',
//     '#212529',
//   ];
// const cyan = [
//     '#e3fafc',
//     '#c5f6fa',
//     '#99e9f2',
//     '#66d9e8',
//     '#3bc9db',
//     '#22b8cf',
//     '#15aabf',
//     '#1098ad',
//     '#0c8599',
//     '#0b7285',
//   ];
// export default {
//   gray,
//   cyan,
//   black,
//   white,
//   primary: {
//     contrastText: white,
//     dark: colors.indigo[900],
//     main: colors.indigo[500],
//     light: colors.indigo[100]
//   },
//   secondary: {
//     contrastText: white,
//     dark: colors.blue[900],
//     main: colors.blue['A400'],
//     light: colors.blue['A400']
//   },
//   success: {
//     contrastText: white,
//     dark: colors.green[900],
//     main: colors.green[600],
//     light: colors.green[400]
//   },
//   info: {
//     contrastText: white,
//     dark: colors.blue[900],
//     main: colors.blue[600],
//     light: colors.blue[400]
//   },
//   warning: {
//     contrastText: white,
//     dark: colors.orange[900],
//     main: colors.orange[600],
//     light: colors.orange[400]
//   },
//   error: {
//     contrastText: white,
//     dark: colors.red[900],
//     main: colors.red[600],
//     light: colors.red[400]
//   },
//   text: {
//     primary: colors.blueGrey[900],
//     secondary: colors.blueGrey[600],
//     link: colors.blue[600]
//   },
//   background: {
//     default: '#F4F6F8',
//     paper: white
//   },
//   icon: colors.blueGrey[600],
//   divider: colors.grey[200]
// };


