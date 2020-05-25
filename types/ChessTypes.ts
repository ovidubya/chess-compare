export type ChessProfile = {
  player_id: number;
  "@id": string;
  url: string;
  name: string;
  username: string;
  followers: number;
  country: string;
  last_online: number;
  joined: number;
  status: string;
  avatar?: string;
  is_streamer: boolean;
};

export type ChessProfileStats = {
  chess_rapid: ChessRapidOrChessBulletOrChessBlitz;
  chess_bullet: ChessRapidOrChessBulletOrChessBlitz;
  chess_blitz: ChessRapidOrChessBulletOrChessBlitz;
  fide: number;
  tactics: TacticsOrLessons;
  lessons: TacticsOrLessons;
  puzzle_rush: PuzzleRush;
};
export type ChessRapidOrChessBulletOrChessBlitz = {
  last: Last;
  best: Best;
  record: Record;
};
export type Last = {
  rating: number;
  date: number;
  rd: number;
};
export type Best = {
  rating: number;
  date: number;
  game: string;
};
export type Record = {
  win: number;
  loss: number;
  draw: number;
};
export type TacticsOrLessons = {
  highest: HighestOrLowest;
  lowest: HighestOrLowest;
};
export type HighestOrLowest = {
  rating: number;
  date: number;
};
export type PuzzleRush = {};
