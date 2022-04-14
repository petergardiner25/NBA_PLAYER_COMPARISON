import Player from './components/Player';
import Search from './components/Search';
import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';


const PLAYER_URL = 'https://www.balldontlie.io/api/v1/players/'
const STATS_URL = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]='


function App() {

  const [id1, setId1] = useState(322);
  const [id2, setId2] = useState(57);
  const [player, setPlayer] = useState(null);
  const [player2, setPlayer2] = useState(null);


 let handleCallback1 = (childData) => {
    setId1(childData);
  }

  let handleCallback2 = (child2Data) => {
    setId2(child2Data);
  }

  useEffect(() => {

    let arrIds = [id1, id2]
    let mounted = true;

    arrIds.forEach(element => {
      let PLAYERID = element;
      let info = {};
      let stats = {};

      let handlePlayer = function (jsonResponse){
          let id = jsonResponse[0].id;
          let firstname = jsonResponse[0].first_name;
          let lastname = jsonResponse[0].last_name;

          let heightFt = jsonResponse[0].height_feet;
          let heightInches = jsonResponse[0].height_inches;
          let team = jsonResponse[0].team.full_name;
          let pos = jsonResponse[0].position;

          info = {'id': id, "first": firstname, "last": lastname, 'feet': heightFt, 'inches': heightInches, 'team':team, 'position': pos}

          let ast = jsonResponse[1].data[0].ast;
          let pts = jsonResponse[1].data[0].pts;
          let fgP = Math.round(jsonResponse[1].data[0].fg_pct * 100);
          let fg3P = Math.round(jsonResponse[1].data[0].fg3_pct * 100);
          let mins = jsonResponse[1].data[0].min;
          let reb = jsonResponse[1].data[0].reb;
          let stl = jsonResponse[1].data[0].stl;
          let blk = jsonResponse[1].data[0].blk;
          let to = jsonResponse[1].data[0].turnover;
          let ftP = Math.round(jsonResponse[1].data[0].ft_pct * 100);

          stats = {'assists': ast, 'points': pts, 'fgP': fgP, 'fg3P': fg3P, 'mins': mins, 'reb': reb, 'stl': stl, 'blk':blk, 'to':to, 'ftP':ftP}

          if (arrIds[0] === element) {
            setPlayer({'info':info,'stats': stats});
          } else {
            setPlayer2({'info':info,'stats': stats});
          }
        };

        Promise.all([
            PLAYER_URL + PLAYERID,
            STATS_URL +  PLAYERID

        ].map(url => fetch(url)
        .then(response => response.json()) ))
        .then(data => {
            if (mounted){
                handlePlayer(data);
            }
        }).catch(err => console.log(err));
      });
      return () => mounted = false;
  }, [id1, id2]);

  if (!player || !player2){
    return (
      <div className='loading'>
        <Loading/>
      </div>
    )
    
  }
  else {

      return (
          <>
            <h1>NBA PLAYER COMPARISON</h1>
            <h2 className='subHead'>2021-2022 Season Averages</h2>
            <div className='wrapper'>
              <div className='one'>
                <Search  parentCallback = {handleCallback1}/>
                <Player value={player} value2={player2}/>
              </div>
              <div className='two'>
                <Search parentCallback = {handleCallback2}/>
                <Player value={player2} value2={player}/>
              </div>

            </div>

          </>
      );
  } 
}

export default App;