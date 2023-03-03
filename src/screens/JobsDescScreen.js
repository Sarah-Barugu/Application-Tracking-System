import {useRoute} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TextInput,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

export default function JobDescScreen({navigation}) {
  // const {item} = useRoute().params;
  // console.log(item);
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.power}>
          <View style={styles.logout}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/back.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={{color: '#000000', fontSize: 16}}> Back </Text>
          </View>
          <View style={styles.applied}>
            <TouchableOpacity>
              <Text>Applied</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Text style={{paddingBottom: 10, fontSize: 23}}>
            Product Designer
          </Text>
          <Text>Lagos,NGA / ATB Techsoft / Information Technology</Text>
        </View>
        <View>
          <Text style={{paddingTop: 35, fontSize: 16}}>
            Product Designer Job Description
          </Text>
          <Text style={{paddingTop: 15, fontWeight: 500}}>Job Overview</Text>
          <Text style={{paddingTop: 5, fontWeight: 300}}>
            ATB Techsoft solutions limited is a leading tech firm in information
            technology industry in a metro area. we're pleased to have a 4.0
            Glassdoor rating.
          </Text>
          <Text style={{paddingTop: 15, fontWeight: 500}}>
            Responsibilities for Product Designer
          </Text>
          <Text style={{paddingTop: 5, fontWeight: 300}}>
            Create impeccable design
          </Text>
          <Text style={{paddingTop: 5, fontWeight: 300}}>
            Maintain current Industry trend
          </Text>
          <Text style={{paddingTop: 5, fontWeight: 300}}>
            Perform research on product technologies
          </Text>
          <Text style={{paddingTop: 5, fontWeight: 300}}>
            Modify and revise existing design
          </Text>
          <Text style={{paddingTop: 15, fontWeight: 500}}>
            Qualifications for Product Designer
          </Text>
          <Text style={{paddingTop: 5, fontWeight: 300}}>
            Meticulous and Diligent
          </Text>
          <Text style={{paddingTop: 5, fontWeight: 300}}>
            Excellent attention to details
          </Text>
          <Text style={{paddingTop: 5, fontWeight: 300}}>
            Artistic and innovative flair
          </Text>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Text style={{fontWeight: 500}}>Required Educational Level: </Text>
            <Text style={{fontWeight: 300}}>Graduate</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Text style={{fontWeight: 500}}>Experience Level: </Text>
            <Text style={{fontWeight: 300}}>Professional</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Text style={{fontWeight: 500}}>Job Type: </Text>
            <Text style={{fontWeight: 300}}>Remote</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Text style={{fontWeight: 500}}>Job Role Type: </Text>
            <Text style={{fontWeight: 300}}>Full-Time</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Text style={{fontWeight: 500}}>Location: </Text>
            <Text style={{fontWeight: 300}}>Lagos,NGA</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Text style={{fontWeight: 500}}>Salary: </Text>
            <Text style={{fontWeight: 300}}>
              &#8358;450,000.00 - &#8358;890,000.00
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const {height, width} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  icon: {
    width: 16,
    height: 16,
  },
  power: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logout: {
    flexDirection: 'row',
  },
  applied: {
    backgroundColor: '#DACFE5',
    padding: 15,
  },
  bottomApplied: {
    alignSelf: 'flex-start',
    backgroundColor: '#DACFE5',
    padding: 20,
    marginTop: 15,
  },
});
