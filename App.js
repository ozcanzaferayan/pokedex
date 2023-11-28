import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./src/features/HomeScreen";
import { Provider } from "react-redux";
import store from "./src/app/store";

const App = () => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};

export default App;
