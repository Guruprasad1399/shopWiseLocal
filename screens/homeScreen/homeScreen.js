import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import Business from "../../data/test_data";
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import styles from "./homeScreenStyle"
import BottomSheet from '@gorhom/bottom-sheet';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const bottomSheetRef = useRef(null);
    const snapPoints = useMemo(() => ['50%', '90%'], []);
    const [isFilterModalVisible, setFilterModalVisible] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState(new Set());
    const [selectedRatings, setSelectedRatings] = useState(new Set());
    const [filteredBusiness, setFilteredBusiness] = useState(Business);
    const [region, setRegion] = useState({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021,
    });
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    const toggleFilterModal = useCallback(() => {
        setFilterModalVisible(prev => !prev);
    }, []);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let currentLocation = await Location.getCurrentPositionAsync({});
            setLocation(currentLocation);

            setRegion({
                latitude: currentLocation.coords.latitude,
                longitude: currentLocation.coords.longitude,
                latitudeDelta: 0.05,
                longitudeDelta: 0.05,
            });
        })();
    }, []);

    const handleMapZoom = (latitude, longitude) => {
        setRegion({
            latitude: latitude,
            longitude: longitude,
            latitudeDelta: 0.005,  // Closer zoom
            longitudeDelta: 0.005  // Closer zoom
        });
    };

    const getFilteredBusinesses = () => {
        return Business.filter(business => {
            const matchesSearchQuery = searchQuery.length === 0 || business.name.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = selectedCategories.size === 0 || selectedCategories.has(business.category);
            const matchesRating = selectedRatings.size === 0 || selectedRatings.has(Math.round(business.rating));
            return matchesSearchQuery && matchesCategory && matchesRating;
        });
    };
    useEffect(() => {
        setFilteredBusiness(getFilteredBusinesses());
    }, [searchQuery]);

    const renderCategoryCheckBoxes = () => {
        const categories = ["Restaurant", "Bar", "Diner", "Cafe", "Bakery"];
        return categories.map(category => (
            <View style={styles.checkBoxContainer} key={category}>
                <Checkbox
                    value={selectedCategories.has(category)}
                    onValueChange={() => handleCategorySelect(category)}
                />
                <Text style={styles.checkBoxLabel}>{category}</Text>
            </View>
        ));
    };

    const navigateToBusinessProfile = useCallback((business) => {
        navigation.navigate("Business Profile", { business });
    }, [navigation]);

    const renderRatingCheckBoxes = () => {
        return [1, 2, 3, 4, 5].map(rating => (
            <View style={styles.checkBoxContainer} key={rating}>
                <Checkbox
                    value={selectedRatings.has(rating)}
                    onValueChange={() => handleRatingSelect(rating)}
                />
                <Text style={styles.checkBoxLabel}>{`${rating} Stars`}</Text>
            </View>
        ));
    };

    const handleCategorySelect = useCallback((category) => {
        setSelectedCategories(prev => {
            const updated = new Set(prev);
            if (updated.has(category)) {
                updated.delete(category);
            } else {
                updated.add(category);
            }
            return updated;
        });
    }, []);

    const handleRatingSelect = useCallback((rating) => {
        setSelectedRatings(prev => {
            const updated = new Set(prev);
            if (updated.has(rating)) {
                updated.delete(rating);
            } else {
                updated.add(rating);
            }
            return updated;
        });
    }, []);

    const applyFilters = useCallback(() => {
        setFilteredBusiness(getFilteredBusinesses());
        toggleFilterModal();
    }, [selectedCategories, selectedRatings]);

    const renderItem = useCallback(({ item }) => (
        <TouchableOpacity style={styles.businessItem} onPress={() => {
            handleMapZoom(item.latitude, item.longitude);
        }}
            onLongPress={() => navigateToBusinessProfile(item)}
        >
            <Image source={item.image} style={styles.businessImage} />
            <View style={styles.businessInfo}>
                <Text style={styles.businessName}>{item.name}</Text>
                <Text style={styles.businessCategory}>{item.category}</Text>
                <Text style={styles.businessDescription}>{item.description}</Text>
                <Text style={styles.businessLocation}>{item.location}</Text>
                <Text style={styles.businessPromotion}>{item.promotion}</Text>
                <Text style={styles.businessRating}>{`Rating: ${item.rating}`}</Text>
            </View>
        </TouchableOpacity>
    ), [navigateToBusinessProfile, handleMapZoom]);

    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                region={region}
                showsUserLocation={true}
                userInterfaceStyle='dark'
            >
                {filteredBusiness.map(business => (
                    <Marker
                        key={business.id}
                        coordinate={{ latitude: business.latitude, longitude: business.longitude }}
                        title={`${business.category} - ${business.name}`}
                    />
                ))}
            </MapView>
            <BottomSheet ref={bottomSheetRef} snapPoints={snapPoints}>
                <View style={styles.bottomSheetContent}>
                    <View style={styles.searchAndFilterContainer}>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Profile Screen')}
                        >
                            <Ionicons name="person-circle-outline" size={30} color="black" />
                        </TouchableOpacity>
                        <TextInput
                            style={styles.searchBar}
                            placeholder="Search businesses by name"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                        <TouchableOpacity onPress={toggleFilterModal}>
                            <Ionicons name="filter" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={isFilterModalVisible}
                        onRequestClose={toggleFilterModal}>
                        <View style={styles.modalView}>
                            <Text style={styles.modalTitle}>Filter Options</Text>
                            {renderCategoryCheckBoxes()}
                            {renderRatingCheckBoxes()}
                            <TouchableOpacity style={styles.button} onPress={applyFilters}>
                                <Text style={styles.buttonText}>Apply Filters</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                    <FlatList
                        data={filteredBusiness}
                        renderItem={renderItem}
                        showsVerticalScrollIndicator={false}
                        removeClippedSubviews={true}
                        keyExtractor={item => item.id.toString()}
                        maxToRenderPerBatch={8}
                        updateCellsBatchingPeriod={30}
                        initialNumToRender={8}
                    />
                </View>
            </BottomSheet>
        </View>
    );
};

export default HomeScreen;
