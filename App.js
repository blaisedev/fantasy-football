import * as React from "react";
import {WebView} from "react-native-webview";

export default function App() {
    return <WebView source={{uri: 'https://fantasy.premierleague.com'}}
                    style={{flex: 1, height: 2, marginTop: 20}}
    />

}