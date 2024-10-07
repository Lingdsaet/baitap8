import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

function HomeScreen() {
  return (
    <View style={styles.homeContainer}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Hello 👋</Text>
        <Text style={styles.username}>Phan Hoài Linh</Text>
        {/* Logo Image */}
        <Image
          source={{ uri: 'https://www.google.com.vn/imgres?q=h%C3%A0%20nh%C3%A2n%20xuy%C3%AAn%20kh%C3%B4ng%20avatar&imgurl=https%3A%2F%2Fgauchuatv.com%2Fassets%2Fupload%2Fha-nhan-xuyen-khong-lam-tieu-dau-bep-vietsub_250x350.jpg&imgrefurl=https%3A%2F%2Fgauchuatv.com%2Fthong-tin-phim%2Fha-nhan-xuyen-khong-lam-tieu-dau-bep-vietsub.html&docid=7Qm1jglA9MOkBM&tbnid=40YxMB0rhjFIbM&vet=12ahUKEwivl_-R1PyIAxU5qVYBHaZ-H98QM3oECGgQAA..i&w=250&h=350&hcb=2&ved=2ahUKEwivl_-R1PyIAxU5qVYBHaZ-H98QM3oECGgQAA' }} // Thay thế bằng URL hoặc đường dẫn hình ảnh logo của bạn
          style={styles.logo}
        />
      </View>
      <Text style={styles.sectionTitle}>Your Insights</Text>
      <View style={styles.iconsContainer}>
        <View style={styles.iconBox}>
          <Ionicons name="camera-outline" size={40} color="#7A5AF8" />
          <Text style={styles.iconLabel}>Scan new</Text>
          <Text style={styles.iconSubtext}>Scanned 405</Text>
        </View>
        <View style={styles.iconBox}>
          <Ionicons name="alert-outline" size={40} color="#FF6464" />
          <Text style={styles.iconLabel}>Counterfeits</Text>
          <Text style={styles.iconSubtext}>Counterfeited 26</Text>
        </View>
        <View style={styles.iconBox}>
          <Ionicons name="checkmark-circle-outline" size={40} color="#00C851" />
          <Text style={styles.iconLabel}>Success</Text>
          <Text style={styles.iconSubtext}>Checkouts 15</Text>
        </View>
        <View style={styles.iconBox}>
          <Ionicons name="calendar-outline" size={40} color="#33B5E5" />
          <Text style={styles.iconLabel}>Directory</Text>
          <Text style={styles.iconSubtext}>History 32</Text>
        </View>
      </View>
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
    homeContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 40,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 20,
    },
    welcomeText: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    username: {
      fontSize: 18,
      color: 'gray',
    },
    logo: {
      width: 50, // Chiều rộng logo
      height: 50, // Chiều cao logo
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 15,
    },
    iconsContainer: {
      flexDirection: 'row', // Sắp xếp theo hàng
      flexWrap: 'wrap', // Cho phép các ô bọc
      justifyContent: 'space-between', // Căn chỉnh các ô
    },
    iconBox: {
      width: '48%', // Kích thước của mỗi ô vuông (giảm một chút để có khoảng cách)
      backgroundColor: '#F9F9F9',
      padding: 20,
      borderRadius: 12,
      alignItems: 'center',
      marginBottom: 10, // Khoảng cách giữa các hàng
    },
    iconLabel: {
      fontSize: 16,
      fontWeight: 'bold',
      marginTop: 10,
    },
    iconSubtext: {
      fontSize: 12,
      color: 'gray',
    },
  });
  
  export default HomeScreen;