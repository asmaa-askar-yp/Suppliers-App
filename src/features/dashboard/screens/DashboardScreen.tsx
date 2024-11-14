import Button from "@/components/ui/Button";
import assetsPaths from "@/constants/assetsPaths";
import DefaultLayout from "@/layouts/DefaultLayout";
import { useRouter } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function DashboardScreen() {
    // ----------------------------------------------------------------------------------------------------
    // MARK: States & Constants
    // ----------------------------------------------------------------------------------------------------
    const router = useRouter();

    // ----------------------------------------------------------------------------------------------------
    // MARK: Styles
    // ----------------------------------------------------------------------------------------------------
    const styles = StyleSheet.create({
        logo: {
            width: 130,
            height: 50,
        },
        card: {
            width: "100%",
            maxWidth: 380,
            height: 550,
        }
    });

    // ----------------------------------------------------------------------------------------------------
    // MARK: Main Component UI
    // ----------------------------------------------------------------------------------------------------
    return (
        <DefaultLayout>
            <Image source={require('../../../assets/logos/logo.png')} resizeMode="contain" style={styles.logo} />

            <Image source={require('../../../assets/backgrounds/on_board_background.png')} resizeMode="contain" style={styles.card} />

            <Button
                title="Continue With Email"
                handlePress={() => router.push("/auth/login")}
            />
        </DefaultLayout>
    );
}