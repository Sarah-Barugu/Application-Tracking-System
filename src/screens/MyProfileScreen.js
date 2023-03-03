import {Formik} from 'formik';
import * as yup from 'yup';

import React, {useState, useEffect} from 'react';
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

import {
  getUserInfo,
  updateUserInfo,
  createAboutMe,
  getAboutMe,
  updateWork,
  getWork,
  createWork,
} from '../actions/user';

const userValidationSchema = yup.object().shape({
  fullName: yup.string().required('Full Name is required'),
  phone: yup.number().required('Phone number is required'),
  birthday: yup.string().required('Birthday is required'),
  address: yup.string().required('Address is required'),
  gender: yup.string().required('Gender is required'),
  location: yup.string().required('Location is required'),
  skills: yup.string().required('Skills is required'),
  tools: yup.string().required('Tools is required'),
});

const aboutMeValidationSchema = yup.object().shape({
  about: yup.string().required('Tell us about yourself it is required'),
});

const workValidationSchema = yup.object().shape({
  jobTitle: yup.string().required('Job Title is required'),
  companyName: yup.string().required('Company name is required'),
  jobDescription: yup.string().required('Job Description is required'),
  startDate: yup.number().required('Start date is required'),
  endDate: yup.number().required('End date is required'),
});

export default function MyProfileScreen({navigation}) {
  const percent = 0.356;
  const [isVisible, setIsVisible] = useState(false);
  const [contentType, setContentType] = useState('Info');
  let skillArr = [];
  let toolArr = [];

  const handleModal = () => {
    setIsVisible(!isVisible);
  };

  const [profile, setProfile] = useState({
    phone: '',
    birthday: '',
    address: '',
    gender: '',
    location: '',
  });

  console.log({profile});

  const updateProfile = async payload => {
    // console.log(payload);
    const response = await updateUserInfo(payload);
    if (response && response.data) {
      // console.log(response.status);
    }
  };

  const aboutMe = async payload => {
    const response = await createAboutMe(payload);
    if (response && response.data) {
      // console.log(response.status);
    }
  };

  const workExp = async payload => {
    const response = await updateWork(payload);
    if (response && response.data) {
      // console.log(response.status);
    }
  };

  const handleSkill = item => {
    console.log(item);
    skillArr.push(item);
  };

  const handleTools = item => {
    console.log(item);
    toolArr.push(item);
  };

  const fetchData = async () => {
    const userData = await getUserInfo();
    // console.log('We got your data for you', userData.user);
    setProfile(userData.user);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchAboutMe = async () => {
    const userData = await getAboutMe();
    // console.log('We got your data for you', userData.user);
    setProfile(userData);
  };

  useEffect(() => {
    // fetchAboutMe();
  }, []);

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
            <Text style={styles.title}>
              {profile ? profile.fullName : 'User'}
            </Text>
          </View>
          <View style={styles.pair}>
            <View style={styles.direction}>
              <Text>Phone:</Text>
              <Text>{profile ? profile.phone : 'N/A'}</Text>
            </View>
            <View style={styles.direction}>
              <Text>Birthday:</Text>
              <Text>{profile ? profile.birthday : 'N/A'}</Text>
            </View>
            <View style={styles.direction}>
              <Text>Address:</Text>
              <Text>{profile ? profile.address : 'N/A'}</Text>
            </View>
            <View style={styles.direction}>
              <Text>Gender:</Text>
              <Text>{profile ? profile.gender : 'N/A'}</Text>
            </View>
            <View style={styles.direction}>
              <Text>Location:</Text>
              <Text>{profile ? profile.location : 'N/A'}</Text>
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{marginTop: 8}}>
              <Text style={{color: '#5E5873', fontSize: 19}}>Skills</Text>
            </View>
            <View style={styles.key}>
              {profile.skills.map(text => (
                <Text style={styles.grid4}>{text}</Text>
              ))}
            </View>
          </View>
          <View style={{flexDirection: 'column'}}>
            <View style={{marginTop: 8}}>
              <Text style={{color: '#5E5873', fontSize: 19}}>Tools</Text>
            </View>
            <View style={styles.key}>
              {profile.tools.map(text => (
                <Text style={styles.grid4}>{text}</Text>
              ))}
            </View>
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
            {' '}
            {profile ? profile.about : 'N/A'}
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
          <Formik
            initialValues={{
              fullName: '',
              phone: '',
              birthday: '',
              address: '',
              gender: '',
              location: '',
              skills: '',
              tools: '',
            }}
            validateOnMount={true}
            onSubmit={updateProfile}
            validationSchema={userValidationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid,
              setFieldValue,
            }) => (
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
                  <TextInput
                    style={styles.inputContainer}
                    onChangeText={handleChange('fullName')}
                    onBlur={handleBlur('fullName')}
                    value={values.fullName}
                    placeholder="Full Name"
                    autoCapitalize="none"
                  />
                </View>
                {errors.fullName && touched.fullName && (
                  <Text style={styles.textFailed}>{errors.fullName}</Text>
                )}
                <View style={styles.details}>
                  <Text style={styles.inputText}>
                    Phone{' '}
                    <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
                  </Text>
                  <TextInput
                    style={styles.inputContainer}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
                    value={values.phone}
                    placeholder="Phone Number"
                    autoCapitalize="none"
                  />
                </View>
                {errors.phone && touched.phone && (
                  <Text style={styles.textFailed}>{errors.phone}</Text>
                )}
                <View style={styles.details}>
                  <Text style={styles.inputText}>
                    Birthday{' '}
                    <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
                  </Text>
                  <TextInput
                    style={styles.inputContainer}
                    onChangeText={handleChange('birthday')}
                    onBlur={handleBlur('birthday')}
                    value={values.birthday}
                    placeholder="Birthday"
                    autoCapitalize="none"
                  />
                </View>
                {errors.birthday && touched.birthday && (
                  <Text style={styles.textFailed}>{errors.birthday}</Text>
                )}
                <View style={styles.details}>
                  <Text style={styles.inputText}>
                    Address{' '}
                    <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
                  </Text>
                  <TextInput
                    style={styles.inputContainer}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    value={values.address}
                    placeholder="Address"
                    autoCapitalize="none"
                  />
                </View>
                {errors.address && touched.address && (
                  <Text style={styles.textFailed}>{errors.address}</Text>
                )}
                <View style={styles.details}>
                  <Text style={styles.inputText}>
                    Gender{' '}
                    <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
                  </Text>
                  <TextInput
                    style={styles.inputContainer}
                    onChangeText={handleChange('gender')}
                    onBlur={handleBlur('gender')}
                    value={values.gender}
                    placeholder="Gender"
                    autoCapitalize="none"
                  />
                </View>
                {errors.gender && touched.gender && (
                  <Text style={styles.textFailed}>{errors.gender}</Text>
                )}
                <View style={styles.details}>
                  <Text style={styles.inputText}>
                    Location{' '}
                    <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
                  </Text>
                  <TextInput
                    style={styles.inputContainer}
                    onChangeText={handleChange('location')}
                    onBlur={handleBlur('location')}
                    value={values.location}
                    placeholder="Location"
                    autoCapitalize="none"
                  />
                </View>
                {errors.location && touched.location && (
                  <Text style={styles.textFailed}>{errors.location}</Text>
                )}
                <View style={styles.details}>
                  <Text style={styles.inputText}>
                    Skills{' '}
                    <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                      style={{...styles.inputContainer, width: width * 0.3}}
                      onChangeText={handleChange('skills')}
                      onBlur={handleBlur('skills')}
                      value={values.skills}
                      placeholder="Skills"
                      autoCapitalize="none"
                    />
                    {/* {console.log(values)} */}
                    <TouchableOpacity
                      onPress={() => {
                        handleSkill(values.skills);
                        setFieldValue('skills', '');
                      }}
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#F7D3EA',
                        width: width * 0.2,
                        alignItems: 'center',
                        height: 36,
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/plus.png')}
                        style={styles.plusIcon}
                        resizeMode="contain"
                      />
                      <Text style={{color: '#D62196'}}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.key}>
                  {/* {console.log(skillArr)} */}
                  {skillArr.map(text => (
                    <Text style={styles.grid4}>{text}</Text>
                  ))}
                </View>
                {errors.skills && touched.skills && (
                  <Text style={styles.textFailed}>{errors.skills}</Text>
                )}
                <View style={styles.details}>
                  <Text style={styles.inputText}>
                    Tools{' '}
                    <Text style={{...styles.inputText, color: 'red'}}>*</Text>{' '}
                  </Text>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <TextInput
                      style={{...styles.inputContainer, width: width * 0.3}}
                      onChangeText={handleChange('tools')}
                      onBlur={handleBlur('tools')}
                      value={values.tools}
                      placeholder="Tools"
                      autoCapitalize="none"
                    />
                    {/* {console.log(values)} */}
                    <TouchableOpacity
                      onPress={() => {
                        handleTools(values.tools);
                        setFieldValue('tools', '');
                      }}
                      style={{
                        flexDirection: 'row',
                        backgroundColor: '#F7D3EA',
                        width: width * 0.2,
                        alignItems: 'center',
                        height: 36,
                        justifyContent: 'center',
                      }}>
                      <Image
                        source={require('../assets/plus.png')}
                        style={styles.plusIcon}
                        resizeMode="contain"
                      />
                      <Text style={{color: '#D62196'}}>Add</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.key}>
                  {/* {console.log(toolArr)} */}
                  {toolArr.map(text => (
                    <Text style={styles.grid4}>{text}</Text>
                  ))}
                </View>
                {errors.tools && touched.tools && (
                  <Text style={styles.textFailed}>{errors.tools}</Text>
                )}
                <View>
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                    style={[
                      styles.saveBtn,
                      {backgroundColor: isValid ? '#440F7C' : 'grey'},
                    ]}>
                    <Text style={{color: '#fff'}}> Save Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
        )}
        {contentType == 'About' && (
          <Formik
            initialValues={{
              about: '',
            }}
            validateOnMount={true}
            onSubmit={aboutMe}
            validationSchema={aboutMeValidationSchema}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid,
            }) => (
              <View style={styles.profileEdit}>
                <View style={{marginLeft: 10}}>
                  <Text style={styles.heading}>About Me</Text>
                  <TextInput
                    style={styles.aboutContainer}
                    onChangeText={handleChange('about')}
                    onBlur={handleBlur('about')}
                    value={values.about}
                    placeholder="Tell Us About Yourself"
                    autoCapitalize="none"
                  />
                  {errors.about && touched.about && (
                    <Text style={styles.textFailed}>{errors.about}</Text>
                  )}
                  <TouchableOpacity
                    disabled={!isValid}
                    onPress={() => handleSubmit()}
                    style={[
                      styles.saveBtn,
                      {backgroundColor: isValid ? '#440F7C' : 'grey'},
                    ]}>
                    <Text style={{color: '#fff'}}> Save Edit</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          </Formik>
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
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  backgroundColor: '#F7D3EA',
                  width: 80,
                  height: 25,
                  marginRight: 30,
                  marginTop: 30,
                }}>
                <Image
                  source={require('../assets/plus.png')}
                  style={styles.plusIcon}
                  resizeMode="contain"
                />
                <Text style={{color: '#D62196', paddingTop: 2}}> Add</Text>
              </TouchableOpacity>
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
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
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
              <TouchableOpacity
                disabled={!isValid}
                onPress={() => {
                  handleSubmit();
                }}
                style={styles.saveBtn}>
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
    fontSize: 20,
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
  textFailed: {
    alignSelf: 'center',
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
