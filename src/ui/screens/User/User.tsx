import React, {FC} from 'react';
import {Text, View, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const User: FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Text>User</Text>
    </View>
  );
};

export default User;
