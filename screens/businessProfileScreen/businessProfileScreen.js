import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './businessProfileStyle';

const BusinessProfileScreen = ({ route, navigation }) => {
    const { business } = route.params;

    // Function to handle 'favorite' action
    const handleFavorite = () => {
        // Logic to mark/unmark business as favorite
    };

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <ScrollView style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={goBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Image source={{ uri: business.imageUrl }} style={styles.image} />
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

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>User Reviews</Text>
                    {business.reviews.map((review, index) => (
                        <View key={index} style={styles.review}>
                            <Text style={styles.reviewText}>{`Rating: ${review.rating}`}</Text>
                            <Text style={styles.reviewText}>{review.text}</Text>
                        </View>
                    ))}
                </View>

                <TouchableOpacity onPress={handleFavorite} style={styles.favoriteButton}>
                    <Ionicons name="heart-outline" size={24} color="black" />
                    <Text style={styles.favoriteText}>Favorite</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default BusinessProfileScreen;
