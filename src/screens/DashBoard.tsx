/*
 *DashBoard
 *
 *this is main screen of app 
 */
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, View, FlatList, TextInput, Button } from 'react-native';
import Modal from 'react-native-modal';
import Spinner from 'react-native-loading-spinner-overlay';
import Colors from '../constants/Colors';
import DataController from '../controllers/DataController';
import ItemView from '../views/ItemView';
import Message from '../components/Message';
import RestaurantInfo from '../components/RestaurantInfo';

const DashBoard = () => {
    //using usestate hook for setting up the input value of searchbar 
    const [textField, setTextField] = useState('');
    //setting up postal code that we are using to send as query operator to API and on change of state of this variable we are calling useEffect hook to call an API
    const [postalCode, setPostalCode] = useState('');
    //Storing the data from API in this local variable thet we will pas to flatlist to display results
    const [restaurantsData, setRestaurantsData] = useState([]);
    //initial state of loader is false so that we are changing this state on API request according to need
    const [loading, setLoading] = useState(false);
    //using this local state if the restaurant data is empty to display in UI that "NO Restaurant found"
    const [noItemFound, setNoItemFound] = useState(false);
    //setting up  state of varible of errormessage if   the api dissconnect to server or any other error. this is throwback error state variable
    const [errorMessage, setErrorMessage] = useState('');
    //setting up state of varible on clicking of paricular restaurant . this varible we are using 1)open close modal 2) calling component to pass the data to display 
    const [isRestaurantVisible, setRestaurantVisible] = useState(false);
    //array varible to pass data from flatlist item to the modal component 
    const [restModalData, setrestModalData] = useState([]);

    //on state change of postal code this hook call controller component of API to fetch data
    //in this state firstly we  set up initail states and then managing the response of API
    useEffect(() => {
        if (postalCode && postalCode.length > 0) {
            setLoading(true);
            setNoItemFound(false);
            setErrorMessage('');
            DataController.getRestaurants(postalCode)
                .then((response) => {
                    setRestaurantsData(response.Restaurants);
                    if (response.Restaurants && response.Restaurants.length <= 0 || response.message && response.message != "") {

                        setNoItemFound(true);
                    }
                    setLoading(false);
                })
                .catch((error) => {
                    setErrorMessage(error);
                    setLoading(false);
                });
        }
    }, [postalCode]);

    //function to open modal and setting up state varible to call modal component to display data
    const GetRestaurantData = (data) => {
        setrestModalData(data);
        toggleModal();
    }
    const toggleModal = () => {
        setRestaurantVisible(!isRestaurantVisible);
    };
    return (
        <View>
            {isRestaurantVisible ?
                <View style={styles.outerContainer}>
                    <Modal isVisible={isRestaurantVisible}  >
                        <View style={styles.containerRestInfo}>
                            <Button title="Back" onPress={toggleModal} />
                            <RestaurantInfo info={restModalData} />
                        </View>
                    </Modal>
                </View>
                :
                null
            }
            <View style={styles.container}>
                <Spinner
                    visible={loading}
                    textContent={'Fetching Data...'}
                    textStyle={styles.spinnerTextStyle}
                />
            </View>
            <TextInput
                defaultValue={textField}
                style={styles.inputField}
                placeholder="Search Here..."
                testID={'SearchBar'}
                onChangeText={(text) => setTextField(text)}
                returnKeyType="search"
                clearButtonMode="while-editing"
                onSubmitEditing={() => setPostalCode(textField)}
            />
            {errorMessage != '' ? <Message Textcolor="red" >Error While Loading Data</Message> : null}
            {noItemFound ? <Message Textcolor="red" >No Restaurant Found in Your Area</Message> :
                <View>
                    <FlatList
                        data={restaurantsData}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <ItemView restaurant={item} passRestaurantData={GetRestaurantData} />}
                        onEndReachedThreshold={0.5}
                        numColumns={1}
                        scrollEventThrottle={400}
                    />
                </View>
            }
        </View>
    )
};

const styles = StyleSheet.create({
    inputField: {
        backgroundColor: Colors.White,
        borderColor: 'black',
        width: '95%',
        borderWidth: 1,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 30,
        padding: 5,
        fontSize: 15,
        textTransform: "uppercase",
        paddingLeft: 10
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        textAlign: 'center',
        backgroundColor: Colors.Gray,
    },
    spinnerTextStyle: {
        color: '#FFF',
    },
    itemStyle: {
        padding: 10,
    },
    containerRestInfo: {
        flex: 1,
        backgroundColor: Colors.White
    },
    outerContainer: {
        flex: 1
    }
});

export default DashBoard;
