import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

export default function OrderScreen() {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <LinearGradient
        colors={['#E6E6E6', '#FEFFBF']}
        style={styles.header}
      />
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={handleBackPress}>
          <Image source={require('./Assets/LeftArrowIcon.png')} style={styles.leftArrowIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Shopping Cart</Text>
        <Image source={require('./Assets/BinIcon.png')} style={styles.binIcon} />
      </View>
      <Image source={require('./Assets/HeaderImageOrderScreen.png')} style={styles.headerImageOrderScreen} />
      
      <View style={styles.bottomContainer}>
        <Image source={require('./Assets/ThreeBurgerImage.png')} style={styles.ThreeBurgerImage} />
        <View style={styles.itemInfoContainer}>
          <Text style={styles.itemTitle}>BURGER</Text>
          <Text style={styles.itemPrice}>$28</Text>
        </View>
        <View style={styles.ratingContainer}>
          <Image source={require('./Assets/StarIcon.png')} style={styles.StarIcon} />
          <Text style={styles.ratingText}>4.9 (3k+ Rating)</Text>
          <Image source={require('./Assets/PlusMinusIcon.png')} style={styles.PlusMinusIcon} />
        </View>
        <View style={styles.deliveryContainer}>
          <Image source={require('./Assets/LocationIcon.png')} style={styles.LocationIcon} />
          <View style={styles.addressContainer}>
            <Text style={styles.addressLabel}>Delivery Address</Text>
            <Text style={styles.addressText}>Dhaka, Bangladesh</Text>
          </View>
          <TouchableOpacity>
            <Image source={require('./Assets/WriteIcon.png')} style={styles.WriteIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.paymentContainer}>
          <Image source={require('./Assets/CreditCardIcon.png')} style={styles.CreditCardIcon} />
          <Text style={styles.paymentText}>Payment Method</Text>
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.summaryContainer}>
          <Text style={styles.summaryTitle}>Checkout Summary</Text>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Subtotal (2)</Text>
            <Text style={styles.summaryValue}>$56</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Delivery Fee</Text>
            <Text style={styles.summaryValue}>$6.20</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={styles.summaryLabel}>Payable Total</Text>
            <Text style={styles.summaryValue}>$62.20</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm Order</Text>
        </TouchableOpacity>
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    position: 'absolute',
    top: 50,
  },
  leftArrowIcon: {
    width: 25,
    height: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  binIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  headerImageOrderScreen: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
    position: 'absolute',
    top: 100,
  },
  bottomContainer: {
    width: '86%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    position: 'absolute',
    bottom: 0,
    height: 390,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  ThreeBurgerImage: {
    width: 280,
    height: 67,
    marginBottom: 10,
  },
  itemInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  StarIcon: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  ratingText: {
    fontSize: 14,
  },
  PlusMinusIcon: {
    width: 20,
    height: 20,
    marginLeft: 'auto',
  },
  deliveryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  LocationIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  addressContainer: {
    flex: 1,
  },
  addressLabel: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  addressText: {
    fontSize: 14,
  },
  WriteIcon: {
    width: 20,
    height: 20,
  },
  paymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
  },
  CreditCardIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  paymentText: {
    flex: 1,
    fontSize: 14,
    fontWeight: 'bold',
  },
  changeText: {
    color: 'blue',
  },
  summaryContainer: {
    width: '100%',
    marginBottom: 20,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 14,
  },
  summaryValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  confirmButton: {
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
