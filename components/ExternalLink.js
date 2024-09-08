import { Link } from 'expo-router';
import { openBrowserAsync } from 'expo-web-browser';
import React from 'react';
import { Platform } from 'react-native';

/**
 * ExternalLink component that handles both web and native platforms.
 * 
 * @param {object} props - The props for the component.
 * @param {string} props.href - The URL to link to.
 */
export function ExternalLink({ href, ...rest }) {
  return (
    <Link
      target="_blank"
      {...rest}
      href={href}
      onPress={async (event) => {
        if (Platform.OS !== 'web') {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
}
