import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './businessProfileStyle';
import QRcode from '../../assets/images/qr.png';

const BusinessProfileScreen = ({ route, navigation }) => {
    const { business } = route.params;
    const [favorite, setFavorite] = useState(false)
    // Function to handle 'favorite' action
    const handleFavorite = () => {
        setFavorite(!favorite)
    };

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={goBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image source={business.image} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name}>{business.name}</Text>
                <Text style={styles.description}>{business.description}</Text>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Location</Text>
                    <Text>{business.location}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Promotion Code</Text>
                    <Text>{business.promotion}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Current Offers</Text>
                    <Text>{business.currentOfferDetails}</Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Rating</Text>
                    <Text>{`${business.rating} Stars`}</Text>
                </View>

                <TouchableOpacity onPress={handleFavorite} style={styles.favoriteButton}>
                    <Ionicons name="heart-outline" size={24} color={favorite ? "red" : "black"} />
                    <Text style={styles.favoriteText}>Favorite</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.qrCodeContainer}>
                <Text style={styles.qrCodeNote}>
                    Scan this QR code to earn loyalty points when making a purchase at this store.
                    Remember to scan before payment to claim your rewards.
                </Text>
                <Image
                    source={QRcode}
                    style={styles.qrCodeImage}
                />
            </View>
        </ScrollView>
    );
};

export default BusinessProfileScreen;
