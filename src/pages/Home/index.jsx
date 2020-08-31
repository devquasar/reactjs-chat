import React from "react";

import { Message } from "components";

import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      {/* <Dialogs
        items={[
          {
            user: {
              fullname: "Фёдор Достоевский",
              avatar: null,
            },
            message: {
              text:
                "Мы все свидетельствуем Вам глубочайшее наше почтение и целуем Ваши ручки, дражайший папенька: Михайла, Федор, Варвара и Андрюша.",
              isReaded: false,
              created_at: new Date(),
            },
          },
        ]}
      /> */}

      {/* <Message
        avatar="https://source.unsplash.com/100x100/?random=1&nature,water"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date={new Date(2020, 7, 29, 22, 11, 0)}
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=3&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=4&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=5&nature,water",
          },
        ]}
      ></Message>
      <Message
        avatar="https://source.unsplash.com/100x100/?random=2&nature,water"
        text="Hello, World 🌝"
        date={new Date(2020, 7, 29, 22, 16, 0)}
        isMe={true}
        isReaded={false}
      ></Message>
      <Message
        avatar="https://source.unsplash.com/100x100/?random=6&nature,water"
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=7&nature,water",
          },
        ]}
      ></Message>
      <Message
        avatar="https://source.unsplash.com/100x100/?random=6&nature,water"
        isTyping
      ></Message> */}
    </section>
  );
};

export default Home;
