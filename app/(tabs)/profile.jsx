import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import EmpyList from "../components/EmpyList";
import { getUserPosts, signOut } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../components/VideoCard";
import { useAuthContext } from "../../context/AuthContext";
import { icons } from "../../constants/constants";
import InfoBox from "../components/InfoBox";
import { router } from "expo-router";
import CustomButton from "../components/CustomButton";

const Profile = () => {
  const { user, setUser, setIsLoggedIn } = useAuthContext();

  const { data: posts, refetch } = useAppwrite(() => getUserPosts(user.$id));

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
      setIsLoggedIn(false);

      router.replace("/sign-up");
    } catch (error) {
      throw new Error(error);
    }
  };

  return (
    <SafeAreaView className="bg-[#161622] w-full h-full px-3 pt-10">
      {user !== null ? (
        <>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.$id}
            renderItem={({ item }) => <VideoCard video={item} key={item.$id} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={() => (
              <View className="w-full items-center justify-center mt-6 mb-12 px-4">
                <TouchableOpacity
                  className="w-full h-4 justify-end items-end mb-10"
                  onPress={logout}
                >
                  {user !== null && (
                    <Image
                      source={icons.logout}
                      resizeMode="contain"
                      className="w-5 h-5 mt-12"
                    />
                  )}
                </TouchableOpacity>
                <View className="w-16 h-16 border border-secondary-100 rounded-lg items-center justify-center">
                  <Image
                    source={{ uri: user?.avatar }}
                    resizeMode="cover"
                    className="w-[90%] h-[90%] rounded-lg"
                  />
                </View>
                <InfoBox
                  title={user?.username}
                  containerStyles="mt-5"
                  titleStyles="text-lg"
                />
                <View className="mt-5 flex-row">
                  <InfoBox
                    title={posts.length || 0}
                    subtitle="Posts"
                    containerStyles="mr-10"
                    titleStyles="text-lg"
                  />
                  <InfoBox
                    title="1.2k"
                    subtitle="Followers"
                    titleStyles="text-xl"
                  />
                </View>
              </View>
            )}
            ListEmptyComponent={() => (
              <EmpyList
                title="No videos found"
                subtitle="No videos found for this search query"
              />
            )}
          />
        </>
      ) : (
        <>
          <View className="w-full h-full items-center justify-center">
            <Text className="text-3xl text-white">Guest</Text>
            <Text className="text-3xl text-white">
              Apparently, you're a guest. Please Sign in
            </Text>
            <CustomButton
              title="continue with Email"
              handlePress={() => router.push("/sign-up")}
              containerStyle="w-full mt-7"
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Profile;
