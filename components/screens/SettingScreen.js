import React from 'react';
import { View, Text } from 'react-native';

const SettingScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Welcome to the Settings!</Text>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default SettingScreen;