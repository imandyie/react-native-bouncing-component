/**
 * Bouncing Component
 * @author: Andy
 * @Url: https://www.cubui.com
 */

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BouncingComponent from './src/components/BouncingComponent';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BouncingComponent
          styles={{
            width: 50,
            height: 50,
            backgroundColor: 'black',
            borderRadius: 50,
          }}
          bouncingDistance={1.4}
        />

        <BouncingComponent
          bouncingDistance={1.4}
        >
          <Text
            style={{
              position: 'relative',
              top: 10,
            }}
          >
            Hello World
          </Text>
        </BouncingComponent>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
