// import React, {useState, useEffect, useRef} from 'react';
// import {
//   View,
//   StyleSheet,
//   Button,
//   Image,
//   Text,
//   TouchableOpacity,
//   Animated,
// } from 'react-native';
// import {Modals} from '../components';

// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
//       <Modals visible={true}>
//         <View style={{alignItems: 'center'}}>
//           <View style={styles.header}>
//             <TouchableOpacity onPress={() => setVisible(false)}>
//               <Image
//                 source={require('./assets/cancel.png')}
//                 style={{height: 30, width: 30}}
//               />
//             </TouchableOpacity>
//           </View>
//         </View>
//         <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
//           <View style={styles.key}>
//             <Text>Product Designer</Text>
//             <Text>PERSONAL INFORMATION</Text>
//             <View>
//               <Text>
//                 Profile Picture
//                 <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//             <View>
//               <Text>
//                 Full name{' '}
//                 <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//             <View>
//               <Text>
//                 Phone <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//             <View>
//               <Text>
//                 Email <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//             <View>
//               <Text>
//                 Birthday{' '}
//                 <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//             <View>
//               <Text>
//                 Address{' '}
//                 <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//             <View>
//               <Text>
//                 Gender{' '}
//                 <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//             <View>
//               <Text>
//                 Location{' '}
//                 <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//             <View>
//               <Text>
//                 Skills{' '}
//                 <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//             <View>
//               <Text>
//                 Tools <Text style={{...styles.inputText, color: 'red'}}>*</Text>
//               </Text>
//               <TextInput style={styles.inputContainer} />
//             </View>
//           </View>
//         </View>
//       </Modals>
//       <Button title="Open Modal" onPress={() => setVisible(true)} />
//     </View>
//   );
// };

// export default App;
