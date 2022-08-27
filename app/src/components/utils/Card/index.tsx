import React, { useState } from "react";
import { Modal, TouchableOpacity, View } from "react-native";
import { 
  Container, 
  BackgroundImage, 
  Classification, 
  ModalContent, 
  ImageInfoPreview, 
  TitleInfo, 
  ReleaseDate, 
  Description,
  ModalInfo
} from "./styles";


export interface CardType {
  item: {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    media_type: "movie" | "tv";
    genre_ids: number[];
    release_date: string;
  }
}

export function Card(props: CardType) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
 
  return (
    <Container onPress={() => setModalIsOpen(!modalIsOpen)}>
      <BackgroundImage
        source={{uri: `https://image.tmdb.org/t/p/w500/${props.item.poster_path}` }}
      >
        <Modal 
          animationType={"slide"}
          visible={modalIsOpen}
          transparent={true}
          onRequestClose={() => setModalIsOpen(!modalIsOpen)}
        >
          <TouchableOpacity onPress={() => setModalIsOpen(!modalIsOpen)} style={{flex: 1}}>
            <ModalContent>
              <ImageInfoPreview source={{uri: `https://image.tmdb.org/t/p/w500/${props.item.poster_path}`}}/>
              
              <ModalInfo>
                <TitleInfo>{props.item.title}</TitleInfo>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <ReleaseDate>{props.item.release_date}</ReleaseDate>
                  <Classification>14</Classification>
                </View>

                <Description>{props.item.overview}</Description>
              </ModalInfo>

            </ModalContent>
          </TouchableOpacity>
        </Modal>
      </BackgroundImage>
    </Container>
  );
}