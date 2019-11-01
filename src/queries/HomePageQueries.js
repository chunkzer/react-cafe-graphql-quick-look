import { gql } from 'apollo-boost';

const COWBOY_BEBOP_QUERY = () => gql`
  query {
    Media (id: 1, type: ANIME) {
      id
      title {
        romaji
        english
        native
      }
    }
  }
`;

const HomePageQueries = {
  cowboyBebopQuery: COWBOY_BEBOP_QUERY,
};

export default HomePageQueries
