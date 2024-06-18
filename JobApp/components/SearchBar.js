import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={20} color="#888" style={styles.icon} />
      <TextInput
        style={styles.searchInput}
        placeholder="Search a job or position"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    borderColor: '#F5F5F5',
    borderWidth: 1,
    marginBottom: 10,
    padding:25,
    borderRadius: 5,
    backgroundColor:'#F5F5F5',
  },
 
  searchInput: {
    flex: 1,
  },
  icon: {
    marginRight: 10,
  },
});

export default SearchBar;
