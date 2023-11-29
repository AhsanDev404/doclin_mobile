import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat, Bubble, InputToolbar, Send } from "react-native-gifted-chat";
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the appropriate icon package

export default function ChatBot() {
  const [messages, setMessages] = useState([]);
  const CHAT_API_KEY = "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";

  const handelSend = async (newMessage = []) => {
    try {
      const userMessage = newMessage[0];
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, userMessage)
      );
      const messageText = userMessage.text.toLowerCase();
      const keywords = [
        'doctor', 
        'therapist', 
        'counseling', 
        'psychologist', 
        'psychiatry', 
        'mental health', 
        'therapy', 
        'depression', 
        'anxiety', 
        'stress', 
        'bipolar disorder', 
        'schizophrenia', 
        'PTSD', 
        'OCD', 
        'ADHD', 
        'addiction', 
        'eating disorders', 
        'trauma', 
        'self-esteem', 
        'relationship counseling', 
        'mindfulness',
        'phobia',
        'panic disorder',
        'social anxiety',
        'personality disorders',
        'child psychology',
        'family therapy',
        'anger management',
        'grief counseling',
        'substance abuse',
        'behavioral therapy',
        'cognitive therapy',
        'group therapy',
        'teletherapy',
        'mental health assessment',
        'medication management',
        'rehabilitation services'
    ];
      if (!keywords.some((keyword) => messageText.includes(keyword))) {
        const botResponse = {
          _id: new Date().getTime() + 1,
          text: "Hey there! Looking for a little mental recharge? I’m here to chat!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Mental Bot",
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, botResponse)
        );
        return;
      }
      
      const response = await fetch('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${CHAT_API_KEY}`
        },
        body: JSON.stringify({
          prompt: messageText,
          max_tokens: 1200,
          temperature: 0.2,
          n: 1,
        }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      const message = data.choices[0].text.trim();

      const botMessage = {
        _id: new Date().getTime() + 1,
        text: message,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Mental Bot",
        },
      };

      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, botMessage)
      );
    } catch (error) {
      console.error('Error occurred:', error.message);
      // Handle error or display error message
    }
  };

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello! How can I help you ?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "Mental Bot",
        },
      },
    ]);
  }, []);

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: 'black',
        },
        left: {
          backgroundColor: 'white',
        },
      }}
      textStyle={{
        right: {
          color: 'white',
        },
        left: {
          color: 'black',
        },
      }}
    />
  );

  const renderInputToolbar = (props) => (
    <InputToolbar

      {...props}
      
      containerStyle={{
        backgroundColor: '',
        
      }}
    />
  );

  const renderSend = (props) => (
    <Send {...props}>
      <View style={{ marginRight: 10, marginBottom: 5 }}>
        <Icon name="send" size={25} color="black" /> 
      </View>
    </Send>
  );

  return (
    <GiftedChat
      messages={messages}
      onSend={(newMessages) => handelSend(newMessages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      renderInputToolbar={renderInputToolbar}
      renderSend={renderSend}
    />
  );
}
