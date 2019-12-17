import React from 'react';
import PropTypes from 'prop-types';




const Movie = (props) => {
return (
 
<div>
<h2>{props.title}</h2>
<p>{props.release}</p>
<img 
      src={props.image}
      alt=""
      />
<div>
{props.overview}
</div>


</div>

)
}
export default Movie;