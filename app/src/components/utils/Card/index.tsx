import React, { useState } from "react";
import { Modal, Pressable, TouchableOpacity, View, Text } from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";
import {
  Container,
  BackgroundImage,
  Classification,
  ModalContent,
  ImageInfoPreview,
  TitleInfo,
  ReleaseDate,
  Description,
  ModalInfo,
  IconsActionContainer,
  InfoContainer,
  ActionIcon,
  IconContainer,
  IconTitle,
  MoreInfo,
  MoreInfoContainer
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
          <Pressable onPressIn={() => setModalIsOpen(!modalIsOpen)} style={{flex: 1, backgroundColor: "rgba(0, 0, 0, 0.5)"}}></Pressable>
          
          <ModalContent>
            <InfoContainer>
              <ImageInfoPreview source={{uri: `https://image.tmdb.org/t/p/w500/${props.item.poster_path}`}}/>

              <ModalInfo>
                <TitleInfo>{props.item.title}</TitleInfo>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <ReleaseDate>{props.item.release_date}</ReleaseDate>
                  <Classification>14</Classification>
                </View>

                <Description numberOfLines={5}>{props.item.overview}</Description>
              </ModalInfo>
            </InfoContainer>

            <IconsActionContainer>
              <IconContainer>
                <ActionIcon style={{backgroundColor: "#fff", color: "#000"}} name={"play-circle-outline"} />
                <IconTitle>Assistir</IconTitle>
              </IconContainer>

              <IconContainer>
                <ActionIcon name={"download-outline"} />
                <IconTitle>Baixar</IconTitle>
              </IconContainer>

              <IconContainer>
                <ActionIcon name={"add-outline"} />
                <IconTitle>Minha Lista</IconTitle>
              </IconContainer>

              <IconContainer>
                <ActionIcon name={"share-social-outline"} />
                <IconTitle>Compartilhar</IconTitle>
              </IconContainer>
            </IconsActionContainer>

            <MoreInfo>
              <MoreInfoContainer>
                <Ionicon name={"information-circle-outline"} size={25} color={"#fff"}/>
                <Text style={{color: "#fff"}}>Mais informações</Text>
              </MoreInfoContainer>

              <Ionicon color={"#fff"} name={"chevron-forward-outline"} size={25}/>
            </MoreInfo>
          </ModalContent>
        </Modal>
      </BackgroundImage>
    </Container>
  );
}