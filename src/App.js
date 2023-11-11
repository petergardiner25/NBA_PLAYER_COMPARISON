import Player from './components/Player';
import Search from './components/Search';
import React, { useEffect, useState } from 'react';
import Loading from './components/Loading';


const PLAYER_URL = 'https://www.balldontlie.io/api/v1/players/'
const STATS_URL = 'https://www.balldontlie.io/api/v1/season_averages?player_ids[]='


function App() {
  const [ids, setIds] = useState([322,57]);
  const [players, setPlayers] = useState([{'p': 'loading'},{'p': 'loading'}]);

 let handleCallback1 = (childData) => {
    let newIds = [...ids];
    let newId = childData
    newIds[0] = newId;
    setIds(newIds);
  }

  let handleCallback2 = (child2Data) => {
    let newIds = [...ids];
    let newId = child2Data
    newIds[1] = newId;
    setIds(newIds);
  }

  useEffect(() => {

    // let arrIds = [id1, id2]
    let mounted = true;

    ids.forEach(element => {
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

          if (ids[0] === element) {
            let newPlayers = [...players];
            let newPlayer = {'info':info,'stats': stats}
            newPlayers[0].p = newPlayer;
            setPlayers(newPlayers);

          } else {
            let newPlayers = [...players];
            let newPlayer = {'info':info,'stats': stats}
            newPlayers[1].p = newPlayer;
            setPlayers(newPlayers);
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
  }, [ids]);

  if (players[1].p === 'loading' || players[0].p === 'loading'){
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
            <h2 className='subHead'>2023-2024 Season Averages</h2>
            <div className='wrapper'>
              <div className='one'>
                <Search  parentCallback = {handleCallback1}/>
                <Player value={players[0]} value2={players[1]}/>
              </div>
              <div className='two'>
                <Search parentCallback = {handleCallback2}/>
                <Player value={players[1]} value2={players[0]}/>
              </div>

            </div>

          </>
      );
  } 
}

export default App;