import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const JobCard = ({ cardDetails, isFeatured }) => {
  return (
    <View style={[styles.container, isFeatured && styles.featuredContainer]}>
      {isFeatured ? (
        <View>
          <View style={styles.topContainer}>
            <Image style={styles.logo} source={cardDetails.logo} />
            <View style={styles.topDetails}>
              <Text style={[styles.title, isFeatured && styles.featuredText]}>{cardDetails.title}</Text>
              <Text style={[styles.company, isFeatured && styles.featuredText]}>{cardDetails.company}</Text>
            </View>
          </View>
          <View style={styles.bottomDetails}>
            <Text style={[styles.location, isFeatured && styles.featuredText]}>{cardDetails.location}</Text>
            <Text style={[styles.salary, isFeatured && styles.featuredText]}>{cardDetails.salary}</Text>
          </View>
        </View>
      ) : (
        <View style={styles.popularContainer}>
          <Image style={styles.popularLogo} source={cardDetails.logo} />
          <View style={styles.popularDetails}>
            <Text style={styles.title}>{cardDetails.title}</Text>
            <Text style={styles.company}>{cardDetails.company}</Text>
          </View>
          <View style={styles.popularRight}>
            <Text style={styles.salary}>{cardDetails.salary}</Text>
            <Text style={styles.location}>{cardDetails.location}</Text>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  featuredContainer: {
    padding:30,
    backgroundColor: '#333', 
    marginRight: 30,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  topDetails: {
    flex: 1,
  },
  bottomDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  company: {
    fontSize: 16,
    color: 'gray',
  },
  location: {
    fontSize: 16,
    color: 'gray',
  },
  salary: {
    fontSize: 16,
    color: 'green',
    fontWeight: 'bold',
  },
  featuredText: {
    color: '#fff',
  },
  popularContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  popularLogo: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  popularDetails: {
    marginLeft: 10,
    flex: 1,
  },
  popularRight: {
    alignItems: 'flex-end',
    marginRight: 10,
  },
});

export default JobCard;
