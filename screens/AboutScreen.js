import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet, Touchable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

function AboutScreen() {

    const navigation = useNavigation();

    return (
        <View style={styles.about}>
            <TouchableOpacity style={styles.back}  onPress={() => navigation.navigate('Home')}>
                <Icon name="arrow-left" size={39} color="#355C7D" style={{ marginLeft: 0 }}/>
            </TouchableOpacity>
            <View style={styles.quote}>
                <Text style={styles.text}>
                    Meditation is being in tune with our inner universe.
                </Text>
            </View>
            <Text style={styles.text2}>
                Here are some of the benefits of meditation:
            </Text>
            <View style={styles.ben}>
                <Text style={styles.text3}>
                    It reduces mental and physical stress, amd controls anxiety
                </Text>
            </View>
            <View style={styles.ben1}>
                <Text style={styles.text3}>
                    It helps you develop a stronger understanding of yourself
                </Text>
            </View>
            <View style={styles.ben2}>
                <Text style={styles.text3}>
                    You can do it absolutely anywhere! Especially with hushh
                </Text>
            </View>
        </View>
    )
}

export default AboutScreen

const styles = StyleSheet.create({
    about: {
        backgroundColor: '#355C7D',
        height: '100%'
    },
    text: {
        textAlign: 'center',
        fontSize: 25,
        color: '#355C7D',
        marginTop: 20,
        fontWeight: '700'
    },
    text2: {
        textAlign: 'center',
        fontSize: 28,
        color: '#F67280',
        marginTop: 50,
        fontWeight: '700'
    },
    text3: {
        textAlign: 'center',
        fontSize: 18,
        color: '#355C7D',
        marginTop: 20,
        fontWeight: '700'
    },
    quote: {
        marginTop: 50,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: 130,
        width: 300,
        textAlign: 'center',
        backgroundColor: '#F8B195',
        borderRadius: 30
    },
    back: {
        padding: 15,
        borderRadius: 100,
        backgroundColor: '#6c5b7b',
        width: 70,
        height: 70,
        marginTop: 50,
        marginLeft: 10
    },
    ben: {
        height: 80,
        width: '80%',
        backgroundColor: '#F67280',
        marginTop: 40,
        marginLeft: 10,
        borderRadius: 20
    },
    ben1: {
        height: 80,
        width: '80%',
        backgroundColor: '#C06C84',
        marginTop: 30,
        marginLeft: 'auto',
        marginRight: 10,
        borderRadius: 20
    },
    ben2: {
        height: 80,
        width: '80%',
        backgroundColor: '#6C5B7B',
        marginTop: 30,
        marginLeft: 10,
        borderRadius: 20
    }
})