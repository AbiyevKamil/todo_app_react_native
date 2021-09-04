import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Task(props) {
    return (
        <View style={styles.container}>
            <View style={styles.square}></View>
            <Text style={styles.content}>{props.text}</Text>
            <View style={styles.circular}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        flex: 1,
        width: "100%",
        backgroundColor: '#fff',
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10
    },
    content: {
        width: 250
    },
    square: {
        backgroundColor: "#60DAFB",
        marginRight: 20,
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    circular: {
        width: 20,
        height: 20,
        borderRadius: 20,
        borderColor: "#60DAFB",
        borderWidth: 2,
    },
});
