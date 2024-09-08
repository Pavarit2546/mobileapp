// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';

/**
 * TabBarIcon component for displaying an icon in the tab bar.
 * 
 * @param {object} props - The props for the component.
 * @param {object} props.style - The style for the icon.
 * @param {string} props.name - The name of the icon from Ionicons.
 */
export function TabBarIcon({ style, ...rest }) {
  return (
    <Ionicons
      size={28}
      style={[{ marginBottom: -3 }, style]}
      {...rest}
    />
  );
}

