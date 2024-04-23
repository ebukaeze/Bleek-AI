import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants/constants";
import { Video, ResizeMode } from "expo-av";

const VideoCard = ({ video: { title, thumbnail, video, creator } }) => {
  const { avatar, username } = creator;

  const [play, setPLay] = useState(false);
  return (
    <View className="flex-col items-center px-2 mb-12">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-1 flex-row">
          <View
            className="w-12 h-12 rounded-lg border border-secondary justify-center
                  items-center p-0.5"
          >
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg"
              resizeMode="contain"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1">
            <Text
              className="text-white font-psemibold text-sm"
              numberOfLines={1}
            >
              {title}
            </Text>
            <Text
              className="text-xs text-gray-100 font-pregular"
              numberOfLines={1}
            >
              {username}
            </Text>
          </View>
        </View>
        <Image source={icons.menu} className="w-5 h-5" resizeMode="contain" />
      </View>
      {play ? (
        <Video
          source={{ uri: video }}
          className="w-full h-60 rounded-xl mt-3"
          resizeMode={ResizeMode.COVER}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPLay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => setPLay(true)}
          className="w-full h-60 justify-center items-center relative rounded-xl mt-3"
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3"
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-16 h-16 absolute z-10"
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
