import { View, Text, StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import {
  GiftedChat,
  Bubble,
  InputToolbar,
  Send,
} from "react-native-gifted-chat";
import Icon from "react-native-vector-icons/MaterialIcons"; // Import the appropriate icon package
import axios from "axios";
import bot from "../../assets/bot.png";

export default function ChatBot() {
  const [messages, setMessages] = useState([]);

  const handelSend = async (newMessage = []) => {
    const userMessage = newMessage[0];
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, userMessage)
    );
    const messageText = userMessage.text.toLowerCase();

    axios
      .post(
        "https://api.openai.com/v1/engines/davinci-codex/completions",
        {
          prompt: messageText,
          max_tokens: 60,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.EXPO_PUBLIC_CHAT_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        const botMessage = {
          _id: new Date().getTime() + 1,
          text: response.data.choices[0].text.trim(),
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Mental Bot",
            avatar:
              "https://w7.pngwing.com/pngs/1001/63/png-transparent-internet-bot-computer-icons-chatbot-sticker-electronics-face-careobot-thumbnail.png",
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, botMessage)
        );
      })
      .catch((error) => {
        const botMessage = {
          _id: new Date().getTime() + 1,
          text: "Oops! It seems like an error has occurred. Please bear with us as we are working to resolve it. Your patience is highly appreciated, and we will  provide an update as soon as possible. Thank you for your understanding!",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Mental Bot",
            avatar:
              "https://w7.pngwing.com/pngs/1001/63/png-transparent-internet-bot-computer-icons-chatbot-sticker-electronics-face-careobot-thumbnail.png",
          },
        };
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, botMessage)
        );
      });
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
          avatar:
            "https://w7.pngwing.com/pngs/1001/63/png-transparent-internet-bot-computer-icons-chatbot-sticker-electronics-face-careobot-thumbnail.png",
        },
      },
    ]);
  }, []);

  const renderBubble = (props) => (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: "black",
        },
        left: {
          backgroundColor: "white",
        },
      }}
      textStyle={{
        right: {
          color: "white",
        },
        left: {
          color: "black",
        },
      }}
    />
  );

  const renderInputToolbar = (props) => (
    <InputToolbar
      {...props}
      containerStyle={{
        backgroundColor: "",
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

// import { View, Text } from 'react-native'
// import React, { useState } from 'react'
// import {GiftedChat} from 'react-native-gifted-chat'
// import axios from 'axios'

// export default function ChatBot() {
//   const [messages, setMessages] = useState([])
// const YOUR_CHATGPT_API_KEY = 'sk-FmE7MYXs52g0U5nuSCZgT3BlbkFJc5MdYWW8qPIq1R8z4Q4';
// const handleSend = async (newMessages = []) => {
//  try {

//     // Get the user's message
//     const userMessage = newMessages [0];
//     setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage));
//     const messageText = userMessage.text.toLowerCase();
// const keywords = ['recipe', 'food', 'diet', 'fruit'];
// if (!keywords.some (keyword=> messageText.includes (keyword))){
//   // if the message does not contain any food-related keywords, respond with a defi
//   const botMessage = {
//   _id: new Date().getTime()+ 1,
//   text: "I'm your food bot, ask me anything related to food and recipe",
//   createdAt: new Date(),
//   user: {
//   _id: 2,
//   name: 'Food Bot'
//   }
// }
//   setMessages (previousMessages => GiftedChat.append(previousMessages, botMessage)).
//   return;
//   }
//  const response =  await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions',{
//   prompt: `Get me a recipe for ${messageText}`,
//   max_tokens: 1200,
//   temperature: 0.2,
//   n:1,
// }, {
//   headers:{ 
//   'Content-Type': 'application/json',
//   'Authorization': `Bearer ${YOUR_CHATGPT_API_KEY}`
//   }

//  })

//  const recipe = response.data.choices [0].text.trim();
// const botMessage = {
// _id: new Date().getTime() + 1,
// text: recipe,
// createdAt: new Date(),
// user: {
// _id: 2,
// name: 'Food Bot'
// }}
// setMessages (previousMessages => GiftedChat.append(previousMessages, botMessage))
  
//  } catch (error) {
//   console.log(error)
//  }
// }

//   return (
//     <GiftedChat
//       messages={messages}
//       onSend={(newMessages) => handleSend(newMessages)}
//       user={{
//         _id: 1,
//       }}
//     />
//   )
// }