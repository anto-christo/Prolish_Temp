import React from 'react';
import { View, Text, Button} from 'react-native';
// import { Constants } from 'expo';
import { StackNavigator } from 'react-navigation'; // 1.0.0-beta.14
import Activity1 from './components/Activity1';
import Activity2 from './components/Activity2';
import Activity3 from './components/Activity3';
import Activity4 from './components/Activity4';

const HomeScreen = ({ navigation }) => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Home Screen{"\n"}{"\n"}</Text>
    <Button
      onPress={() => navigation.navigate('Details')}
      title="Details"
    />
    <Text>{"\n"}</Text>
    <Button
      onPress={() => navigation.navigate('Activity1')}
      title="Activity1"
    />
    <Text>{"\n"}</Text>
    <Button
      onPress={() => navigation.navigate('Activity2')}
      title="Activity2"
    />
    <Text>{"\n"}</Text>
    <Button
      onPress={() => navigation.navigate('Activity3')}
      title="Activity3"
    />
    <Text>{"\n"}</Text>
    <Button
      onPress={() => navigation.navigate('Activity4')}
      title="Activity4"
    />
  </View>
);

const DetailsScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Details Screen</Text>
  </View>
);

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Home',
    },
  },
  Details: {
    screen: DetailsScreen,
    navigationOptions: {
      headerTitle: 'Details',
    },
  },
  Activity1: {
    screen: Activity1,
    navigationOptions: {
      headerTitle: 'Activity1',
    },
  },
  Activity2: {
    screen: Activity2,
    navigationOptions: {
      headerTitle: 'Activity2',
    },
  },
  Activity3: {
    screen: Activity3,
    navigationOptions: {
      headerTitle: 'Activity3',
    },
  },
  Activity4: {
    screen: Activity4,
    navigationOptions: {
      headerTitle: 'Activity4',
    },
  },
});

export default RootNavigator;