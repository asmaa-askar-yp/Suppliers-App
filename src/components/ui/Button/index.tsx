import { StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react';

type ButtonProps = {
    title: string;
    handlePress: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
    style?: ViewStyle;
}

export default function Button({ title, handlePress, isLoading, isDisabled, style }: ButtonProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: Styles
    // ----------------------------------------------------------------------------------------------------
    const styles = StyleSheet.create({
        button: {
            backgroundColor: "#fff",
            width: "100%",
            padding: 16,
            borderRadius: 8,
            alignItems: "center",
            justifyContent: "center"
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <TouchableOpacity
            style={[styles.button, style]}
            disabled={isLoading || isDisabled}
            onPress={handlePress}
        >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
}