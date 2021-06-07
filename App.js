import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import RNImmediatePhoneCall from 'react-native-immediate-phone-call';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      callNo: '05448355136'
    };
    //burada uygulama açılır açılmaz buton olmaksızıb tetiklenebiliyor...
    // RNImmediatePhoneCall.immediatePhoneCall(this.state.callNo);
  }

    //bu fonksiyonu bilerek yazdım uygulama açıkken hemen tetikleniyor mu diye...
    //şimdilik butonla tetikledim ama biz apiden gelen duruma göre tetiklicez
  calling = () => {
    //apiden gelen istekteki numara ile arama yapılacak -->callNo
    RNImmediatePhoneCall.immediatePhoneCall(this.state.callNo);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="Arama yap" onPress={() => this.calling()} />
      </View>
    );
  }
}

export default App;
