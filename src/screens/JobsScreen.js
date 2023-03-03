import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import moment from 'moment';
import {getJobs} from '../actions/jobs';
import {AppModal} from '../components';

export default function JobsScreen({navigation}) {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const [isVisible, setIsVisible] = useState(false);
  const [contentType, setContentType] = useState('Filter');

  const handleModal = () => {
    setIsVisible(!isVisible);
  };

  const handleSearch = text => {
    const filtered = jobs.filter(job => {
      const title = job.companyName.toLowerCase();
      const searchTerm = text.toLowerCase();
      return title.includes(searchTerm);
    });
    setFilteredJobs(filtered);
  };

  const fetchData = async () => {
    const jobsData = await getJobs();
    console.log('We got jobs for you', jobsData.data);
    setJobs(jobsData.data);
    setFilteredJobs(jobsData.data);
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchData();
    });
    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TextInput
          style={styles.workInput}
          placeholder="Search Here"
          onChangeText={text => handleSearch(text)}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            handleModal();
            setContentType('Filter');
          }}>
          <View style={styles.action}>
            <Text style={styles.time}>Filter</Text>
            <Image
              source={require('../assets/arrowDown.png')}
              style={styles.drop}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filteredJobs}
        // keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <View style={styles.box}>
            <View style={styles.logoArea}>
              <Image
                source={{uri: item.companyLogo}}
                style={styles.png}
                resizeMode="contain"
              />

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                }}></View>
              <View styles={styles.logoAreaText}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('AppliedJobDescScreen', {item})
                  }>
                  <Text style={styles.title}>{item.companyName}</Text>
                </TouchableOpacity>
                <Text style={styles.role}>{item && item.jobRole}</Text>
              </View>
            </View>
            <View style={styles.boxDirection}>
              <View style={styles.miniBoxes}>
                <Image
                  source={require('../assets/map-pin.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={styles.content}>{item.location}</Text>
              </View>
              <View style={styles.miniBoxes}>
                <Text style={styles.content}>&#8358; {item.salary}</Text>
              </View>
            </View>
            <View style={styles.grid4}>
              {item.skills.map(skill => (
                <View>
                  <Text style={styles.skills}>{skill}</Text>
                </View>
              ))}
            </View>
            <Text style={styles.time}>
              {moment(item.postedAt, 'YYYYMMDD').startOf('day').fromNow()}
            </Text>
          </View>
        )}
      />
      <AppModal isVisible={isVisible} onBackdropPress={handleModal}>
        {contentType == 'Filter' && (
          <View style={styles.profileEdit}>
            <View style={{marginLeft: 10}}>
              <View style={{marginTop: 10}}>
                <Text>Junior Developer </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text>Intermediate Developer </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text>Senior Developer </Text>
              </View>
            </View>
          </View>
        )}
      </AppModal>
    </>
  );
}

const {height, width} = Dimensions.get('screen');

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
    fontSize: 16,
    paddingTop: 7,
  },
  btn: {
    backgroundColor: '#DACFE5',
    // height: 40,
    width: 100,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  action: {
    flexDirection: 'row',
    padding: 5,
  },
  workInput: {
    height: 36,
    width: width * 0.6,
    borderWidth: 0.6,
    borderColor: '#5E5873',
    borderRadius: 6,
    marginRight: 7,
    marginBottom: 6,
    marginLeft: 8,
    marginTop: 8,
  },
  profileEdit: {
    marginBottom: 16,
    width: '60%',
    height: '32%',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
  drop: {
    width: 20,
    height: 10,
    marginTop: 12,
  },
});
