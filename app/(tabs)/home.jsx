import { View, Text, FlatList, RefreshControl } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "../components/SearchInput";
import Trending from "../components/Trending";
import EmpyList from "../components/EmpyList";
import { getAllPosts, getLatestPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../components/VideoCard";

const Home = () => {
  const { data: posts, isLoading, refetch } = useAppwrite(getAllPosts);
  const { data: latestVids } = useAppwrite(getLatestPosts);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = async () => {
    setRefreshing(true);
    //refresh the videos => if any new videos
    await refetch();
    setRefreshing(false);
  };

  return (
    <SafeAreaView className="bg-[#161622] w-full h-full px-3">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => <VideoCard video={item} key={item.$id} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View className="my-2 space-y-2">
            <View className="justify-between items-start flex-row mb-6">
              <View>
                <Text className="font-pmedium text-sm text-gray-100">
                  Welcome Back!
                </Text>
                <Text className="text-2xl font-psemibold text-white">
                  Jigsawyer
                </Text>
              </View>
              <View>
                <Text className="text-xl text-[#DB1A5A] font-pmedium">
                  Bleek
                </Text>
              </View>
            </View>
            <SearchInput />
            <View className="w-full flex-1 pt-5 pb-8">
              <Text className="text-lg font-pregular text-gray-200 mb-3">
                Latest Videos
              </Text>
            </View>
            <Trending posts={latestVids} />
          </View>
        )}
        ListEmptyComponent={() => (
          <EmpyList
            title="No videos found"
            subtitle="Be the first one to upload a video"
          />
        )}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />
    </SafeAreaView>
  );
};

export default Home;
