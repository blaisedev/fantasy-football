import * as React from "react";
import {Platform, Text} from 'react-native';
import {WebView} from "react-native-webview";
import WebText from "react-native-web/dist/exports/Text";

export default function App() {
    return (Platform.OS === 'web' ? <WebText>Not supported in web</WebText> :
            <WebView source={{uri: 'https://fantasy.premierleague.com'}}
                     style={{flex: 1, height: 2, marginTop: 20}}
            />
    )
}