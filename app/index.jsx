import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Page() {
  return (
    <View className="flex flex-1 items-center p-6 justify-center">
      <View className="flex flex-1 items-center justify-center max-w-screen-[960px] my-auto">
        <Text className="text-6xl font-bold font-pblack">Bleek Ai</Text>
        <Link href="/profile" className="text-blue-600">
          Go to profile
        </Link>
      </View>
    </View>
  );
}
