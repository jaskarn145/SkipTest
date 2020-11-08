/**
 * DataController.
 *  This controller get the data and send to dashboard component after fetching from API .
 *
 */
class DataController {
    getRestaurants = async (postalCode: String) => {
        try {
            const responseApi = await fetch(`https://uk.api.just-eat.io/restaurants/bypostcode/${postalCode}`);
            const responseJson = await responseApi.json();
            return Promise.resolve(responseJson);
        } catch (error) {
            return Promise.reject(error.message);
        }
    };
}

export default new DataController();
