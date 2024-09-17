import { View, Text, StyleSheet } from "react-native";

export default function Experience() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Halaman Natan Cool</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282c34',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#61dafb',
        marginBottom: 20,
    },
});
