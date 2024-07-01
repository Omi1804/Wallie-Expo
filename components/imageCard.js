import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import React from "react";
import { theme } from "../constants/theme";
import { wp, getImageSize } from "../helpers/comman";

//In images we are not using normal Image compoenet form the native but a special Image compoentn from expo images - https://docs.expo.dev/versions/latest/sdk/image/
//These images are very optimized in cached and size and loading

const ImageCard = ({ item, index, columns, router }) => {
  const getImageHeight = () => {
    let { imageHeight: height, imageWidth: width } = item;
    return { height: getImageSize(height, width) };
  };

  // purpose of this : If last in the row then margin right will not be applied
  const isLastInRow = () => {
    return (index + 1) % columns === 0;
  };

  return (
    <Pressable
      style={[styles.imageWrapper, !isLastInRow() && styles.spacing]}
      onPress={() =>
        router.push({ pathname: "home/image", params: { ...item } })
      }
    >
      <Image
        source={item?.webformatURL}
        style={[styles.image, getImageHeight()]}
        transition={100}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  imageWrapper: {
    borderRadius: theme.radius.xl,
    backgroundColor: theme.colors.grayBG,
    overflow: "hidden",
    borderCurve: "continuous",
    marginBottom: wp(2),
  },
  spacing: {
    marginRight: wp(2),
  },
});

export default ImageCard;
