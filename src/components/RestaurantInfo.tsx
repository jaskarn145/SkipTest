/**
 *RestaurantInfo
 *
 *this component is used to display the particular restaurant in modal on click from list
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView
} from 'react-native';
import moment from "moment";
import Colors from '../constants/Colors';

const RestaurantInfo = (props) => {
    const item = props.info;

    return (
        <ScrollView style={styles.container} >
            <View>
                <Image
                    source={{ uri: item.LogoUrl }}
                    style={styles.imageItem}
                    resizeMode={"cover"} />
            </View>
            <View style={styles.containerDesc}>
                <View>
                    <View>
                        <Text style={styles.nameItem}>
                            {item.Name.toUpperCase()}
                            {"  "}
                            {item.IsNew ? <Text style={styles.isNew} >{" New "}</Text> : null}
                        </Text>
                    </View>
                    <View style={styles.containerRating}>
                        <Text style={styles.rating} >{item.RatingAverage}</Text>
                        {item.IsOpenNow ? <Text style={styles.isOpenNow} >Open</Text> : <Text style={styles.iscloseNow} >Close</Text>}
                    </View>
                </View>
                <Text style={styles.cuisines}  >
                    {item.CuisineTypes.map((e) => e.Name).join(', ')}
                </Text>
                <Text style={styles.times}  >
                    Opening Time:{" "}
                    {moment(item.OpeningTimeLocal).format("LT")}
                    {"\n"}
                     Delivery Time:{" "}
                    {moment(item.DeliveryOpeningTimeLocal).format("LT")}
                    {" "}(Eta {item.DeliveryEtaMinutes.RangeLower}-{item.DeliveryEtaMinutes.RangeUpper} Min)
                </Text>
                <Text style={styles.deals}>
                    {item.Deals.length > 0 ? ' Popular Deals:' + item.Deals.map((e) => e.Description).join(', ') : ' No Deal on This reastaurant'}
                    { }
                </Text>
            </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        flex: 1,
        padding: 20,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#f5f5f5'
    },
    imageItem: {
        width: '100%',
        height: 250,
        overflow: "hidden",
        borderWidth: 1,
        borderColor: "black",
        marginBottom: 10
    },
    containerDesc: {
        paddingLeft: 10,
    },
    nameItem: {
        fontSize: 17,
        fontWeight: '700',
        width: '90%'
    },
    containerRating: {
        flexDirection: 'row',
        justifyContent: 'space-between'
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
    isOpenNow: {
        width: 57,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'green',
        justifyContent: 'center',
        color: 'white',
        paddingHorizontal: 10,
        padding: 5,
        marginVertical: 7
    },
    iscloseNow: {
        width: 57,
        height: 30,
        borderRadius: 15,
        backgroundColor: 'red',
        justifyContent: 'center',
        color: 'white',
        padding: 5,
        paddingHorizontal: 10,
        marginVertical: 7
    },
    isNew: {
        width: 57,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#cfc734',
        justifyContent: 'center',
        color: 'white',
        paddingHorizontal: 10,
        padding: 5,
        marginVertical: 7,
        marginLeft: 15
    },
    times: {
        marginVertical: 10,
        fontSize: 15,
        fontWeight: 'bold',
        lineHeight: 25
    },
    deals: {
        marginVertical: 10,
        fontSize: 15,
        fontStyle: 'italic',
        backgroundColor: Colors.Primary,
        textAlign: 'center'
    }
});
export default RestaurantInfo;

