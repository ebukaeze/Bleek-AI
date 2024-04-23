import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants/constants";
import { router, usePathname } from "expo-router";

const SearchInput = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState(initialQuery || "");
  return (
    <View
      className="w-full h-16 bg-black-100 border-black-100 border-2 rounded-xl
 px-3 focus:border-secondary-100 flex-row items-center"
    >
      <TextInput
        className="flex-1 text-base font-pregular text-white items-start h-full w-full mt-0.5"
        value={query}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={(e) => setQuery(e)}
      />

      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing Query",
              "Please input a text to search across the database"
            );
          }
          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
