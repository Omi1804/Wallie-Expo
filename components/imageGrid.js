import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MasonryFlashList } from "@shopify/flash-list";
import ImageCard from "./imageCard";
import { wp, getColumnCount } from "../helpers/comman";

//For masonarty layout of image grid we use FlashList of this site https://shopify.github.io/flash-list/
//read its docs for masonary layout

const ImageGrid = ({ images }) => {
  const columns = getColumnCount();

  return (
    <View style={styles.container}>
      <MasonryFlashList
        data={images}
        numColumns={columns}
        initialNumToRender={1000}
        contentContainerStyle={styles.listContainerStyle}
        renderItem={({ item, index }) => (
          <ImageCard
            item={item}
            index={index}
            columns={columns}
            // router={router}
          />
        )}
        estimatedItemSize={200}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 3,
    width: wp(100),
  },
  listContainerStyle: {
    paddingHorizontal: wp(4),
  },
});

export default ImageGrid;
