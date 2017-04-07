import React from 'react';
import { CAST_POSTER_BASE_URL } from '../utils/utility';

import '../styles/cast.css';

const Cast = ({casts}) => {

  function renderCast() {
    let count = 0;
    const castItems = casts.map((cast) => {
      let bool = false;
      if(cast.profile_path === null) {
        bool = true;
      }

      if(cast.order > 6 || count === 6 ) {
        return castItems;
      }else {
        count++;
        return (
          <div className="cast-item" key={cast.order}>
          {cast.profile_path && <div className="cast-img">
               <img src={CAST_POSTER_BASE_URL + cast.profile_path} alt=""/>
           </div>
          }
          {bool && <div className="cast-no-img">
            <h3>{cast.name.split(" ")[0].charAt(0)}{cast.name.split(" ")[1].charAt(0)}</h3>
           </div>
           }
            <div className="cast-name">{cast.name}</div>
            <div className="cast-char">{cast.character}</div>
          </div>
        );
      }
    });

    return castItems;
  }

  return (
    <div>
      <h3>Top Casts</h3>
      <div className="cast-list">
        { renderCast() }
      </div>
    </div>
  );
};

export default Cast;
