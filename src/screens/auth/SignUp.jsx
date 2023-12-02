import React, { useState } from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form'; // Added Controller import

import { login } from '../../utils/assets';
import { signupSchema } from '../../utils/yupSchema';
import { validateFormData } from '../../utils/formValidation';
import { signupAPI } from '../../services/auth';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import ErrorMessage from '../../components/ErrorMessage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setUser } from '../../redux/slices/authSlice';

export default function SignUp() {
  const { control, handleSubmit, formState } = useForm(); // Included formState to access errors
  const [validationErrors, setValidationErrors] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [visible, setVisible] = useState(false);
  const { isSubmitted, isSubmitting } = formState;

  const handleValidation = async (data) => {

    await validateFormData(data, signupSchema, setValidationErrors, onSubmit);
  };

  const onSubmit = async (data) => {
    try {
      const responseData = await signupAPI(data); // Call the signupAPI function
      dispatch(setUser(responseData.user));
      await AsyncStorage.setItem('token', responseData.token);
      data = {}
      navigation.navigate('Tab');
    } catch (error) {
      setError('Signup failed. Please check your details.');
      setVisible(true);
      console.log(error.message)
      
    }

  
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={login} style={styles.image} />
        <Text variant="displaySmall">Create an Account</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Full Name"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              style={styles.input}
            />
          )}
          name="name"
          defaultValue={""}
        />
        {/* {errors.name && <Text>{errors.name.message}</Text>} */}

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
          defaultValue={""}
        />
        {/* {errors.email && <Text>{errors.email.message} </Text>} */}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Password"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              style={styles.input}
              secureTextEntry
            />
          )}
          name="password"
         defaultValue={""}
        />
        {/* {errors.password && <Text>{errors.password.message} </Text>} */}

        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              label="Confirm Password"
              onBlur={onBlur}
              onChangeText={(value) => onChange(value)}
              value={value}
              style={styles.input}
              secureTextEntry
            />
          )}
          name="confirmPassword"
          defaultValue={""}
        />
        {/* {errors.confirmPassword && <Text>{errors.confirmPassword.message} </Text>} */}

        <Button
          style={styles.button}
          contentStyle={styles.buttonContent}
          mode="contained"
          onPress={handleSubmit(handleValidation)}
          disabled={isSubmitting}
        >
          {isSubmitting ? "Register..." : "Register Now"}
        </Button>
      </View>
      <View style={styles.loginContainer}>
        <Text>
          Already have an account?{' '}
          <Text
            style={styles.navigationButton}
            onPress={() => navigation.navigate('Login')}
          >
            Login
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
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    width: '100%',
  },
  image: {
    width: 200,
    height: 200,
  },
  input: {
    width: '90%',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 10,
    width: '90%',
    marginTop: 20,
  },
  buttonContent: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  navigationButton: {
    fontWeight: 'bold',
    marginLeft: 5,
  },
});
