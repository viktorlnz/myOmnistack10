import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
    createStackNavigator({
        Main:{
            screen: Main,
            navigationOptions: {
                title: 'Radar dev'
            }
        },
        Profile:{
            screen: Profile,
            navigationOptions: {
                title: 'Perfil no Github'
            }
        },
    },{
        defaultNavigationOptions: {
            headerTintColor: '#000',
            headerBackTitleVisible: false,
            headerStyle: {
                backgroundColor: '#fd3',
            }
        }
    })
);

export default Routes;