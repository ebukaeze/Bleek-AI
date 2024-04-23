import { View, Text, Image } from "react-native";
import React from "react";
import { images } from "../../constants/constants";
import CustomButton from "./CustomButton";
import { router } from "expo-router";

const EmpyList = ({ title, subtitle }) => {
  return (
    <View className="w-full px-4 items-center justify-center">
      <Image
        source={images.empty}
        resizeMode="contain"
        className="w-[270px] h-[217px]"
      />
      <Text className="text-xl text-center font-psemibold text-white mt-2">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>

      <CustomButton
        title="Create video"
        containerStyle="w-full my-4"
        handlePress={() => router.push("/create")}
      />
    </View>
  );
};

export default EmpyList;
