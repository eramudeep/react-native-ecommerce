import * as React from 'react';
import color from 'color';
import { StyleSheet, View, } from 'react-native';
import { appColors } from '../utils/appColors';



/**
 * A divider is a thin, lightweight separator that groups content in lists and page layouts.
 *
 * <div class="screenshots">
 *  <figure>
 *    <img class="medium" src="screenshots/divider.png" />
 *  </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import { Divider, Text } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <View>
 *     <Text>Lemon</Text>
 *     <Divider />
 *     <Text>Mango</Text>
 *     <Divider />
 *   </View>
 * );
 *
 * export default MyComponent;
 * ```
 */
const Divider = ({ inset, style, isDark,...rest }) => {
  return (
    <View
      {...rest}
      style={[
        isDark ? styles.dark : styles.light,
        inset && styles.inset,
        style,
      ]}
    />
  );
};

const styles = StyleSheet.create({
  light: {
    backgroundColor: color(appColors.white).alpha(0.2).rgb().string(),
    height: StyleSheet.hairlineWidth,
  },
  dark: {
    backgroundColor: color(appColors.black).alpha(0.2).rgb().string(),
    height: StyleSheet.hairlineWidth,
  },
  inset: {
    marginLeft: 72,
  },
});

export default Divider