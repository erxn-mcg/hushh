import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

function SettingsScreen() {
    return (
        <View style={styles.settings}>
            <View style={styles.quote}>
                <Text>
                    Meditaion is being in tune with our inner universe.
                </Text>
            </View>
        </View>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    settings: {
        backgroundColor: '#355C7D'
    }
})