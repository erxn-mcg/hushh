import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const AboutBtn = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={styles.aboutBtn}
        >
            <Icon name="question" size={40} color="#355C7D" style={{ marginLeft: 0 }}/>
        </TouchableOpacity>
    )
}

export default AboutBtn

const styles = StyleSheet.create({
    aboutBtn: {
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 100,
        backgroundColor: '#6c5b7b'
    }
})