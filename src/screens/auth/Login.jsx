import React, { useEffect, useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";

import { useForm, Controller } from "react-hook-form";
import { loginSchema } from "../../utils/yupSchema";
import { validateFormData } from "../../utils/formValidation";
import { login } from "../../utils/assets";
import axios from "axios";
import { setUser } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { getUserProfile, loginAPI } from "../../services/auth";
import ErrorMessage from "../../components/ErrorMessage";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login({}) {
  const { control, handleSubmit } = useForm();
  const [validationErrors, setValidationErrors] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = await AsyncStorage.getItem("token"); // Get token from AsyncStorage
        if (token) {
          const responseData = await getUserProfile(token);
          dispatch(setUser(responseData.user));
          navigation.navigate("Tab");
        } else {
          // Handle case where token is not available (e.g., user not authenticated)
        }
      } catch (error) {
       
      }
    };

    fetchUserProfile();
  }, [dispatch]); // Dependency array: re-run when 'dispatch' changes

  const handleValidation = async (data) => {
    try {
      await validateFormData(data, loginSchema, setValidationErrors, onSubmit);
    } catch (error) {}
  };

  const onSubmit = async (data) => {
    try {
      const responseData = await loginAPI(data); // Call the loginAPI function
      dispatch(setUser(responseData.user));
      await AsyncStorage.setItem("token", responseData.token);

      navigation.navigate("Tab");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
      setVisible(true);
      console.log(error.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={login} style={styles.image} />
        <Text variant="displaySmall">Hello again</Text>
        <Text style={styles.text}>Welcome back, you've been missed</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Email"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              style={styles.input}
            />
          )}
          name="email"
          defaultValue=""
        />
        {validationErrors.email && <Text>{validationErrors.email}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Password"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              style={styles.input}
            />
          )}
          name="password"
          defaultValue=""
        />
        {validationErrors.password && <Text>{validationErrors.password}</Text>}
        <Button
          style={styles.button}
          contentStyle={styles.buttonContent}
          mode="contained"
          icon={({ color, size }) => (
            <Icon name="arrow-right" size={size} color={color} />
          )}
          onPress={handleSubmit(handleValidation)}
        >
          Sign In
        </Button>
      </View>
      <View style={styles.registerContainer}>
        <Text>
          Not a member?{" "}
          <Text
            style={styles.navigationButton}
            onPress={() => navigation.navigate("SignUp")}
          >
            Register Now
          </Text>
        </Text>
      </View>
      <ErrorMessage
        visible={visible}
        hideDialog={() => setVisible(false)}
        message={error}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    width: "90%",
  },
  button: {
    backgroundColor: "black",
    borderRadius: 10,
    width: "90%",
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: "row-reverse",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "gray",
    width: 150,
    textAlign: "center",
  },
  registerContainer: {
    flex: 1,
    alignItems: "center",
  },
  navigationButton: {
    fontWeight: "bold",
  },
});
