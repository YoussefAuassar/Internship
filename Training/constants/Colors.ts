/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export const IMAGES = {
  profilePicture: require("../assets/images/profile-picture.png"),
};

export const COLORS = {
  darkGray: "#25292e",
  lightGray: "#6e6e6e", 
  coral: "#FFA384", 
  lightGraySeparator: "#ccc", 
};


export const TEXT = {
  greeting: "Hi John!",
  scans: "50+ Scans",
  ticketNumber: "124",
  viewEntries: "View Entries",
};

