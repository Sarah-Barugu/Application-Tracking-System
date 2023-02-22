import React from 'react';
import {ScrollView, View, StyleSheet, Text, Image} from 'react-native';

export default function JobsScreen({navigation}) {
  const jobs = [
    {
      companyLogo: require('./../assets/76ers.png'),
      companyName: 'ABC Company',
      jobRole: 'Senior Level Product Designer',
      location: 'United Arab Emirates',
      salary: '1,000,000.00',
      skills: [
        'Figma',
        'Sketch',
        'Adobe XD',
        'illustrator',
        'Photoshop',
        'inVision',
      ],
      postedAt: 'Posted 8 hours ago',
    },
    {
      companyLogo: require('../assets/fendi.png'),
      companyName: 'DEF Company',
      jobRole: 'Senior Software Developer',
      location: 'USA',
      salary: '1,500,000.00',
      skills: [
        'React Js',
        'React Native',
        'illustrator',
        'Photoshop',
        'inVision',
      ],
      postedAt: 'Posted 2 hours ago',
    },
    {
      companyLogo: require('../assets/manUtd.png'),
      companyName: 'GHI Company',
      jobRole: 'Mid Level Software Developer',
      location: 'Jamaica',
      salary: '1,500,000.00',
      skills: ['Javascript', 'Vue js', 'React Js', 'Photoshop', 'inVision'],
      postedAt: 'Posted 4 hours ago',
    },
    {
      companyLogo: require('../assets/hyundai.png'),
      companyName: 'JKLM Company',
      jobRole: 'Junior Level Software Developer',
      location: 'South Africa',
      salary: '500,000.00',
      skills: ['Javascript', 'Vue js', 'React Js', 'Photoshop'],
      postedAt: 'Posted 30 minute ago',
    },
  ];
  const listJobs = [];

  for (let index = 0; index < jobs.length; index++) {
    const job = jobs[index];
    const skills = job.skills;
    const listSkills = [];
    for (let index2 = 0; index2 < skills.length; index2++) {
      const skill = skills[index2];

      listSkills.push(
        <Text key={index2} style={styles.skills}>
          {skill}
        </Text>,
      );
    }
    listJobs.push(
      <View key={index} style={styles.box}>
        <View style={styles.logoArea}>
          <Image
            // source={{uri: job.companyLogo}}
            source={job.companyLogo}
            style={styles.png}
            resizeMode="contain"
          />
          <View styles={styles.logoAreaText}>
            <Text style={styles.title}>{job.companyName}</Text>
            <Text style={styles.role}>{job.jobRole}</Text>
          </View>
        </View>
        <View style={styles.boxDirection}>
          <View style={styles.miniBoxes}>
            <Image
              source={require('../assets/map-pin.png')}
              style={styles.icon}
              resizeMode="contain"
            />
            <Text style={styles.content}>{job.location}</Text>
          </View>
          <View style={styles.miniBoxes}>
            <Text style={styles.content}>&#8358; {job.salary}</Text>
          </View>
        </View>
        <View style={styles.grid4}>{listSkills}</View>
        <Text style={styles.time}>{job.postedAt}</Text>
      </View>,
    );
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>{listJobs}</ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  box: {
    // flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 5,
    marginBottom: 14,
    shadowOpacity: 0.1,
  },
  title: {
    fontSize: 13,
    color: '#5E5873',
  },
  content: {
    fontSize: 12,
    color: '#D62196',
  },
  png: {
    width: 40,
    height: 40,
  },
  role: {
    fontWeight: 500,
    fontSize: 16,
    color: '#5E5873',
  },
  miniBoxes: {
    flexDirection: 'row',
    backgroundColor: '#F7D3EA',
    padding: 5,
    marginVertical: 5,
    marginRight: 8,
    borderRadius: 4,
    justifyContent: 'center',
    padding: 5,
    width: 155,
  },
  icon: {
    width: 16,
    height: 16,
  },
  boxDirection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  grid4: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    borderColor: '#D62196',
  },
  skills: {
    gap: 5,
    borderRadius: 6,
    borderWidth: 1,
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 4,
    marginRight: 12,
    marginTop: 10,
    borderColor: '#D62196',
    color: '#D62196',
  },
  logoArea: {
    flexDirection: 'row',
    gap: 10,
  },
  logoAreaText: {
    flexDirection: 'column',
  },
  time: {
    color: '#152536',
    fontSize: 13,
    paddingTop: 7,
  },
});
