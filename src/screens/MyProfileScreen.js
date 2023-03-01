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
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {AppModal} from '../components';

export default function MyProfileScreen({navigation}) {
  const percent = 0.356;
  const [isVisible, setIsVisible] = useState(false);
  const [contentType, setContentType] = useState('Info');

  const handleModal = () => {
    setIsVisible(!isVisible);
  };
  return (
    <>
      <FlatList />
      <FlatList />
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
            <TouchableOpacity
              onPress={() => {
                handleModal();
                setContentType('Info');
              }}
              style={styles.edit}>
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
            <TouchableOpacity
              onPress={() => {
                handleModal();
                setContentType('About');
              }}>
              <View style={styles.edit}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{color: '#D62196'}}> edit</Text>
              </View>
            </TouchableOpacity>
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
            <TouchableOpacity
              onPress={() => {
                handleModal();
                setContentType('Work');
              }}>
              <View style={styles.edit}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{color: '#D62196'}}> edit</Text>
              </View>
            </TouchableOpacity>
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
            <TouchableOpacity
              onPress={() => {
                handleModal();
                setContentType('Projects');
              }}>
              <View style={styles.edit}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{color: '#D62196'}}> edit</Text>
              </View>
            </TouchableOpacity>
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
            <TouchableOpacity
              onPress={() => {
                handleModal();
                setContentType('Education');
              }}>
              <View style={styles.edit}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{color: '#D62196'}}> edit</Text>
              </View>
            </TouchableOpacity>
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
            <TouchableOpacity
              onPress={() => {
                handleModal();
                setContentType('Documents');
              }}>
              <View style={styles.edit}>
                <Image
                  source={require('../assets/edit.png')}
                  style={styles.icon}
                  resizeMode="contain"
                />
                <Text style={{color: '#D62196'}}> edit</Text>
              </View>
            </TouchableOpacity>
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
        <TouchableOpacity onPress={handleModal}>
          <View style={{alignItems: 'flex-end'}}>
            <Image
              source={require('../assets/cancel.png')}
              style={styles.cancelIcon}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        {contentType == 'Info' && (
          <View style={styles.profileEdit}>
            <View style={styles.topInfo}>
              <Text>Product Designer</Text>
              <Text style={{marginTop: 13}}>PERSONAL INFORMATION</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Profile Picture{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <View style={styles.upload}>
                <Image
                  source={require('../assets/upload.png')}
                  style={styles.pngIcon}
                  resizeMode="contain"
                />
                <Text style={styles.upload}>UPLOAD FILE</Text>
              </View>
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Full name{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput style={styles.inputContainer} />
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Phone <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput style={styles.inputContainer} />
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Email <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput style={styles.inputContainer} />
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Birthday{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput style={styles.inputContainer} />
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Address{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput style={styles.inputContainer} />
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Gender{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput style={styles.inputContainer} />
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Location{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput style={styles.inputContainer} />
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Skills{' '}
                <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput style={styles.inputContainer} />
            </View>
            <View style={styles.details}>
              <Text style={styles.inputText}>
                Tools <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
              </Text>
              <TextInput style={styles.inputContainer} />
            </View>
            <View>
              <TouchableOpacity style={styles.saveBtn}>
                <Text style={{color: '#fff'}}> Save Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {contentType == 'About' && (
          <View style={styles.profileEdit}>
            <View style={{marginLeft: 10}}>
              <Text style={styles.heading}>About Me</Text>
              <TextInput style={styles.aboutContainer} />
              <TouchableOpacity style={styles.saveButton}>
                <Text style={{color: '#fff'}}> Save Edit</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        {contentType == 'Work' && (
          <View style={styles.profileEdit}>
            <View style={{marginLeft: 10}}>
              <Text style={styles.heading}>Work Experience</Text>
              <View style={styles.workContainer}>
                <TextInput style={styles.workInput} placeholder="Job Title" />
                <TextInput style={styles.workInput} placeholder="Company" />
                <TextInput style={styles.workInput} placeholder="Start Date" />
                <TextInput style={styles.workInput} placeholder="End Date" />
                <View style={styles.job}>
                  <Text>Job Description</Text>
                  <TextInput
                    style={styles.inputDesc}
                    placeholder="Job Description"
                  />
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={{color: '#fff'}}> Save Edit</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#F7D3EA',
                  width: 80,
                  height: 25,
                  marginRight: 30,
                  marginTop: 30,
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/plus.png')}
                    style={styles.plusIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{color: '#D62196', paddingTop: 2}}> Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {contentType == 'Projects' && (
          <View style={styles.profileEdit}>
            <View style={{marginLeft: 10}}>
              <Text style={styles.heading}>Projects</Text>
              <View style={styles.workContainer}>
                <TextInput
                  style={styles.workInput}
                  placeholder="Project Title"
                />
                <TextInput
                  style={styles.workInput}
                  placeholder="Project Link"
                />
                <View style={styles.job}>
                  <TextInput
                    style={styles.inputDesc}
                    placeholder="Project Description"
                  />
                </View>
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={{color: '#fff'}}> Save Edit</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#F7D3EA',
                  width: 80,
                  height: 25,
                  marginRight: 30,
                  marginTop: 30,
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/plus.png')}
                    style={styles.plusIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{color: '#D62196', paddingTop: 2}}> Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}

        {contentType == 'Education' && (
          <View style={styles.profileEdit}>
            <View style={{marginLeft: 10}}>
              <Text style={styles.heading}>Education Information</Text>
              <View style={styles.educContainer}>
                <TextInput style={styles.workInput} placeholder="School" />
                <TextInput style={styles.workInput} placeholder="Course" />
                <TextInput style={styles.workInput} placeholder="Start Date" />
                <TextInput style={styles.workInput} placeholder="End Date" />
              </View>
            </View>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TouchableOpacity style={styles.saveButton}>
                <Text style={{color: '#fff'}}> Save Edit</Text>
              </TouchableOpacity>
              <View
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#F7D3EA',
                  width: 80,
                  height: 25,
                  marginRight: 30,
                  marginTop: 30,
                }}>
                <TouchableOpacity>
                  <Image
                    source={require('../assets/plus.png')}
                    style={styles.plusIcon}
                    resizeMode="contain"
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={{color: '#D62196', paddingTop: 2}}> Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {contentType == 'Documents' && (
          <View style={styles.profileEdit}>
            <View style={styles.topInfo}>
              <Text style={{marginTop: 13}}>Documents</Text>
            </View>
            <View style={styles.docsDetails}>
              <TextInput
                style={styles.docsContainer}
                placeholder="Document Name"
              />
              <View style={styles.upload}>
                <Image
                  source={require('../assets/upload.png')}
                  style={styles.pngIcon}
                  resizeMode="contain"
                />
                <Text style={styles.upload}>UPLOAD FILE</Text>
              </View>
            </View>
            <View style={styles.docsDetails}>
              <TextInput
                style={styles.docsContainer}
                placeholder="Document Name"
              />
              <View style={styles.upload}>
                <Image
                  source={require('../assets/upload.png')}
                  style={styles.pngIcon}
                  resizeMode="contain"
                />
                <Text style={styles.upload}>UPLOAD FILE</Text>
              </View>
            </View>
            <View style={styles.docsDetails}>
              <TextInput
                style={styles.docsContainer}
                placeholder="Document Name"
              />
              <View style={styles.upload}>
                <Image
                  source={require('../assets/upload.png')}
                  style={styles.pngIcon}
                  resizeMode="contain"
                />
                <Text style={styles.upload}>UPLOAD FILE</Text>
              </View>
            </View>
            <View style={styles.docsDetails}>
              <TextInput
                style={styles.docsContainer}
                placeholder="Document Name"
              />
              <View style={styles.upload}>
                <Image
                  source={require('../assets/upload.png')}
                  style={styles.pngIcon}
                  resizeMode="contain"
                />
                <Text style={styles.upload}>UPLOAD FILE</Text>
              </View>
            </View>
            <View style={styles.docsDetails}>
              <TextInput
                style={styles.docsContainer}
                placeholder="Document Name"
              />
              <View style={styles.upload}>
                <Image
                  source={require('../assets/upload.png')}
                  style={styles.pngIcon}
                  resizeMode="contain"
                />
                <Text style={styles.upload}>UPLOAD FILE</Text>
              </View>
            </View>
            <View>
              <TouchableOpacity style={styles.saveBtn}>
                <Text style={{color: '#fff'}}> Save Edit</Text>
              </TouchableOpacity>
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
  topInfo: {
    marginLeft: 10,
    marginTop: 10,
  },
  heading: {
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 20,
    marginBottom: 20,
  },
  job: {
    marginTop: 60,
  },
  saveBtn: {
    backgroundColor: '#440F7C',
    marginTop: 28,
    alignSelf: 'center',
    width: 85,
    alignItems: 'center',
    padding: 6,
  },
  saveButton: {
    backgroundColor: '#440F7C',
    marginTop: 28,
    marginLeft: 9,
    width: 85,
    alignItems: 'center',
    padding: 6,
  },
  upload: {
    backgroundColor: '#E6E9EC',
    marginRight: 37,
    paddingTop: 4,
    paddingLeft: 4,
    paddingBottom: 4,
    flexDirection: 'row',
  },
  details: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  docsDetails: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 30,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  profileEdit: {
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    height: '90%',
    backgroundColor: '#fff',
    alignSelf: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
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
  pngIcon: {
    width: 30,
    height: 17,
    marginTop: 3,
  },
  plusIcon: {
    width: 30,
    height: 7,
    // marginTop: 1,
    padding: 10,
  },
  cancelIcon: {
    width: 25,
    height: 30,
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
  inputText: {
    fontSize: 16,
    color: '#5E5873',
    marginTop: 10,
  },
  inputContainer: {
    height: 36,
    width: width * 0.5,
    borderWidth: 1,
    borderColor: '#5E5873',
    borderRadius: 6,
    marginRight: 7,
    marginTop: 2,
  },
  docsContainer: {
    height: 36,
    width: width * 0.4,
    borderWidth: 1,
    borderColor: '#5E5873',
    borderRadius: 6,
    marginRight: 7,
    marginTop: 2,
  },
  aboutContainer: {
    height: height * 0.5,
    width: width * 0.8,
    borderWidth: 0.4,
    borderColor: '#5E5873',
    borderRadius: 6,
    marginRight: 7,
    marginTop: 2,
  },
  workContainer: {
    height: height * 0.6,
    width: width * 0.8,
    borderWidth: 0.4,
    borderColor: '#5E5873',
    borderRadius: 6,
    marginRight: 7,
  },
  workInput: {
    height: 36,
    width: width * 0.7,
    borderWidth: 0.6,
    borderColor: '#5E5873',
    borderRadius: 6,
    marginRight: 7,
    marginBottom: 6,
    marginLeft: 8,
    marginTop: 8,
  },
  inputDesc: {
    height: height * 0.2,
    width: width * 0.7,
    borderWidth: 0.6,
    borderColor: '#5E5873',
    borderRadius: 6,
    marginRight: 7,
    marginBottom: 6,
    marginLeft: 8,
    marginTop: 8,
  },
  educContainer: {
    height: height * 0.35,
    width: width * 0.8,
    borderWidth: 0.4,
    borderColor: '#5E5873',
    borderRadius: 6,
    marginRight: 7,
  },
});
