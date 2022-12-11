import { StyleSheet } from "react-native";
import { theme } from "../../themes";

export const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: theme.colors.primary
    },
    title: {
        fontSize: 22,
        color: "#fff",
        textAlign: "center"
    },
    button: {
        marginVertical: 10,
        backgroundColor: "#ccc",
        color: "#fff"
    }
})