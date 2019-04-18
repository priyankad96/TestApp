import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/Login';
import Register from '../screens/Register';


const AppNavigator = createStackNavigator({
    Login:Login,
    Register:Register,

},

{
    initialRouteName: "Login",
    headerMode:"none"
});
const NavigationContainer = createAppContainer(AppNavigator)
export default NavigationContainer;