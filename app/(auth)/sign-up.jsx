import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/constants";
import FormField from "../components/FormField";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";

const submit = () => {};

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmtting, setIsSubmtting] = useState(false);
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView style={{ height: "100%" }}>
        <View className="w-full items-center justify-center m-h-[85vh] py-8 px-4">
          <Text className="text-4xl text-secondary-200 pt-4 font-bold">
            Bleek
          </Text>
          <Text className="text-xl text-white mt-4">Sign Up to Bleek</Text>
          <View className="mt-4 w-full">
            <FormField
              title="Username"
              value={form.username}
              handleChangeText={(e) => setForm({ ...form, username: e })}
              addedStyle="mt-10"
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              addedStyle="mt-7"
              keyboardType="email-address"
            />
            <FormField
              title="password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              addedStyle="mt-7"
            />
          </View>
          <CustomButton
            title="sign up"
            handlePress={submit}
            containerStyle="mt-7"
            isLoading={isSubmtting}
          />
          <View className="w-full gap-2 justify-center pt-5 flex-row">
            <Text className="text-base text-white">
              Already have an account ?{" "}
              <Text className="text-secondary-100">
                <Link href="/sign-in">Sign In</Link>
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
