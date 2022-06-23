import React from 'react';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

let animals = [
  'https://cdn.pixabay.com/photo/2015/04/10/01/41/fox-715588__340.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/ec/Animal-that-start-with-a.jpg',
  'https://www.seismosoc.org/wp-content/uploads/2018/04/frog-edit.jpg',
  'https://cdn.stocksnap.io/img-thumbs/960w/otter-animal_TJDCHQADKM.jpg',
  'https://cdn.pixabay.com/photo/2015/09/22/14/34/african-lion-951778__340.jpg',
];

function Animals() {
  const [fav, setFav] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const favChange = () => {
    setFav(event.target.value);
  };

  const setFavAnimal = () => {
    dispatchFavAnimal().then(() => {
      // dispatch({type: 'SET_FAV', payload: fav});     // move to async function
      // to clear field as long as its value set to same hook. see line 38
      setFav('');
      // history.push('/home');
    });
  };

  async function dispatchFavAnimal() {
    dispatch({type: 'SET_FAV', payload: fav});
  }

  return (
    <div>
      <h1>ANIMALS</h1>
      <p>
        <input
          type="text"
          placeholder="fav"
          onChange={favChange}
          value={fav}></input>
        <button onClick={setFavAnimal}>Set Fav Animal</button>
      </p>

      {animals.map((animal, i) => (
        <img key={i} src={animal} />
      ))}
    </div>
  );
}

export default Animals;
