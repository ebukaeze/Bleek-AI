import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons, name } from "../../constants/constants";

const tabData = [
  {
    icon: icons.home,
    name: "home",
  },
  {
    icon: icons.plus,
    name: "create",
  },
  {
    icon: icons.bookmark,
    name: "bookmark",
  },
  {
    icon: icons.profile,
    name: "profile",
  },
];

const TabIcon = ({ icon, color, name, focused }) => (
  <View className="items-center justify-center gap-1.5">
    <Image
      source={icon}
      resizeMode="contain"
      tintColor={color}
      className="w-5 h-5 m-0"
    />
    <Text
      className={`${
        focused ? "font-psemibold" : "font-pregular"
      } capitalize text-xs text-[#CDCDE0]`}
    >
      {name}
    </Text>
  </View>
);
const TabLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#DB1A5A",
          tabBarInactiveTintColor: "#CDCDE0",
          tabBarStyle: {
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: "#232533",
            height: 64,
          },
        }}
      >
        {tabData.map((item, i) => (
          <Tabs.Screen
            key={i}
            name={`${item.name}`}
            options={{
              title: `${item.name}`,
              headerShown: false,
              tabBarIcon: ({ color, focused }) => (
                <TabIcon
                  icon={item.icon}
                  color={color}
                  name={`${item.name}`}
                  focused={focused}
                />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
};

export default TabLayout;

const styles = StyleSheet.create({});
