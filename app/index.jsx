import { Image, ScrollView, Text, View } from "react-native";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants/constants";
import CustomButton from "./components/CustomButton";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";
export default function Page() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full min-h-[85vh] h-full items-center justify-center px-4">
          <Text className="text-3xl text-secondary-200 pt-4 font-bold">
            Bleek
          </Text>
          <Image
            source={images.cards}
            resizeMode="contain"
            className="max-w-[380px] w-full h-[300px]"
          />
          <View className="relative pt-5">
            <Text className="text-3xl text-white text-center">
              Discover endless oppurtunities with{" "}
              <Text className="text-secondary-200">Bleek</Text>
            </Text>
            <Image
              source={images.path}
              resizeMode="contain"
              className="w-[136px] h-[15px] absolute -bottom-2 -right-8"
            />
          </View>
          <Text className="text-base text-[#868666] mt-8">
            Where creativity meets innovation: embark in a journey of endless
            exploration with Bleek{" "}
          </Text>
          <CustomButton
            title="continue with Email"
            handlePress={() => router.push("/sign-up")}
            containerStyle="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
