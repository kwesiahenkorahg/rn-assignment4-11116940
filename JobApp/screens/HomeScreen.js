import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image,  TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import JobCard from '../components/JobCard';
import SearchBar from '../components/SearchBar'; 

import profileImage from '../assets/profile-image.jpg'
import facebookLogo from '../assets/facebook.png'


export default function HomeScreen({ navigation, route }) {
  const { name, email } = route.params;

  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (text) => {
    setSearchQuery(text);
  };

  const featuredJobs = [
    { id: '1', title: 'Software Engineer', company: 'Facebook', location: 'Accra, Ghana', salary: '$180,000', logo :facebookLogo },
    { id: '2', title: 'Product Manager', company: 'Google', location: 'San Francisco, US', salary: '$160,000', logo: require('../assets/google.png') },
    { id: '3', title: 'Data Scientist', company: 'Amazon', location: 'Seattle, US', salary: '$150,000', logo: require('../assets/amazon.png') },
    { id: '4', title: 'UX Designer', company: 'Apple', location: 'Cupertino, US', salary: '$140,000', logo: require('../assets/apple.png') },
    { id: '5', title: 'Marketing Manager', company: 'Microsoft', location: 'Redmond, US', salary: '$130,000', logo: require('../assets/microsoft.png') },
    { id: '6', title: 'Sales Manager', company: 'Tesla', location: 'Fremont, US', salary: '$120,000', logo: require('../assets/tesla.png') },
    { id: '7', title: 'Operations Manager', company: 'Uber', location: 'San Francisco, US', salary: '$110,000', logo: require('../assets/uber.png') },
    { id: '8', title: 'HR Manager', company: 'LinkedIn', location: 'Sunnyvale, US', salary: '$100,000', logo: require('../assets/linkedin.png') },
  ];

  const popularJobs = [
    { id: '9', title: 'Jr Executive', company: 'Burger King', location: 'Los Angeles, US', salary: '$96,000/y', logo: require('../assets/burger-king.png') },
    { id: '10', title: 'Product Manager', company: 'Beats', location: 'Florida, US', salary: '$84,000/y', logo: require('../assets/beats.png') },
    { id: '11', title: 'Software Developer', company: 'Spotify', location: 'New York, US', salary: '$92,000/y', logo: require('../assets/spotify.jpg') },
    { id: '12', title: 'Business Analyst', company: 'Airbnb', location: 'San Francisco, US', salary: '$88,000/y',logo: require('../assets/airbnb.png') },
    { id: '13', title: 'DevOps Engineer', company: 'Netflix', location: 'Los Gatos, US', salary: '$110,000/y',logo: require('../assets/netflix.png')  },
    { id: '14', title: 'Graphic Designer', company: 'Adobe', location: 'San Jose, US', salary: '$75,000/y',logo: require('../assets/adobe.png') },
    { id: '15', title: 'Quality Assurance', company: 'Dropbox', location: 'San Francisco, US', salary: '$82,000/y',logo: require('../assets/dropbox.png')},
    { id: '16', title: 'Cybersecurity Analyst', company: 'Cisco', location: 'San Jose, US', salary: '$90,000/y', logo: require('../assets/cisco.png') },
  ];

  const renderFeaturedJob = ({ item }) => (
    <TouchableOpacity onPress={() => {/* navigate to job details screen */}}>
      <JobCard cardDetails={item} isFeatured />
    </TouchableOpacity>
  );

  const renderPopularJob = ({ item }) => (
    <TouchableOpacity onPress={() => {/* navigate to job details screen */}}>
      <JobCard cardDetails={item} />
    </TouchableOpacity>
  );

  const filterJobs = (jobs) => {
    return jobs.filter(job =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  return (
    <View style={styles.container}>
      <Header name={name} email={email} profileImage={profileImage} />
      <SearchBar
        value={searchQuery}
        onChangeText={handleSearch}
      />
      <Text style={styles.sectionTitle}>Featured Jobs</Text>
      <FlatList
        data={featuredJobs}
        renderItem={renderFeaturedJob}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.featuredJobsContainer}
      />
      <TouchableOpacity
        style={styles.seeAllButton}
        onPress={() => navigation.navigate('AllJobs')}>
        <Text style={styles.seeAllButtonText}>See All</Text>
      </TouchableOpacity>
      <Text style={styles.sectionTitle}>Popular Jobs</Text>
      <FlatList
        data={popularJobs}
        renderItem={renderPopularJob}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 18,
    color: 'gray',
  },
  featuredJobsContainer: {
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
