import { SafeAreaView, ScrollView, StyleSheet, View, StyleProp, ViewStyle, Image } from "react-native";

type AuthenticationLayoutProps = {
    children: React.ReactNode;
    style?: ViewStyle;
};

export default function AuthenticationLayout({ children, style }: AuthenticationLayoutProps): JSX.Element {
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
        },
        logo: {
            width: 130,
            height: 50,
            marginBottom: 8
        },
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <SafeAreaView style={[styles.container, style]}>
            <ScrollView contentContainerStyle={{ height: '100%' }}>
                <View style={styles.content}>
                    <Image source={require('../../../assets/logos/logo.png')} resizeMode="contain" style={styles.logo} />

                    {children}
                </View>
            </ScrollView>
        </SafeAreaView>

    );
}