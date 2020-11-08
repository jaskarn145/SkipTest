/*
 *Message
 *
 *this component is used to display message according to user requirement. this is accesable from parent component.
 *we can pass message and error msg color to display success and error message both
 */
import React from 'react';
import {
    StyleSheet,
    Text,

} from 'react-native';

const Message = (props) => {
    return (
        <Text style={[styles.NoDataFound, { color: props.Textcolor }]}>{props.children}</Text>
    )
};

const styles = StyleSheet.create({
    NoDataFound: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: '800',
        width: '90%',
        marginHorizontal: 10,
        textTransform: 'capitalize'
    }
});
export default Message;