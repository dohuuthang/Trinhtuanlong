import React, { Component } from 'react';
import Player from './Player';

export const TRACKS = [
  {
    title: 'CÔ THẮM KHÔNG VỀ',
    artist: 'PHÁT HỒ',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/C%C3%94%20TH%E1%BA%AEM.jpg?alt=media&token=680fdb1c-4cd4-4406-a97f-bd4a9881006e",
    audioUrl: "https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/CoThamKhongVe-PhatHoJokesBiiThien-6067247.mp3?alt=media&token=c5d2fcdd-c7a0-450f-8eae-e05009351c49",
  },
  {
    title: 'ĐI ĐU ĐƯA ĐI',
    artist: 'Bích Phương',
    albumArtUrl: "https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/DIDU.jpg?alt=media&token=7801c708-7487-4b81-ac45-40c25317236d",
    audioUrl: "https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/DiDuDuaDi-BichPhuong-6059493.mp3?alt=media&token=8742756b-1ba2-4108-8bcf-f5bab186ed30",
  },
  {
    title: 'Em Gì ƠI',
    artist: 'JACK-KICM',
    albumArtUrl: 'https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/emgi.jpg?alt=media&token=df60cf69-6e11-4e94-af8c-2c50a2ce9809',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/Em-Gi-Oi-Jack-K-ICM.mp3?alt=media&token=70582864-c3d9-451d-9500-53d488cd569d',
  },
  {
    title: 'Phải Giu Em Thôi',
    artist: 'Thanh Hưng',
    albumArtUrl: 'https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/phaigiu.jpg?alt=media&token=f480b34b-9297-4a73-ba07-6f5ce15bfa55',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/PhaiGiuEmThoi-ThanhHungIdol-6064272.mp3?alt=media&token=a1bf61aa-7b87-4774-bb68-f74bea9762dc',
  },
  {
    title: 'Từng YÊU',
    artist: 'Phan Duy Anh',
    albumArtUrl: 'https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/tungyeu.jpg?alt=media&token=809e54da-352e-4e62-ace1-523ecb6da71a',
    audioUrl: 'https://firebasestorage.googleapis.com/v0/b/baocaoreact.appspot.com/o/TungYeu-PhanDuyAnh-5989256.mp3?alt=media&token=1c98161c-ac5a-4589-bd65-58cb8cbc5a73',
  },
];

export default class App extends Component {
  render() {
    return <Player tracks={TRACKS} />
  }
}



