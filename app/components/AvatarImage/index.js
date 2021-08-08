import * as React from 'react';
import {
    Image,
    ImageSourcePropType,
    StyleSheet,
    View,
    ViewStyle,
    StyleProp,
} from 'react-native';
import { appColors } from '../../utils/appColors';

const defaultSize = 64;

/**
 * Avatars can be used to represent people in a graphical way.
 *
 * <div class="screenshots">
 *   <figure>
 *     <img class="medium" src="screenshots/avatar-image.png" />
 *   </figure>
 * </div>
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Avatar } from 'react-native-paper';
 *
 * const MyComponent = () => (
 *   <Avatar.Image size={24} source={require('../assets/avatar.png')} />
 * );
 * export default MyComponent
 * ```
 */
const AvatarImage = ({
    size = defaultSize,
    source,
    style,
    ...rest
}) => {

    const { backgroundColor = appColors.primary } = StyleSheet.flatten(style) || {};

    return (
        <View
            style={[
                {
                    width: size,
                    height: size,
                    borderRadius: size / 2,
                    backgroundColor,
                },
                style,
            ]}
            {...rest}
        >
            {typeof source === 'function' && source({ size })}
            {typeof source !== 'function' && (
                <Image
                    source={source}
                    style={{ width: size, height: size, borderRadius: size / 2 }}
                />
            )}
        </View>
    );
};

AvatarImage.displayName = 'Avatar.Image';

export default AvatarImage