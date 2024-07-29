import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

// Importing icons
import HomeIcon from './Assets/HomeIcon.png';
import OrderIcon from './Assets/OrderIcon.png';
import InboxIcon from './Assets/InboxIcon.png';
import ProfileIcon from './Assets/ProfileIcon.png';
import HomeScreen from './HomeScreen';
import OrderScreen from './OrderScreen';

const Tab = createBottomTabNavigator();

function InboxScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Inbox Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            let icon;
            let style = { width: 24, height: 24, tintColor: focused ? '#673ab7' : '#222' };

            switch (route.name) {
              case 'Home':
                icon = HomeIcon;
                style.height = 40;
                style.width = 35;
                break;
              case 'Orders':
                icon = OrderIcon;
                style.height = 40;
                style.width = 35;
                break;
              case 'Inbox':
                icon = InboxIcon;
                style.height = 40;
                style.width = 35;
                break;
              case 'Profile':
                icon = ProfileIcon;
                style.height = 40;
                style.width = 45; // Adjust width for the Profile icon
                break;
            }
            return (
              <Image
                source={icon}
                style={style}
              />
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 100,
          },
          tabBarActiveTintColor: '#673ab7',
          tabBarInactiveTintColor: '#222',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Orders" component={OrderScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Inbox" component={InboxScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
