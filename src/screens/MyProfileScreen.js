import React, {useState} from 'react';
import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {AppModal} from '../components';

export default function MyProfileScreen({navigation}) {
  const percent = 0.356;
  const [isVisible, setIsVisible] = useState(false);
  const [contentType, setContentType] = useState('NotBarrs');

  const handleModal = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.power}>
          <View>
            <Text>Your profile is {100 * percent}% complete</Text>
            <View style={styles.progressBar}>
              <View style={{...styles.progress, width: 200 * percent}}></View>
            </View>
            <Text>{100 * percent}%</Text>
          </View>
          <View style={styles.logout}>
            <TouchableOpacity
              onPress={() => navigation.navigate('SplashScreen')}>
              <Image
                source={require('../assets/pinkPower.png')}
                style={styles.icon}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <Text style={{color: '#D62196', fontSize: 13}}> Logout </Text>
          </View>
        </View>
        <View style={styles.box}>
          <View style={styles.top}>
            <Text style={{color: '#5E5873', fontSize: 23}}>Information</Text>
            <TouchableOpacity onPress={handleModal} style={styles.edit}>
              <Image
                source={require('../assets/edit.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{color: '#D62196'}}> edit</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image
              source={require('../assets/user.png')}
              style={styles.png}
              resizeMode="contain"
            />
            <Text style={styles.title}>Ronke Bosola</Text>
            <Text style={styles.role}>Product Designer</Text>
          </View>
          <View style={styles.pair}>
            <View style={styles.direction}>
              <Text>Phone:</Text>
              <Text>08012345678</Text>
            </View>
            <View style={styles.direction}>
              <Text>Email:</Text>
              <Text>ronkebosola@example.com</Text>
            </View>
            <View style={styles.direction}>
              <Text>Birthday:</Text>
              <Text>24th, June 1990</Text>
            </View>
            <View style={styles.direction}>
              <Text>Address:</Text>
              <Text>Lagos, Nigeria.</Text>
            </View>
            <View style={styles.direction}>
              <Text>Gender:</Text>
              <Text>Female</Text>
            </View>
            <View style={styles.direction}>
              <Text>Location:</Text>
              <Text>Gbagada Lagos NGA</Text>
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{marginTop: 8}}>
              <Text style={{color: '#5E5873', fontSize: 19}}>Skills</Text>
            </View>
            <View style={styles.key}>
              <Text style={styles.grid4}>Illustrator</Text>
              <Text style={styles.grid4}>Photoshop</Text>
              <Text style={styles.grid4}>Figma</Text>
              <Text style={styles.grid4}>Adobe illustrator</Text>
              <Text style={styles.grid4}>Sketch</Text>
            </View>
          </View>
          <View style={{marginTop: 8}}>
            <Text style={{color: '#5E5873', fontSize: 19}}>Tools</Text>
          </View>
          <View style={styles.key}>
            <Text style={styles.grid4}>Illustrator</Text>
            <Text style={styles.grid4}>Photoshop</Text>
            <Text style={styles.grid4}>Figma</Text>
            <Text style={styles.grid4}>Adobe illustrator</Text>
            <Text style={styles.grid4}>Sketch</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.top}>
            <Text style={{color: '#5E5873', fontSize: 23}}>About me</Text>
            <View style={styles.edit}>
              <Image
                source={require('../assets/edit.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{color: '#D62196'}}> edit</Text>
            </View>
          </View>
          <Text style={{paddingTop: 10}}>
            I am an amazing mobile developer currently working in a team of 3,
            at ATBTech located at Ikoyi Lagos, Nigeria.
          </Text>
        </View>

        <View style={styles.box}>
          <View style={styles.top}>
            <Text style={{color: '#5E5873', fontSize: 23}}>
              Work Experience
            </Text>
            <View style={styles.edit}>
              <Image
                source={require('../assets/edit.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{color: '#D62196'}}> edit</Text>
            </View>
          </View>
          <View style={styles.workExp}>
            <Text style={{fontWeight: '500'}}>Product Designer</Text>
            <Text style={{fontWeight: '400'}}> ABC Technologies</Text>
            <Text style={{fontWeight: '400'}}>2002 - 2003</Text>
          </View>
          <View style={styles.workDesc}>
            <Text>* coding</Text>
            <Text>* testing</Text>
            <Text>* debugging</Text>
            <Text>* integrating</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.top}>
            <Text style={{color: '#5E5873', fontSize: 23}}>Projects</Text>
            <View style={styles.edit}>
              <Image
                source={require('../assets/edit.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{color: '#D62196'}}> edit</Text>
            </View>
          </View>
          <View style={styles.projects}>
            <Text style={styles.projectTitle}>Project Title</Text>
            <Text style={styles.projectDesc}>
              Testing to confirm my endpoints
            </Text>
            <Text style={styles.projectLink}>Project Link</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.top}>
            <Text style={{color: '#5E5873', fontSize: 23}}>
              Education Information
            </Text>
            <View style={styles.edit}>
              <Image
                source={require('../assets/edit.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{color: '#D62196'}}> edit</Text>
            </View>
          </View>
          <View style={styles.projects}>
            <Text style={styles.projectTitle}>
              International College of Design and Coding - Undergraduate
            </Text>
            <Text style={styles.projectDesc}>Bsc Computer Science</Text>
            <Text style={styles.school}>2000 - 2003</Text>
          </View>

          <View style={styles.projects}>
            <Text style={styles.projectTitle}>
              International College of Design and Coding - Post Graduate
            </Text>
            <Text style={styles.projectDesc}>Msc Computer Science</Text>
            <Text style={styles.school}>2004 - 2005</Text>
          </View>
        </View>

        <View style={styles.box}>
          <View style={styles.top}>
            <Text style={{color: '#5E5873', fontSize: 23}}>Documents</Text>
            <View style={styles.edit}>
              <Image
                source={require('../assets/edit.png')}
                style={styles.icon}
                resizeMode="contain"
              />
              <Text style={{color: '#D62196'}}> edit</Text>
            </View>
          </View>
          <View style={styles.docArea}>
            <View style={styles.docs}>
              <Text>Document Name</Text>
              <Text style={styles.workView}>View</Text>
            </View>
            <View style={styles.docs}>
              <Text>Document Name</Text>
              <Text style={styles.workView}>View</Text>
            </View>
            <View style={styles.docs}>
              <Text>Document Name</Text>
              <Text style={styles.workView}>View</Text>
            </View>
            <View style={styles.docs}>
              <Text>Document Name</Text>
              <Text style={styles.workView}>View</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <AppModal isVisible={isVisible} onBackdropPress={handleModal}>
        {contentType == 'Barrs' && (
          <View style={styles.profileEdit}>
            <Text>Sarah Barrs</Text>
          </View>
        )}
        {contentType == 'NotBarrs' && (
          <View style={styles.profileEdit}>
            <Text> Mofeeee</Text>
          </View>
        )}
      </AppModal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  box: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 9,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  profileEdit: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    color: '#5E5873',
  },
  pair: {
    color: '#5E5873',
  },
  direction: {
    flexDirection: 'row',
    marginTop: 5,
    color: '#5E5873',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  png: {
    width: 50,
    height: 60,
  },
  role: {
    fontWeight: 500,
    fontSize: 18,
    color: '#5E5873',
  },
  icon: {
    width: 16,
    height: 16,
  },
  grid4: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    color: '#D62196',
    borderWidth: 1,
    borderColor: '#D62196',
    borderRadius: 6,
    padding: 5,
    marginTop: 5,
  },
  key: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  top: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  edit: {
    flexDirection: 'row',
  },
  workExp: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#5E5873',
    paddingTop: 10,
  },
  workDesc: {
    color: '#5E5873',
    flexDirection: 'column',
    fontWeight: 400,
    fontSize: 12,
    paddingTop: 10,
  },
  projects: {
    flexDirection: 'column',
    paddingTop: 10,
  },
  projectLink: {
    fontWeight: '400',
    color: '#D22A90',
    paddingTop: 5,
  },
  projectDesc: {
    fontWeight: '500',
    fontSize: 12,
    color: '#5E5873',
    paddingTop: 5,
  },
  projectTitle: {
    fontWeight: '600',
    fontSize: 14,
    color: '#5E5873',
    paddingTop: 5,
  },
  school: {
    fontWeight: '400',
    fontSize: 12,
    color: '#5E5873',
  },
  docs: {
    flexDirection: 'row',
    paddingBottom: 7,
  },
  docArea: {
    flexDirection: 'column',
    paddingTop: 10,
  },
  workView: {
    paddingLeft: 30,

    color: '#D22A90',
    fontWeight: 500,
    fontSize: 13,
  },
  power: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logout: {
    flexDirection: 'row',
  },
  progressBar: {
    backgroundColor: '#ccc',
    borderRadius: 8,
    width: 200,
    height: 20,
    justifyContent: 'center',
  },
  progress: {
    height: 20,
    borderRadius: 8,
    backgroundColor: '#D62196BF',
  },
});
