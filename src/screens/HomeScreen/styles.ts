import { StyleSheet } from "react-native";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        backgroundColor: theme.colors.primary
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        color: "#fff"
    }
});