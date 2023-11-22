import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, Image, Modal } from 'react-native';
import Business from "../../data/test_data"
import styles from "./homeScreenStyle"
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';

const HomeScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterModalVisible, setFilterModalVisible] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState(new Set());
    const [selectedRatings, setSelectedRatings] = useState(new Set());
    const [filteredBusiness, setFilteredBusiness] = useState(Business);

    const toggleFilterModal = useCallback(() => {
        setFilterModalVisible(prev => !prev);
    }, []);

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
        <TouchableOpacity style={styles.businessItem} onPress={() => { /* navigateToBusinessProfile(item.id) */ }}>
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
    ), []);

    return (
        <View style={styles.container}>
            <View style={styles.searchAndFilterContainer}>
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
                keyExtractor={item => item.id.toString()}
            />
        </View>
    );
};

export default HomeScreen;
