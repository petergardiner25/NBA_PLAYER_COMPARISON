import React from "react";

export default function Player(props) {
    console.log(props)
    return (
        <div className="playerbox">
            <div className="uno">
                <h2>
                    {props.value.info.first + " " + props.value.info.last}
                </h2>
                <h4>
                    {'Team: ' + props.value.info.team}
                </h4>
                <h4>
                    {"Position: " + props.value.info.position}
                </h4>
                <h4>
                    {props.value.info.feet ? 'Height: ' + props.value.info.feet + "'" + props.value.info.inches + '"': ''}
                </h4>
            </div>

            <div className="dos">
                <ul>
                    <li>
                        {"PPG: " + props.value.stats.points + ' '}
                        <span role='img' aria-label="">{props.value.stats.points >= props.value2.stats.points ? '\u2705' : '\u274C'}</span>
                    </li>
                    <li>
                        {"APG: " + props.value.stats.assists + ' '}
                        <span role='img' aria-label="">{props.value.stats.assists >= props.value2.stats.assists ? '\u2705' : '\u274C'}</span>
                    </li>
                    <li>
                        {"RPG: " + props.value.stats.reb + ' '}
                        <span role='img' aria-label="">{props.value.stats.reb >= props.value2.stats.reb ? '\u2705' : '\u274C'}</span>
                    </li>
                    <li>
                        {'BPG: ' + props.value.stats.blk + ' '}
                        <span role='img' aria-label="">{props.value.stats.blk >= props.value2.stats.blk ? '\u2705' : '\u274C'}</span>
                    </li>
                    <li>
                        {'STL: ' + props.value.stats.stl + ' '}
                        <span role='img' aria-label="">{props.value.stats.stl >= props.value2.stats.stl ? '\u2705' : '\u274C'}</span>
                    </li>
                </ul>
            </div>

            <div className="tres">
                <ul>
                    <li>
                        {'TOs: ' + props.value.stats.to + ' '}
                        <span role='img' aria-label="">{props.value.stats.to <= props.value2.stats.to ? '\u2705' : '\u274C'}</span>
                    </li><li>
                        {"FG%: " + props.value.stats.fgP + ' '}
                        <span role='img' aria-label="">{props.value.stats.fgP >= props.value2.stats.fgP ? '\u2705' : '\u274C'}</span>
                    </li><li>
                        {'3P%: ' + props.value.stats.fg3P + ' '}
                        <span role='img' aria-label="">{props.value.stats.fg3P >= props.value2.stats.fg3P ? '\u2705' : '\u274C'}</span>
                    </li><li>
                        {'FT%: ' + props.value.stats.ftP + ' '}
                        <span role='img' aria-label="">{props.value.stats.ftP >= props.value2.stats.ftP ? '\u2705' : '\u274C'}</span>
                    </li><li>
                        {'MIN: ' + props.value.stats.mins + ' '}
                    </li>
                </ul>
            </div>
        </div>
    );
}

