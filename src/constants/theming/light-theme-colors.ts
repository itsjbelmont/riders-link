import { PRIMARY_COLOR, WHITE, BLACK } from './palette';

export const lightThemeColors = {
  primary: PRIMARY_COLOR.KEY,
  onPrimary: WHITE,
  primaryContainer: 'rgb(168, 245, 165)',
  onPrimaryContainer: 'rgb(0, 33, 5)',
  secondary: 'rgb(134, 83, 0)',
  onSecondary: WHITE,
  secondaryContainer: 'rgb(255, 221, 184)',
  onSecondaryContainer: 'rgb(42, 23, 0)',
  tertiary: 'rgb(152, 64, 97)',
  onTertiary: WHITE,
  tertiaryContainer: 'rgb(255, 217, 226)',
  onTertiaryContainer: 'rgb(62, 0, 29)',
  error: 'rgb(186, 26, 26)',
  onError: WHITE,
  errorContainer: 'rgb(255, 218, 214)',
  onErrorContainer: 'rgb(65, 0, 2)',
  background: WHITE,
  onBackground: BLACK,
  surface: WHITE,
  onSurface: 'rgb(26, 28, 25)',
  surfaceVariant: 'rgb(222, 229, 217)',
  onSurfaceVariant: 'rgb(66, 73, 64)',
  outline: 'rgb(158, 166, 157)',
  outlineVariant: 'rgb(194, 201, 189)',
  shadow: 'rgb(0, 0, 0)',
  scrim: 'rgb(0, 0, 0)',
  inverseSurface: 'rgb(47, 49, 45)',
  inverseOnSurface: 'rgb(240, 241, 235)',
  inversePrimary: 'rgb(141, 216, 139)',
  elevation: {
    level0: 'transparent',
    level1: 'rgb(241, 246, 236)',
    level2: 'rgb(235, 241, 230)',
    level3: 'rgb(228, 237, 224)',
    level4: 'rgb(226, 236, 222)',
    level5: 'rgb(222, 233, 218)',
  },
  surfaceDisabled: 'rgba(26, 28, 25, 0.12)',
  onSurfaceDisabled: 'rgba(26, 28, 25, 0.38)',
  backdrop: 'rgba(44, 50, 42, 0.4)',
};
