import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { HOME_PAGE } from "./queries";
import Movie from "./Movie";
import { useQuery } from "react-apollo-hooks";

//styled-component을 이용한 방식
//cosnt <Using name> = styled.<Using html tag style> ``
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 0.7fr);
  flex-wrap: wrap;
  justify-items: center;
`;

const Home = () => {
  const { data, error, loading } = useQuery(HOME_PAGE);
  //apollo-hook 의 useQuery 이용
  //data = 전달받은 정보, error = 수행 도중 발생한 에러 , loading = 수행 중인 대기상태 
  return (
    <Container>
      <Helmet>
        <title>Home | MovieQL</title>
      </Helmet>
      {loading && "Loading"}
      {error && "Something is wrong"}
      
      {/*Fetching complete and Using data */}
      {!loading &&
        data &&
        data.movies &&
        //Confirm Data Fetching is completed
        data.movies.map(movie => (
          //Props data , add key using id
          <Movie
            id={movie.id}
            key={movie.id}
            poster={movie.medium_cover_image}
            title={movie.title}
            rating={movie.rating}
          />
        ))}
    </Container>
  );
};

export default Home;
