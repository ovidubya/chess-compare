export const getChessProfile = (username: string) => {
  return fetch(`https://api.chess.com/pub/player/${username}`).then((data) =>
    data.json()
  );
};

export const getChessPlayerStats = (username: string) => {
  return fetch(
    `https://api.chess.com/pub/player/${username}/stats`
  ).then((data) => data.json());
};
