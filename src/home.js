import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

export default function ScreenA({ navigation }) {

    const onPressHandler1 = () => {
        navigation.navigate('AR');
    }
    const onPressHandler2 = () => {
        navigation.navigate('VR');
    }

    return (
        <View style={styles.body}>
            <Pressable
                
                onPress={onPressHandler1}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    View in AR
                </Text>
            </Pressable>
            <View style={styles.space} />
            <Pressable
                onPress={onPressHandler2}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    View in VR
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    },
    space: {
        width: 20,
        height: 20,
    }
})