import { StyleSheet } from "react-native";

const COLORS = {
    primary: "#3498db",
    text: "#ffffff",
};

const SIZES = {
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
};

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },
    title: {  
        fontSize: 24,
        fontWeight: "bold",
        color: COLORS.text,
        marginBottom: 20,
        textAlign: "center",
    },
    button: {
        backgroundColor: COLORS.primary,
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: SIZES.padding,
        paddingHorizontal: 25,
        borderRadius: SIZES.borderRadius,
        margin: 10,
    },
    buttonText: {
        color: COLORS.text,
        fontSize: SIZES.fontSize,
    },
});
