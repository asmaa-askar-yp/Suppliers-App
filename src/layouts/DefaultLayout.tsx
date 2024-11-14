import { SafeAreaView, ScrollView, StyleSheet, View, StyleProp, ViewStyle } from "react-native";

type DefaultLayoutProps = {
    children: React.ReactNode;
    style?: ViewStyle;
};
export default function DefaultLayout({ children, style }: DefaultLayoutProps): JSX.Element {
    // ----------------------------------------------------------------------------------------------------
    // MARK: Styles
    // ----------------------------------------------------------------------------------------------------
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            height: "100%",
            paddingVertical: 10
        },
        content: {
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: 10,
            gap: 16
        }
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <SafeAreaView style={[styles.container, style]}>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View style={styles.content}>
                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}