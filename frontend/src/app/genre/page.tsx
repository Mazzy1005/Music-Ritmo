"use client";

import { Container } from "@/shared/container";
import { useState } from "react";
import { Tracklist } from "@/widgets/track-list";
import styles from "./genre.module.css";

export default function Genre() {
  const [playlists, setPlaylists] = useState([
    {
      name: "Chill Vibes",
      name_link: "/track1",
      author: "DJ Relax",
      author_link: "/author1",
      favourite: true,
      time: 216,
    },
    {
      name: "Top 40 Hits",
      name_link: "/track1",
      author: "Hitmaker",
      author_link: "/author1",
      favourite: false,
      time: 180,
    },
    {
      name: "Workout Mix",
      name_link: "/track1",
      author: "Fitness Beats",
      author_link: "/author1",
      favourite: true,
      time: 240,
    },
    {
      name: "Workout Mix",
      name_link: "/track1",
      author: "Fitness Beats",
      author_link: "/author1",
      favourite: true,
      time: 240,
    },
    {
      name: "Workout Mix",
      name_link: "/track1",
      author: "Fitness Beats",
      author_link: "/author1",
      favourite: true,
      time: 240,
    },
    {
      name: "Workout Mix",
      name_link: "/track1",
      author: "Fitness Beats",
      author_link: "/author1",
      favourite: true,
      time: 240,
    },
    {
      name: "Workout Mix",
      name_link: "/track1",
      author: "Fitness Beats",
      author_link: "/author1",
      favourite: true,
      time: 240,
    },
    {
      name: "Workout Mix",
      name_link: "/track1",
      author: "Fitness Beats",
      author_link: "/author1",
      favourite: true,
      time: 240,
    },
    {
      name: "Workout Mix",
      name_link: "/track1",
      author: "Fitness Beats",
      author_link: "/author1",
      favourite: true,
      time: 240,
    },
  ]);

  const handleFavouriteToggle = (index: number) => {
    setPlaylists((prev) =>
      prev.map((playlist, i) =>
        i === index ? { ...playlist, favourite: !playlist.favourite } : playlist
      )
    );
  };

  return (
    <>
      <Container
        style={{
          height: "65vh",
          width: "85vw",
          margin: "auto",
          marginTop: "50px",
        }}
        direction="column"
        arrow={true}
        link_arrow="/"
      >
        <h1 className={styles.playlist__title}>Название жанра</h1>
        <div className={styles.playlist}>
          {playlists.map((playlist, index) => (
            <Tracklist
              key={index}
              name={playlist.name}
              name_link={playlist.name_link}
              author={playlist.author}
              author_link={playlist.author_link}
              favourite={playlist.favourite}
              time={playlist.time}
              showRemoveButton={false}
              onFavouriteToggle={() => handleFavouriteToggle(index)}
            />
          ))}
        </div>
      </Container>
    </>
  );
}
