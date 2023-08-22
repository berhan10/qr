import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Home from '@/pages/Home';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name={'Main'}
          component={Home}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// const renderTabIcon = (route: any) => {
//   let TabIcon;

//   switch (route.name) {
//     case 'Add':
//       TabIcon = <Icon.Scan height={30} width={30} />;
//       break;
//     default:
//       TabIcon = <Icon.Scan height={30} width={30} />;
//       break;
//   }

//   return TabIcon;
// };

// const RenderTabNavigation = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({route}) => ({
//         headerShown: false,
//         tabBarStyle: {
//           backgroundColor: '#ffffff',
//           position: 'absolute',
//           left: 20,
//           right: 20,
//           bottom: 20,
//           borderRadius: 10,
//           elevation: 0,
//         },
//         tabBarIcon: ({}) => {
//           return renderTabIcon(route);
//         },
//       })}>
//       <Tab.Screen name={'Scanner'} component={Home} />
//       <Tab.Screen name={'Setting'} component={Home} />
//     </Tab.Navigator>
//   );
// };

export default Navigation;
