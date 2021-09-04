import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const SettingsBtn = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={styles.settingsBtn}
        >
            <Icon name="cogs" size={40} color="#355C7D" style={{ marginLeft: -2 }}/>
        </TouchableOpacity>
    )
}

export default SettingsBtn

const styles = StyleSheet.create({
    settingsBtn: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 100,
        backgroundColor: '#F8B195',
        marginBottom: 15,
        marginTop: 5
    }
})