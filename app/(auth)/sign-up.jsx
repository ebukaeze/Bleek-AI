import { Alert, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants/constants";
import { Redirect, router } from "expo-router";
import FormField from "../components/FormField";
import { useState } from "react";
import CustomButton from "../components/CustomButton";
import { Link } from "expo-router";
import { createUser } from "../../lib/appwrite";
import { useAuthContext } from "../../context/AuthContext";

const SignUp = () => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { isLoggedIn, setUser, setIsLoggedIn } = useAuthContext();
  const { username, email, password } = form;

  const submit = async () => {
    if (!email || !password || !username) {
      Alert.alert("Missing Field", "Please fill in all the fields");
    }
    setIsSubmitting(true);
    try {
      const result = await createUser(email, password, username);

      //set the result to global state
      setUser(result);
      setIsLoggedIn(true);

      console.log(result);
      //navigate to home
      router.replace("/home");
    } catch (error) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView style={{ height: "100%" }}>
        <View className="w-full items-center justify-center m-h-[85vh] py-8 px-4">
          <Text className="text-4xl text-secondary pt-4 font-bold">Bleek</Text>
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
            isLoading={isSubmitting}
          />
          <View className="w-full gap-2 justify-center pt-5 flex-row">
            <Text className="text-base text-white">
              Already have an account ?{" "}
              <Text className="text-secondary">
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
