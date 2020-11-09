/*
 *Header 
 */
import React from 'react';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import Colors from '../constants/Colors';

const Header: React.FC = () => (
    <View style={styles.logo}>
        <Text style={styles.textlogo}>CODE TEST</Text>
    </View>
)

const styles = StyleSheet.create({
    logo: {
        backgroundColor: Colors.Primary,
        width: '100%',
        padding: 5,
        fontSize: 10,
        justifyContent: 'center'
    },
    textlogo: {
        fontSize: 30,
        fontWeight: "bold",
        color: Colors.White,
        width: '100%',
        textAlign: 'center',
        paddingVertical: 10
    }
});

export default Header;