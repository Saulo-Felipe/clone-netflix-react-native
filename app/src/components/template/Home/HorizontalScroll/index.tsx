import { useEffect, useState } from "react";
import { api } from "../../../../services/api";
import { Card, CardType } from "../../../utils/Card";
import { LoadingCard } from "../../../utils/LoadingCard";
import { ScrollView, Container, Title } from "./styles";


interface HorizontalScrollProps {
  title: string;
}

interface ApiRequestParams {
  params: {
    api_key: string;
    language: string;
    url_link: string,
    page?: number;
    with_genres?: number;
    sort_by?: string;
  }
}

export function HorizontalScroll({title}: HorizontalScrollProps) {
  const [moviesData, setMoviesData] = useState<CardType[]>([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  let options: ApiRequestParams = {
    params: {
      api_key: "c24337c5d6d96df49f0e6908e8c0fa3c",
      language: "pt-BR",
      page: pageIndex,
      url_link: ""
    }
  }

  if (title === "Terror") {
    options.params = {
      ...options.params,
      url_link: "/discover/movie",
      with_genres: 27,
      sort_by: "popularity.desc"
    }

  } else if (title === "Populares") {
    options.params.url_link = "/trending/all/day";

  } else if (title === "Lançamentos") {
    options.params = {
      ...options.params,
      url_link: "/discover/movie",
      sort_by: "primary_release_date.desc",
    }
  }

  async function getDayTrending() {
    const { data } = await api.get(
      options.params.url_link, 
      {
        ...options
      }
    );

    setMoviesData([ ...moviesData, ...data.results]);
  }

  useEffect(() => {
    getDayTrending();
  }, [pageIndex]);

  console.log("renderizou");

  return (
    <Container>
      <Title>{title}</Title>
      <ScrollView 
        data={moviesData}
        renderItem={(item: CardType) => <Card {...item} />}
        keyExtractor={(item: any, index: number) => index}
        horizontal={true}
        onEndReachedThreshold={0.5}
        onEndReached={() => setPageIndex(pageIndex+1)}
        ListFooterComponent={LoadingCard}
      />
    </Container>
  );
}