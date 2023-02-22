// import React, {useState, useEffect, useRef} from 'react';
// import {View, Animated, Modal, StyleSheet} from 'react-native';

// // const ModalPopup = ({visible, children}) => {
// //   const [showModal, setShowModal] = useState(visible);
// //   const scaleValue = useRef(new Animated.Value(0)).current;
// //   useEffect(() => {
// //     toggleModal();
// //   }, [visible]);
// //   const toggleModal = () => {
// //     if (visible) {
// //       setShowModal(true);
// //       Animated.spring(scaleValue, {
// //         toValue: 1,
// //         duration: 300,
// //         useNativeDriver: true,
// //       }).start();
// //     } else {
// //       setTimeout(() => setShowModal(false), 200);
// //       Animated.timing(scaleValue, {
// //         toValue: 0,
// //         duration: 300,
// //         useNativeDriver: true,
// //       }).start();
// //     }
// //   };
// //   return (
// //     <Modal visible={true}>
// //       <View style={styles.modalBackGround}>
// //         <Animated.View
// //           style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
// //           {children}
// //         </Animated.View>
// //       </View>
// //     </Modal>
// //   );
// // };

// export default function  AppModal({}){
//   return(<View style={{backgroundColor:'#000',height:500,width:500}}></View>)
// }

// const styles = StyleSheet.create({
//   modalBackGround: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modalContainer: {
//     width: '80%',
//     backgroundColor: 'white',
//     paddingHorizontal: 20,
//     paddingVertical: 30,
//     borderRadius: 20,
//     elevation: 20,
//   },
//   header: {
//     width: '100%',
//     height: 40,
//     alignItems: 'flex-end',
//     justifyContent: 'center',
//   },
//   inputContainer: {
//     height: 56,
//     width: width * 0.9,
//     borderWidth: 1,
//     borderColor: '#5E5873',
//     borderRadius: 6,
//     paddingHorizontal: 8,
//     marginTop: 5,
//   },
//   inputText: {
//     fontSize: 16,
//     color: '#5E5873',
//     marginTop: 40,
//   },
//   key: {
//     // flexDirection
//   },
// });
