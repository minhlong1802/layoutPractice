import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

// Importing icons
import SearchIcon from './SearchIcon.png';
import IconLeft from './IconLeft.png';
import Longdz from './Longdz.jpg';
import LocationIcon from './LocationIcon.png';
import BellIcon from './BellIcon.png';
import PizzaIcon from './PizzaIcon.png';
import BurgerIcon from './BurgerIcon.png';
import DrinkIcon from './DrinkIcon.png';
import RiceIcon from './RiceIcon.png';

export default function HomeScreen() {
  const [selectedButton, setSelectedButton] = useState('Pizza');

  const buttons = [
    { name: 'Pizza', icon: PizzaIcon },
    { name: 'Burger', icon: BurgerIcon },
    { name: 'Drink', icon: DrinkIcon },
    { name: 'Rice', icon: RiceIcon },
  ];

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <LinearGradient
        colors={['#E6E6E6', '#FEFFBF']}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <Image source={Longdz} style={styles.avatar} />
          <View style={styles.locationContainer}>
            <Text style={styles.locationText}>Your location</Text>
            <View style={styles.locationRow}>
              <Image source={LocationIcon} style={styles.locationIcon} />
              <Text style={styles.locationName}>Hanoi, VietNam</Text>
            </View>
          </View>
          <View style={styles.bellIconContainer}>
            <Image source={BellIcon} style={styles.bellIcon} />
          </View>
        </View>
      </LinearGradient>
      <View style={styles.searchBarContainer}>
        <Image source={SearchIcon} style={styles.iconLeft} />
        <TextInput
          placeholder="Search your food"
          placeholderTextColor="#fff"
          style={styles.searchInput}
        />
        <Image source={IconLeft} style={styles.iconRight} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
        {buttons.map(button => (
          <TouchableOpacity
            key={button.name}
            style={[
              styles.button,
              selectedButton === button.name && styles.buttonSelected
            ]}
            onPress={() => setSelectedButton(button.name)}
          >
            <Image source={button.icon} style={styles.buttonIcon} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 150,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    position: 'relative',
  },
  headerContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 30,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  locationContainer: {
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  locationIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  locationName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  bellIconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bellIcon: {
    width: 20,
    height: 20,
  },
  searchBarContainer: {
    position: 'absolute',
    top: 130,
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A43EC',
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 60,
  },
  iconLeft: {
    width: 24,
    height: 24,
    marginRight: 15,
    marginLeft: 15,
  },
  searchInput: {
    flex: 1,
    color: '#fff',
    opacity: 0.6,
  },
  iconRight: {
    width: 24,
    height: 24,
    marginLeft: 10,
    marginRight: 15,
  },
  scrollView: {
    marginTop: 20,
    paddingHorizontal: 10,
    width: '100%',
  },
  button: {
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    padding: 10,
    marginHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
  },
  buttonSelected: {
    backgroundColor: '#29D697',
  },
  buttonIcon: {
    width: 30,
    height: 50,
  },
});
