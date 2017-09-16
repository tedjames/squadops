import React from 'react';
import { StyleSheet, Text, View, WebView, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={{ height: 300  }}>
          <WebView
            style={{ width: '100%', alignSelf: 'center', transform: [{ scale: 1 }] }}
            javaScriptEnabled
            scrollEnabled={false}
            allowsInlineMediaPlayback
            source={{uri: 'http://player.twitch.tv/?video=172314591&muted=true&playsinline=true'}}
          />
        </View>
        <View style={{ height: 300  }}>
          <WebView
            style={{ width: '100%', alignSelf: 'center', transform: [{ scale: 1 }] }}
            javaScriptEnabled
            width={200}
            scalesPageToFit
            source={{uri: 'https://www.twitch.tv/drdisrespectlive/chat?darkpopout'}}
          />
        </View>
        <View style={{ height: 300  }}>
          <WebView
            style={{ width: '100%', alignSelf: 'center', transform: [{ scale: 0.8 }] }}
            javaScriptEnabled
            scrollEnabled={false}
            source={{uri: 'https://www.youtube.com/embed/BWL9qpqVxRE?rel=0&autoplay=1&showinfo=1&controls=0'}}
          />
        </View>
        <View style={{ height: 300  }}>
          <WebView
            style={{ width: '100%', alignSelf: 'center', transform: [{ scale: 0.8 }] }}
            javaScriptEnabled
            scrollEnabled={false}
            allowsInlineMediaPlayback
            source={{uri: 'http://player.twitch.tv/?channel=drdisrespectlive&muted=true&playsinline=true'}}
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'
  },
});
