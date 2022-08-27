import { 
  Container, 
  BackgroundImage, 
  VerticalGradient, 
  Info, 
  CategoriesInfo, 
  ActionInfo,
  LateralActionBtn,
  LateralActionIcon, 
  LateralActionText,
  WatchBtn,
  WatchIcon,
  WatchText
} from "./styles";

export function Suggestion() {

  return (
      <Container>
        <BackgroundImage 
          source={{ uri: "https://image.tmdb.org/t/p/w440_and_h660_face/hq2igFqb31fDqGotz8ZuUfwKgn8.jpg" }}
          resizeMode={"cover"}
        >
          <VerticalGradient>

            <Info>
              <CategoriesInfo>Drama ● Comédia ● Casamentos</CategoriesInfo>

              <ActionInfo>
                <LateralActionBtn>
                  <LateralActionIcon name={"add-outline"} />
                  <LateralActionText>Minha Lista</LateralActionText>
                </LateralActionBtn>

                <WatchBtn>
                  <WatchIcon />
                  <WatchText>Assistir</WatchText>
                </WatchBtn>

                <LateralActionBtn>
                  <LateralActionIcon name={"information-circle-outline"} />
                  <LateralActionText>Saiba mais</LateralActionText>
                </LateralActionBtn>                
              </ActionInfo>
            </Info>

          </VerticalGradient>
        </BackgroundImage>    
      </Container>
  );
}