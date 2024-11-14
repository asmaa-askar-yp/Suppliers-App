import { StyleSheet, Text, View, TextInput as RNTextInput, KeyboardTypeOptions, TextStyle, StyleProp, ViewStyle } from 'react-native'
import React, { useState } from 'react';

type TextInputProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    type?: KeyboardTypeOptions;
    placeholder?: string;
    style?: ViewStyle;
    inputStyle?: StyleProp<TextStyle>;
}

export default function TextInput({
    label,
    value,
    onChange,
    type,
    placeholder,
    style,
    inputStyle
}: TextInputProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // ----------------------------------------------------------------------------------------------------
    // MARK: Styles
    // ----------------------------------------------------------------------------------------------------
    const styles = StyleSheet.create({
        container: {
            width: '100%',
            height: 58,
            paddingHorizontal: 16,
            backgroundColor: '#1C1C1E',
            borderRadius: 16,
            borderWidth: 1,
            borderColor: '#2C2C2E',
            flexDirection: 'row',
            alignItems: 'center',
        },
        focused: {
            borderColor: '#E2E8F0',
        },
        label: {
            fontSize: 16,
            color: '#F3F4F6',
            fontFamily: 'Poppins-Medium',
        },
        textInput: {
            flex: 1,
            color: '#FFFFFF',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16,
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <View style={[{ gap: "8" }, style]}>
            <Text style={styles.label}>{label}</Text>

            <View style={[
                styles.container,
                isFocused && styles.focused,
            ]}>
                <RNTextInput
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChange}
                    style={[styles.textInput, inputStyle]}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    secureTextEntry={label === "Password" && !showPassword}
                />

                {/* {label === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            source={}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )} */}
            </View>
        </View>
    )
}