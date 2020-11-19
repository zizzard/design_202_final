import React from "react";
import "./Table.css";
import "./Examples.css";

let htmlStr = `<table class='table'>
  <tr>
    <th class='th'>Song Title</th>
    <th class='th'>Artist</th>
    <th class='th'>Album</th>
    <th class='th'>Year</th>
    <th class='th'>Length</th>
    <th class='th'>Label</th>
  </tr>
  <tr>
    <td class='td'>Nikes</td>
    <td class='td'>Frank Ocean</td>
    <td class='td'>Blonde</td>
    <td class='td'>2016</td>
    <td class='td'>5:14</td>
    <td class='td'>Boys Don't Cry</td>
  </tr>
  <tr>
    <td class='td'>Small Worlds</td>
    <td class='td'>Mac Miller</td>
    <td class='td'>Swimming</td>
    <td class='td'>2018</td>
    <td class='td'>4:32</td>
    <td class='td'>Warner Records</td>
  </tr>
  <tr>
    <td class='td'>Garden (Say It Like Dat)</td>
    <td class='td'>SZA</td>
    <td class='td'>Ctrl</td>
    <td class='td'>2017</td>
    <td class='td'>3:28</td>
    <td class='td'>Top Dawg Entertainment</td>
  </tr>
  <tr>
    <td class='td'>Come Thru</td>
    <td class='td'>Drake</td>
    <td class='td'>Nothing Was The Same</td>
    <td class='td'>2013</td>
    <td class='td'>3:56</td>
    <td class='td'>Cash Money Records</td>
  </tr>
  <tr>
    <td class='td'>DEVASTATED</td>
    <td class='td'>Joey Bada$$</td>
    <td class='td'>ALL-AMERIKKKAN BADA$$</td>
    <td class='td'>2017</td>
    <td class='td'>3:27</td>
    <td class='td'>Pro Era</td>
  </tr>
</table>`;

let cssStr = `.table {
  border: solid 2px #afafaf;
  border-collapse: collapse;
  text-align: left;
}

.th {
  background-color: #cecece;
  color: #404040;
  padding: 10px;
}

.td {
  border: solid 2px #afafaf;
  color: #333;
  padding: 10px;
}`;

export default function Table() {
  return (
    <>
      <div className="flex-split">
        <div className="html-preview">
          <div className="html-file">index.html</div>:
          <div className="html-text">{htmlStr}</div>
        </div>
        <div className="css-preview">
          <div className="css-file">style.css</div>:
          <div className="css-text">{cssStr}</div>
        </div>
        <div className="html-render">
          <div className="html-file">html body</div>:
          <div className="html-body">
            <table className="table">
              <tr>
                <th className="th">Song Title</th>
                <th className="th">Artist</th>
                <th className="th">Album</th>
                <th className="th">Year</th>
                <th className="th">Length</th>
                <th className="th">Label</th>
              </tr>
              <tr>
                <td className="td">Nikes</td>
                <td className="td">Frank Ocean</td>
                <td className="td">Blonde</td>
                <td className="td">2016</td>
                <td className="td">5:14</td>
                <td className="td">Boys Don't Cry</td>
              </tr>
              <tr>
                <td className="td">Small Worlds</td>
                <td className="td">Mac Miller</td>
                <td className="td">Swimming</td>
                <td className="td">2018</td>
                <td className="td">4:32</td>
                <td className="td">Warner Records</td>
              </tr>
              <tr>
                <td className="td">Garden (Say It Like Dat)</td>
                <td className="td">SZA</td>
                <td className="td">Ctrl</td>
                <td className="td">2017</td>
                <td className="td">3:28</td>
                <td className="td">Top Dawg Entertainment</td>
              </tr>
              <tr>
                <td className="td">Come Thru</td>
                <td className="td">Drake</td>
                <td className="td">Nothing Was The Same</td>
                <td className="td">2013</td>
                <td className="td">3:56</td>
                <td className="td">Cash Money Records</td>
              </tr>
              <tr>
                <td className="td">DEVASTATED</td>
                <td className="td">Joey Bada$$</td>
                <td className="td">ALL-AMERIKKKAN BADA$$</td>
                <td className="td">2017</td>
                <td className="td">3:27</td>
                <td className="td">Pro Era</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
