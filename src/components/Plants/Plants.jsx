import React from 'react';
// importing material UI
import {
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import {useState} from 'react';

let plants = [
  'https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/bird_paradise_flower.jpg',
  'https://morningchores.com/wp-content/uploads/2018/12/Velvet-palm-600x400.jpg',
  'https://gardeningsolutions.ifas.ufl.edu/mastergardener/outreach/plant_id/images/flowers/birds_nest_fern.jpg',
  'https://live.staticflickr.com/7523/27521082745_fc94a05059_b.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/7/71/Kalanchoe_tomentosa_Panda_Plant_%28fabooj%29.jpg',
];

function Plants() {
  // size hook
  const [size, setSize] = useState('tiny');
  // color hook
  const [color, setColor] = useState('red');
  const changeText = () => {
    console.log(event.target.value);
  };

  const handleClick = () => {
    const selections = {
      size: size,
      color: color,
    };
    console.log('in handleClick', selections);
  };

  const handleSelect = (event) => {
    console.log(event.target.value);
    setSize(event.target.value);
  };
  const handleColor = (event) => {
    console.log(event.target.value);
    setColor(event.target.value);
  };

  return (
    <div>
      <h1>PLANTS</h1>
      <div>
        <TextField placeholder="newschool" onChange={changeText}></TextField>
        <InputLabel>Select Something</InputLabel>
        <Select onChange={handleSelect} value={size}>
          <MenuItem value="add">Add (add plan to garden)</MenuItem>
          <MenuItem value="tiny">Tiny (smaller than a marble)</MenuItem>
          <MenuItem value="small">Small (smaller than a bread basket)</MenuItem>
          <MenuItem value="medium">Medium (smaller than a table)</MenuItem>
        </Select>
        <InputLabel>Select Color</InputLabel>
        <Select onChange={handleColor} value={color}>
          <MenuItem value="red">red</MenuItem>
          <MenuItem value="blue">blue</MenuItem>
          <MenuItem value="green">green</MenuItem>
          <MenuItem value="yellow">yellow</MenuItem>
        </Select>
        <p>Selected: {size} </p>
        <p>Selected: {color} </p>
        <Button onClick={handleClick}>Click Me</Button>
      </div>
      {plants.map((plant, i) => (
        <img key={i} src={plant} />
      ))}
    </div>
  );
}

export default Plants;
