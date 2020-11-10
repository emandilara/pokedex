import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import Loading from './Loading';

const PokemonInfo = (props) => {
  const { name, url } = { ...props.about };
  const [info, setInfo] = React.useState({});
  const [infoFetched, setInfoFetched] = React.useState(false);

  axios.get(url)
    .then(res => {
      const data = res && res.data;
      setInfo(data);
      setInfoFetched(true);
    })

  return (
    <Fragment>
      { !infoFetched && <Loading />}
      { !!infoFetched &&
        <Card>
          <Card.Body>
            <h3>{name}</h3>
            <h5>Order: {info.order}</h5>
            <h5>Height: {info.height}</h5>
            <h5>Weight: {info.weight}</h5>
            <h5>Base experience: {info.base_experience}</h5>
          </Card.Body>
        </Card>
      }
    </Fragment>
  )
}

export default PokemonInfo;