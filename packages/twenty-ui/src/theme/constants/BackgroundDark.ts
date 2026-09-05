import * as RadixColors from '@radix-ui/colors';

import { COLOR_DARK } from '@ui/theme/constants/ColorsDark';
import { TRANSPARENT_COLORS_DARK } from './TransparentColorsDark';

// DEJOIY navy canvas (dark theme) — follows the official brand gradient
// #000814 -> #001f3f -> #001a33 used across the Dejoiy design system.
const NAVY_DARK = {
  navy0: '#000814',
  navy1: '#081226',
  navy2: '#0C1A33',
  navy3: '#102141',
  navy4: '#16294C',
  navy5: '#1D3158',
};

export const BACKGROUND_DARK = {
  noisy: 'var(--t-background-noisy)',
  primary: NAVY_DARK.navy1,
  secondary: NAVY_DARK.navy2,
  tertiary: NAVY_DARK.navy4,
  quaternary: NAVY_DARK.navy5,
  invertedPrimary: '#F2F6FD',
  invertedSecondary: '#C9D6EA',
  danger: COLOR_DARK.red3,
  transparent: {
    primary: RadixColors.blackP3A.blackA7,
    secondary: RadixColors.blackP3A.blackA6,
    strong: TRANSPARENT_COLORS_DARK.gray7,
    medium: TRANSPARENT_COLORS_DARK.gray5,
    light: TRANSPARENT_COLORS_DARK.gray2,
    lighter: TRANSPARENT_COLORS_DARK.gray1,
    danger: TRANSPARENT_COLORS_DARK.red3,
    blue: TRANSPARENT_COLORS_DARK.blue4,
    orange: TRANSPARENT_COLORS_DARK.orange4,
    success: TRANSPARENT_COLORS_DARK.green4,
  },
  overlayPrimary: '#000000b8',
  overlaySecondary: '#0000005c',
  overlayTertiary: '#0000005c',
  radialGradient: `radial-gradient(50% 62.62% at 50% 0%, ${NAVY_DARK.navy4} 0%, ${NAVY_DARK.navy1} 100%)`,
  radialGradientHover: `radial-gradient(76.32% 95.59% at 50% 0%, ${NAVY_DARK.navy5} 0%, ${NAVY_DARK.navy2} 100%)`,
  primaryInverted: '#F2F6FD',
  primaryInvertedHover: '#D8E2F2',
};
