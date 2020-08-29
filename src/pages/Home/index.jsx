import React from "react";

import { Message } from "components";

import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar="https://source.unsplash.com/100x100/?nature,water"
        text="Мы тут недавно войска Ариовиста разбили, чуваки хотели закрепиться на галльских землях, лол 🌝"
        date={new Date(2020, 7, 29, 22, 11, 0)}
      ></Message>
      <Message
        avatar="https://img.gazeta.ru/files3/403/7693403/123456789.jpg"
        text="Hello, World 🌝"
        date={new Date(2020, 7, 29, 22, 16, 0)}
        isMe={true}
        isReaded={false}
      ></Message>
    </section>
  );
};

export default Home;
