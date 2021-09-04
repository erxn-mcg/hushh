import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import PlayBtn from '../components/playBtn';
import AboutBtn from '../components/aboutBtn';
import SettingsBtn from '../components/settingsBtn';

const exampleImage = require('../assets/hushh.logo.png')

const HomeScreen = () => {
    return (
        <>
        <View style={styles.container}>
        <View style={styles.abtset}>
            <SettingsBtn />
            <AboutBtn />
        </View>
        <View style={styles.logo}>
            <Image
                source={exampleImage}
                style={{ width: '60%', height: 285 }}
            />
        </View>
        <View style={styles.play}>
            <PlayBtn />
        </View>
        </View>
        </>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#355C7D',
      },
    logo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10%',
        display: 'flex'
    },
    play: {
        alignItems: 'center',
        marginTop: '40%',
        display: 'flex'
    },
    abtset: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 10
    }
})