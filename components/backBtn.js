import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const BackBtn = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            style={styles.backBtn}
        >
            <Text style={{ fontSize: 20, marginTop: 0, color: 'white' }}>End Session</Text>
        </TouchableOpacity>
    )
}

export default BackBtn

const styles = StyleSheet.create({
    backBtn: {
        width: 180,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 30,
        backgroundColor: '#c06c84',
        alignSelf: 'center',
        marginBottom: 90
    }
})