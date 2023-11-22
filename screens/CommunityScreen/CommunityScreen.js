import React from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import userData from '../../data/test_userData';

const CommunityScreen = () => {

    const getFavoriteStoresCount = () => {
        const counts = {};
        userData.forEach(user => {
            user.favoriteStores.forEach(store => {
                counts[store] = (counts[store] || 0) + 1;
            });
        });
        return counts;
    };

    const favoriteStoresCount = getFavoriteStoresCount();

    const renderReview = ({ item }) => (
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#ccc' }}>
            <Text style={{ fontWeight: 'bold' }}>{item.username}</Text>
            <Text>Reviewed: {item.businessId}</Text>
            <Text>Rating: {item.rating}</Text>
            <Text>{item.text}</Text>
        </View>
    );

    const allReviews = userData.flatMap(user => user.reviews.map(review => ({ ...review, username: user.username })));

    return (
        <View style={{ flex: 1, padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Local Community</Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Neighbourhood Reviews</Text>
            <FlatList
                data={allReviews}
                renderItem={renderReview}
                keyExtractor={(item, index) => index.toString()}
            />

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginTop: 20, marginBottom: 10 }}>Favorite Stores (The top store here is more likely to give more loyalty points to its community)</Text>
            {Object.entries(favoriteStoresCount).map(([store, count]) => (
                <TouchableOpacity key={store} onPress={() => {/* Navigate to store details */ }}>
                    <Text>{store} - Favorited by {count} users</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CommunityScreen;
