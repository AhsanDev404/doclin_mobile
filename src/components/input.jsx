import React from 'react';
import { TextInput, HelperText } from 'react-native-paper';
import theme from '../theme';

function Input({
  onChange,
  label,
  value,
  placeholder,
  secure,
  helper,
  editable,
  multiline,
  onBlur,
  keyboardType,
  controlled,
  ...props
}) {
  const [localstate, setLocalstate] = React.useState(secure);
  // const [state, setState] = React.useState(value);
  function onChangeText(v) {
    // setState(v);
    onChange(v);
  }

  function SecureIcon() {
    return (
      <TextInput.Icon
        forceTextInputFocus={false}
        icon={!localstate ? 'eye-outline' : 'eye-off-outline'}
        color="black"
        onPress={() => setLocalstate(!localstate)}
      />
    );
  }

  function Input() {
    return (
      <TextInput
        mode="outlined"
        label={label}
        // value={value} // Controlled
        defaultValue={value} // Uncontrolled
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor={theme.colors.primaryAccent}
        onBlur={onBlur}
        secureTextEntry={localstate}
        keyboardType={keyboardType}
        multiline={multiline}
        activeOutlineColor={theme.colors.primaryAccent}
        outlineColor={theme.colors.primaryAccent}
        editable={editable}
        right={secure && SecureIcon()}
        {...props}
      />
    );
  }

  function ControlledInput() {
    return (
      <TextInput
        mode="outlined"
        label={label}
        value={value} // Controlled
        // defaultValue={value} // Uncontrolled
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        secureTextEntry={localstate}
        placeholderTextColor={theme.colors.primaryAccent}
        keyboardType={keyboardType}
        multiline={multiline}
        selectionColor={theme.colors.secondary}
        activeOutlineColor={theme.colors.primaryAccent}
        outlineColor={theme.colors.primaryAccent}
        editable={editable}
        right={secure && SecureIcon()}
        {...props}
      />
    );
  }

  return (
    <>
      {controlled ? ControlledInput() : Input()}

      {helper && <HelperText type="error">{helper}</HelperText>}
    </>
  );
}

// CustomInput.propTypes = {
//     keyboardType: PropTypes.oneOf([
//         "default",
//         "email-address",
//         "numeric",
//         "phone-pad",
//         "number-pad",
//         "decimal-pad",
//     ]),
// };

function InputWithIcon({
  onChange,
  label,
  value,
  placeholder,
  secure,
  helper,
  editable,
  multiline,
  onBlur,
  keyboardType,
  icon,
  iconColor,
  rightIconPress,
  rightIcon,
  ...props
}) {
  const [localstate, setLocalstate] = React.useState(secure);

  function onChangeText(v) {
    // setState(v);
    onChange(v);
  }

  function SecureIcon() {
    return (
      <TextInput.Icon
        forceTextInputFocus={false}
        icon={!localstate ? 'eye-outline' : 'eye-off-outline'}
        color={theme.colors.primaryAccent}
        onPress={() => setLocalstate(!localstate)}
      />
    );
  }
  function ControlledInput() {
    return (
      <TextInput
        mode="outlined"
        label={label}
        value={value} // Controlled
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={localstate}
        onBlur={onBlur}
        keyboardType={keyboardType}
        placeholderTextColor={theme.colors.primaryAccent}
        multiline={multiline}
        editable={editable}
        activeOutlineColor={theme.colors.primaryAccent}
        outlineColor={theme.colors.primaryAccent}
        secure={secure}
        color={iconColor || 'black'}
        left={
          icon && (
            <TextInput.Icon
              forceTextInputFocus={false}
              icon={icon}
              color={iconColor || 'black'}
              // disabled
            />
          )
        }
        right={
          secure && SecureIcon()
          // ) : rightIcon ? (
          //   <TextInput.Icon
          //     forceTextInputFocus={false}
          //     icon="lock"
          //     color="black"
          //     onPress={rightIconPress}
          //     disabled={rightIconPress ? false : true}
          //   />
          // ) : null
        }
        {...props}
      />
    );
  }

  return (
    <>
      {ControlledInput()}

      {helper && <HelperText type="error">{helper}</HelperText>}
    </>
  );
}

export { InputWithIcon };

export default Input;
