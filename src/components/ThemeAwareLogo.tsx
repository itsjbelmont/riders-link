import React from "react";
import { Image, ImageStyle, useColorScheme } from "react-native";

export default function ThemeAwareLogo({ style }: { style?: ImageStyle }) {
  const systemColorScheme = useColorScheme();

  const lightLogo = require("@/../assets/images/logos/light-theme/RidersLinkLogo.png");
  const darkLogo = require("@/../assets/images/logos/dark-theme/RidersLinkLogo.png");

  const imagePath = systemColorScheme === "dark" ? darkLogo : lightLogo;

  return <Image source={imagePath} style={style} />;
}
