// export type Filme = {
//   id: number;
//   nome: string;
//   sinopse: string;
//   foto: string;
// };

export type ApiMovie = {
  id?: number;
  title?: string;
  release_date?: string;
  poster_path?: string;
  backdrop_path?: string;
  vote_average?: number;
  overview?: string;
};

export type Movie = {
  id?: number;
  title?: string;
  releaseDate?: string;
  imagePosterUrl?: string;
  backdropPath?: string;
  voteAverage?: number;
  overview?: string;
};
