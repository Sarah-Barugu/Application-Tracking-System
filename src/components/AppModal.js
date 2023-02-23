import {View, Text} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

export default function AppModal({children, isVisible, onBackdropPress}) {
  return (
    <Modal isVisible={isVisible} onBackdropPress={onBackdropPress}>
      <View>{children}</View>
    </Modal>
  );
}
