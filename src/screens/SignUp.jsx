import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useForm } from "react-hook-form";

import { login } from "../utils/assets";
import Icon from "react-native-vector-icons/FontAwesome";
import { signupSchema } from "../utils/yupSchema";
import { validateFormData } from "../utils/formValidation";



export default function SignUp({ navigation }) {
  const { control, handleSubmit } = useForm();
  const [validationErrors, setValidationErrors] = useState({});

  const handleValidation = async (data) => {
    await validateFormData(data, signupSchema, setValidationErrors, onSubmit);
  };

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data); // Access validated form data here
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={login} style={styles.image} />
        <Text variant="displaySmall">Create an Account</Text>
        <TextInput
          label="Full Name"
          control={control}
          name="fullName"
          style={styles.input}
        />
        {validationErrors.fullName && <Text>{validationErrors.fullName}</Text>}
        <TextInput
          label="Email"
          control={control}
          name="email"
          style={styles.input}
        />
        {validationErrors.email && <Text>{validationErrors.email}</Text>}
        <TextInput
          label="Password"
          control={control}
          name="password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
          style={styles.input}
        />
        {validationErrors.password && <Text>{validationErrors.password}</Text>}
        <TextInput
          label="Confirm Password"
          control={control}
          name="confirmPassword"
          right={<TextInput.Icon icon="eye" />}
          secureTextEntry
          style={styles.input}
        />
        {validationErrors.confirmPassword && <Text>{validationErrors.confirmPassword}</Text>}
        <Button
          style={styles.button}
          contentStyle={styles.buttonContent}
          mode="contained"
          icon={({ color, size }) => (
            <Icon name="arrow-right" size={size} color={color} />
          )}
          onPress={handleSubmit(handleValidation)}
        >
          Register Now
        </Button>
      </View>
      <View style={styles.loginContainer}>
        <Text>
          Already have an account?{" "}
          <Text
            style={styles.navigationButton}
            onPress={() => navigation.navigate("Login")}
          >
            Login
          </Text>
        </Text>
      </View>
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
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  navigationButton: {
    fontWeight: "bold",
    marginLeft: 5,
  },
});
