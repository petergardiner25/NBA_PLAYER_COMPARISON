import React from "react";

export default function Player(props) {

    return (
        <div className="playerbox">
            <div className="uno">
                <h2>
                    {props.value.p.info.first + " " + props.value.p.info.last}
                </h2>
                <h4>
                    {'Team: ' + props.value.p.info.team}
                </h4>
                <h4>
                    {"Position: " + props.value.p.info.position}
                </h4>
                <h4>
                    {props.value.p.info.feet ? 'Height: ' + props.value.p.info.feet + "'" + props.value.p.info.inches + '"': ''}
                </h4>
            </div>

            <div className="dos">
                <ul>
                    <li>
                        {"PPG: " + props.value.p.stats.points + ' '}
                        <span role='img' aria-label="">{props.value.p.stats.points >= props.value2.p.stats.points ? '\u2705' : '\u274C'}</span>
                    </li>
                    <li>
                        {"APG: " + props.value.p.stats.assists + ' '}
                        <span role='img' aria-label="">{props.value.p.stats.assists >= props.value2.p.stats.assists ? '\u2705' : '\u274C'}</span>
                    </li>
                    <li>
                        {"RPG: " + props.value.p.stats.reb + ' '}
                        <span role='img' aria-label="">{props.value.p.stats.reb >= props.value2.p.stats.reb ? '\u2705' : '\u274C'}</span>
                    </li>
                    <li>
                        {'BPG: ' + props.value.p.stats.blk + ' '}
                        <span role='img' aria-label="">{props.value.p.stats.blk >= props.value2.p.stats.blk ? '\u2705' : '\u274C'}</span>
                    </li>
                    <li>
                        {'STL: ' + props.value.p.stats.stl + ' '}
                        <span role='img' aria-label="">{props.value.p.stats.stl >= props.value2.p.stats.stl ? '\u2705' : '\u274C'}</span>
                    </li>
                </ul>
            </div>

            <div className="tres">
                <ul>
                    <li>
                        {'TOs: ' + props.value.p.stats.to + ' '}
                        <span role='img' aria-label="">{props.value.p.stats.to <= props.value2.p.stats.to ? '\u2705' : '\u274C'}</span>
                    </li><li>
                        {"FG%: " + props.value.p.stats.fgP + ' '}
                        <span role='img' aria-label="">{props.value.p.stats.fgP >= props.value2.p.stats.fgP ? '\u2705' : '\u274C'}</span>
                    </li><li>
                        {'3P%: ' + props.value.p.stats.fg3P + ' '}
                        <span role='img' aria-label="">{props.value.p.stats.fg3P >= props.value2.p.stats.fg3P ? '\u2705' : '\u274C'}</span>
                    </li><li>
                        {'FT%: ' + props.value.p.stats.ftP + ' '}
                        <span role='img' aria-label="">{props.value.p.stats.ftP >= props.value2.p.stats.ftP ? '\u2705' : '\u274C'}</span>
                    </li><li>
                        {'MIN: ' + props.value.p.stats.mins + ' '}
                    </li>
                </ul>
            </div>
        </div>
    );
}

