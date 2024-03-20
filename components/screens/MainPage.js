import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();



function MainPage() {
  return (
    <div>
    

    {/* BottomTabNavigator */}
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="DashBoard" component={DashBoard} />
        <Tab.Screen name="Home" component={MainPage} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>

    </div>
  )
}

export default MainPage