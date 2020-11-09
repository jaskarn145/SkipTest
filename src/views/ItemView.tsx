/*
 *ItemView
 *
 *this component is used to display the all restaurants in flatlist
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

const ItemView: any = (props) => {
    const item = props.restaurant;

    return (
        <TouchableOpacity activeOpacity={0.8} style={styles.container} onPress={props.passRestaurantData.bind(this, item)} >
            <View style={styles.imageItem} >
                <Image
                    source={{ uri: item.LogoUrl }}
                    style={{ height: 100, width: 100 }}
                    resizeMode={"cover"} />
            </View>
            <View style={styles.containerDesc}>
                <View>
                    <Text style={styles.nameItem}>
                        {item.Name.toUpperCase()}
                        {"  "}
                        {item.IsNew ? <Text style={styles.IsNew} >{" New "}</Text> : null}
                    </Text>
                    <Text style={styles.rating} >{item.RatingAverage}</Text>
                </View>
                <Text style={styles.cuisines}  >
                    {item.CuisineTypes.map((e) => e.Name).join(', ')}
                </Text>
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        margin: 10,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#f5f5f5'
    },
    imageItem: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        overflow: "hidden",
        borderWidth: 3,
        borderColor: "black"
    },
    containerDesc: {
        paddingLeft: 10,
    },
    nameItem: {
        fontSize: 15,
        fontWeight: '700',
        width: '90%'
    },
    rating: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: 'green',
        justifyContent: 'center',
        color: 'white',
        padding: 5,
        marginVertical: 7
    },
    cuisines: {
        fontStyle: 'italic'
    },
    IsNew: {
        width: 57,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#cfc734',
        justifyContent: 'center',
        color: 'white',
        paddingHorizontal: 10,
        padding: 5,
        marginVertical: 7
    }
});

export default ItemView;
