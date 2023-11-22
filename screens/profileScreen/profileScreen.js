import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import userData from '../../data/test_userData';
import styles from './profileScreenStyle';
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = ({ navigation }) => {
    const user = userData[0]; //Assuming this is the signed in user

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onPress={goBack}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Profile</Text>
            <Text style={styles.info}>Username: {user.username}</Text>
            <Text style={styles.info}>Email: {user.emailId}</Text>
            <Text style={styles.info}>Loyalty Points: {user.loyaltyPoints} (This can be use in local shops for a free product from the store (T&C Apply).)</Text>

            <Text style={styles.subtitle}>Favorite Stores</Text>
            {user.favoriteStores.map(storeId => (
                <Text key={storeId} style={styles.info}>Store ID: {storeId}</Text>
            ))}

            <Text style={styles.subtitle}>Reviews</Text>
            {user.reviews.map((review, index) => (
                <View key={index} style={styles.review}>
                    <Text>Business ID: {review.businessId}</Text>
                    <Text>Rating: {review.rating}</Text>
                    <Text>Review: {review.text}</Text>
                </View>
            ))}

            <Text style={styles.subtitle}>Rewards Earned</Text>
            {user.rewardsEarned.map(rewardId => (
                <Text key={rewardId} style={styles.info}>Reward ID: {rewardId}</Text>
            ))}
        </View>
    );
};

export default ProfileScreen;
