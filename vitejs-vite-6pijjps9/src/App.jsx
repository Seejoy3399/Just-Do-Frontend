import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function Profile(counts) {
  let name;
  name = '这是w' + counts + 'x';
  return (
    <>
      <img
        src="https://github.com/Seejoy3399/Just-Do-Frontend/blob/3435ef5b181914f3a9a8652749bf3bc2390bd89f/Weixin%20Image_20251016174957_130_292.jpg?raw=true"
        alt="wyx"
        style={{
          width: 100,
        }}
      />
      <p>{name}</p>
    </>
  );
}

function Button() {}

export default function Gallery() {
  return (
    <section>
      <h1>这里有三个wyx</h1>
      <Profile counts={'1'} />
      <Profile counts={'2'} />
      <Profile counts={'3'} />
    </section>
  );
}
