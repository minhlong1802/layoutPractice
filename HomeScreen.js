import React, { useState } from 'react';
import { View, StyleSheet, TextInput, Image, Text, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Swiper from 'react-native-swiper'; // Updated import

// Importing icons and images
import SearchIcon from './Assets/SearchIcon.png';
import IconLeft from './Assets/IconLeft.png';
import Longdz from './Assets/Longdz.jpg';
import LocationIcon from './Assets/LocationIcon.png';
import BellIcon from './Assets/BellIcon.png';
import PizzaIcon from './Assets/PizzaIcon.png';
import BurgerIcon from './Assets/BurgerIcon.png';
import DrinkIcon from './Assets/DrinkIcon.png';
import RiceIcon from './Assets/RiceIcon.png';
import BurgerImage from './Assets/BurgerImage.png';
import PizzaImage from './Assets/PizzaImage.png';
import SlideImage from './Assets/SlideImage.png'; 

export default function HomeScreen() {
  const [selectedButton, setSelectedButton] = useState('Pizza');

  const buttons = [
    { name: 'Pizza', icon: PizzaIcon, iconSizeH: 45, iconSizeW: 30 },
    { name: 'Burger', icon: BurgerIcon, iconSizeH: 40, iconSizeW: 35 },
    { name: 'Drink', icon: DrinkIcon, iconSizeH: 40, iconSizeW: 35 },
    { name: 'Rice', icon: RiceIcon, iconSizeH: 45, iconSizeW: 20 },
  ];

  const carouselItems = [
    { image: SlideImage },
    { image: SlideImage },
    { image: SlideImage },
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
            <Image source={button.icon} style={[styles.buttonIcon, { width: button.iconSizeW, height: button.iconSizeH }]} />
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View style={styles.carouselContainer}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay
          autoplayTimeout={3} // Time between slides
        >
          {carouselItems.map((item, index) => (
            <View key={index} style={styles.carouselItem}>
              <Image source={item.image} style={styles.carouselImage} />
            </View>
          ))}
        </Swiper>
      </View>
      <View style={styles.popularItemsContainer}>
        <View style={styles.popularItemsHeader}>
          <Text style={{ fontWeight: 'bold', marginLeft: 10 }}>Popular items</Text>
          <Text>View all</Text>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.featuredItemsContainer}
        >
          <View style={styles.featuredItem}>
            <Image source={BurgerImage} style={styles.featuredImage} />
            <Text style={styles.featuredText}>BURGER</Text>
          </View>
          <View style={styles.featuredItem}>
            <Image source={PizzaImage} style={styles.featuredImage} />
            <Text style={styles.featuredText}>PIZZA</Text>
          </View>
        </ScrollView>
      </View>
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
    position: 'absolute',
    top: 185,
    marginTop: 20,
    paddingHorizontal: 10,
    width: '90%',
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
  carouselContainer: {
    width: '90%',
    height: 150, // Adjust as needed
    marginTop: 170, // Position it below the ScrollView
    marginBottom: 10, // Ensure space before the popular items
  },
  wrapper: {
    // Styling for swiper wrapper if needed
  },
  carouselItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  popularItemsContainer: {
    position: 'absolute',
    bottom: 0,
    width: '95%',
    paddingHorizontal: 10,
  },
  popularItemsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  featuredItemsContainer: {
    height: 180,  // Increased height to accommodate image and text
  },
  featuredItem: {
    width: 200,
    height: 200, // Increased height to accommodate image and text
    justifyContent: 'center',  // Center the content vertically
    alignItems: 'center',
    borderRadius: 10,
    overflow: 'hidden',
    position: 'relative',
  },
  featuredImage: {
    width: 180,
    height: 120,  // Adjusted height for image
    marginBottom: 10,  // Space between image and text
  },
  featuredText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
