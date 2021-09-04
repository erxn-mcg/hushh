import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import BackBtn from '../components/backBtn'
import Circles from '../components/medAnim'
import Timer from '../components/timer'

const MeditateScreen = () => {
    return (
        <>
        <View style={styles.container}>
            <Timer />
            <Circles />
            <BackBtn />
        </View>
        </>
    )
}

export default MeditateScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#355C7D',
      },
})