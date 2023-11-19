import React, { useState } from "react";
import { View, Image, StyleSheet, ScrollView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import Icon from "react-native-vector-icons/FontAwesome";
import { login } from "../../utils/assets";
import { useForm, Controller } from "react-hook-form";
import { loginSchema } from "../../utils/yupSchema";
import { validateFormData } from "../../utils/formValidation";
export default function Login({ navigation }) {
  const { control, handleSubmit } = useForm();
  const [validationErrors, setValidationErrors] = useState({});

   const handleValidation = async (data) => {
    await validateFormData(data, loginSchema, setValidationErrors, onSubmit);
  };

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data); // Access form data here
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
              right={<TextInput.Icon  icon="eye" />}
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
            onPress={() => navigation.push("SignUp")}
          >
            Register Now
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
