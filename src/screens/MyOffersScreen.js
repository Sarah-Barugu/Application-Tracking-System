import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AppModal} from '../components';
import {jobOffers} from '../actions/offer';

export default function MyOffersScreen({navigation}) {
  const [jobs, setJobs] = useState([]);

  const [isVisible, setIsVisible] = useState(false);
  const [contentType, setContentType] = useState('Filter');

  const handleModal = () => {
    setIsVisible(!isVisible);
  };

  const fetchData = async () => {
    const jobsData = await jobOffers();
    // console.log('We got jobs for you', jobsData.data);
    setJobs(jobsData.data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <FlatList
        data={jobs}
        // keyExtractor={item => item.id.toString()}
        renderItem={({item: data}) => {
          const item = data.jobId;
          if (!item) return null;
          console.log(item);
          return (
            <TouchableOpacity>
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
                      onPress={() => navigation.navigate('JobDescScreen')}>
                      <Text style={styles.title}>{item.companyName}</Text>
                    </TouchableOpacity>
                    <Text style={styles.role}>{item.jobRole}</Text>
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
                {/* <View style={styles.grid4}>
                {item.skills.map(skill => (
                  <View>
                    <Text style={styles.skills}>{skill}</Text>
                  </View>
                ))}
              </View> */}
                <View>
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      handleModal();
                      setContentType('Filter');
                    }}>
                    <View style={styles.action}>
                      <Text style={styles.time}>Actions</Text>
                      <Image
                        source={require('../assets/arrowDown.png')}
                        style={styles.drop}
                        resizeMode="contain"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
      <AppModal isVisible={isVisible} onBackdropPress={handleModal}>
        {contentType == 'Filter' && (
          <View style={styles.profileEdit}>
            <View style={{marginLeft: 10}}>
              <View style={{marginTop: 10}}>
                <Text>ACCEPT OFFER </Text>
              </View>
              <View style={{marginTop: 10}}>
                <Text> REJECT OFFER </Text>
              </View>
            </View>
          </View>
        )}
      </AppModal>
    </>
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
  time: {
    color: '#440F7C',
    fontSize: 16,
    paddingTop: 3,
  },
  btn: {
    backgroundColor: '#DACFE5',
    // height: 40,
    // width: 270,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  action: {
    flexDirection: 'row',
    padding: 5,
  },
  drop: {
    width: 30,
    height: 10,
    marginTop: 8,
  },
  profileEdit: {
    width: '50%',
    height: '30%',
    backgroundColor: '#fff',
    alignSelf: 'center',
  },
});
