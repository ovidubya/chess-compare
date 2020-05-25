import * as React from "react";
import styled from "styled-components";
import { ChessProfile, ChessProfileStats } from "../types/ChessTypes";
import moment from "moment";
import { getChessProfile, getChessPlayerStats } from "../services/ChessService";

type ChessCardProps = {
  username: string;
};

const CardHeader = styled.div`
  display: flex;

  background: #2c2b28;
  max-height: 200px;
  color: white;
`;

const CardBody = styled.div`
  display: flex;
  justify-content: space-around;
  background: #454140;
`;

const CardBodyBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    color: white;
  }
  i,
  div:first-of-type {
    color: #bcbcbb;
  }
`;

const CardHeaderImage = styled.img``;

const CardHeaderContent = styled.div`
  margin-left: 10px;
`;

const CardHeaderUsername = styled.h5``;

const Card = styled.div``;

export const ChessCard: React.FC<ChessCardProps> = ({ username }) => {
  const [profile, setProfile] = React.useState<ChessProfile | null>(null);
  const [
    profileStats,
    setProfileStats,
  ] = React.useState<ChessProfileStats | null>(null);

  React.useEffect(() => {
    getChessProfile(username).then((data) => {
      setProfile(data);
    });
    getChessPlayerStats(username).then((data) => {
      setProfileStats(data);
    });
  }, []);

  return (
    <>
      {profile !== null && profileStats !== null ? (
        <Card className="z-depth-5">
          <CardHeader>
            <CardHeaderImage src={profile.avatar}></CardHeaderImage>
            <CardHeaderContent>
              <CardHeaderUsername>
                Username: {profile.username}
              </CardHeaderUsername>
              <h6>Name: {profile.name}</h6>
              <a href={profile.url}>Challenge </a>
            </CardHeaderContent>
          </CardHeader>
          <CardBody>
            <CardBodyBox>
              <i className="material-icons">timelapse</i>
              <div>Joined</div>
              <div>{moment(new Date(profile.joined * 1000)).fromNow()}</div>
            </CardBodyBox>
            <CardBodyBox>
              <i className="material-icons">bar_chart</i>
              <div>Last online</div>
              <div>
                {moment(new Date(profile.last_online * 1000)).fromNow()}
              </div>
            </CardBodyBox>
            <CardBodyBox>
              <i className="material-icons">pie_chart</i>
              <div>Stats</div>
              <div>
                {profileStats.chess_blitz.record.win} W /{" "}
                {profileStats.chess_blitz.record.loss} L /{"  "}
                {profileStats.chess_blitz.record.draw} D
              </div>
            </CardBodyBox>
            <CardBodyBox>
              <i className="material-icons">games</i>
              <div>Games played</div>
              <div>
                {profileStats.chess_blitz.record.win +
                  profileStats.chess_blitz.record.loss +
                  profileStats.chess_blitz.record.draw}
              </div>
            </CardBodyBox>
          </CardBody>
        </Card>
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
