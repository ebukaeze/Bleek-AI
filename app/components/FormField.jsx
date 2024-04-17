import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../../constants/constants";

const FormField = ({
  title,
  value,
  handleChangeText,
  addedStyle,
  placeholder,
  keyboardType,
  ...props
}) => {
  const [showPassword, setShowpassword] = useState(false);

  return (
    <View className={`text-gray-100 text-base ${addedStyle}`}>
      <Text className={`text-gray-100 text-base px-2 pb-2`}>{title}</Text>
      <View
        className="w-full h-16 bg-black-100 border-black-100 border-2 rounded-xl
 px-3 focus:border-secondary-100 flex-row items-center"
      >
        <TextInput
          className="flex-1 text-base font-psemibold text-white items-start h-full w-full"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleChangeText}
          keyboardType={keyboardType}
          secureTextEntry={title == "password" && !showPassword}
        />
        {title == "password" && (
          <TouchableOpacity onPress={() => setShowpassword(!showPassword)}>
            <Image
              source={showPassword ? icons.eye : icons.eyeHide}
              className="w-5 h-5"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
