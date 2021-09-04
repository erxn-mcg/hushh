import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const PlayBtn = () => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('Meditate')}
            style={styles.playBtn}
        >
            <Icon name="play" size={50} color="#355C7D" style={{ marginLeft: 10 }}/>
        </TouchableOpacity>
    )
}

export default PlayBtn

const styles = StyleSheet.create({
    playBtn: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 100,
        backgroundColor: '#F67280'
    }
})