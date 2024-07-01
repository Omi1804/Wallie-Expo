import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const _layout = () => {
  //installing bottomsheetModal for detailed filters
  //it also uses gestureahandlroot
  //to install this go tohttps://ui.gorhom.dev/components/bottom-sheet/
  //first install the bottom sheet modal then the dependencies

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="home/index" options={{ headerShown: false }} />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
};

export default _layout;
