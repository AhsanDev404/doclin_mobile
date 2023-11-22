import { View} from 'react-native'
import React from 'react'
import { Button, Dialog, Portal, Text } from 'react-native-paper'

export default function ErrorMessage({visible, hideDialog , message}) {
  return (
    <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Text variant='bodyLarge'>{message}</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={hideDialog}>OK</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
  )
}