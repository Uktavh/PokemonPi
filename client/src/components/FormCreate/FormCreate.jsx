import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postPokemon } from "../../redux/actions";
import { Link } from "react-router-dom";
import s from "./FormCreate.module.css";

export default function FormCreate() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    height: "0",
    weight: "0",
    image: "",
    types: [],
  });

  const [errorMessage, setErrorMessage] = useState("");


  function handleHeightChange(e) {
    const newHeight = parseFloat(e.target.value);
    let newWeight;
    if (newHeight > 2) {
      newWeight = 105 + (newHeight - 1) * 50
    } else if (newHeight > 1) {
      newWeight = 25 + (newHeight - 1) * 90;
    } else {
      newWeight = newHeight * 25;
    }

    setInput((prevState) => ({
      ...prevState,
      height: newHeight.toFixed(1),
      weight: newWeight.toFixed(1),
    }));
  }

  function handleWeightChange(e) {
    const newWeight = parseFloat(e.target.value);
    const currentHeight = parseFloat(input.height);
    let newHeight = currentHeight;
  
    if (newWeight < currentHeight) {
      if (currentHeight <= 3) {
        newHeight = newWeight;
      } else if (currentHeight <= 200) {
        newHeight = 100 + (newWeight - 100) / 1.5;
      } else {
        newHeight = 200 + (newWeight - 250) / 3;
      }
    } else if (newWeight > currentHeight * 1.1) {
      if (currentHeight > 200) {
        newHeight = 200 + (newWeight - 250) / 3;
      } else if (currentHeight > 100) {
        newHeight = 100 + (newWeight - 100) / 1.5;
      } else {
        newHeight = newWeight;
      }
    }
  
    setInput((prevState) => ({
      ...prevState,
      height: newHeight.toFixed(1),
      weight: newWeight.toFixed(1),
    }));
  }



  function handleChange(e) {
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };

    if (e.target.name === "height") {
      newInput.weight = e.target.value * 1.5;
    }

    setInput(newInput);
  }

  function handleSelect(e) {
    setInput({
      ...input,
      types: [...input.types, e.target.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(postPokemon(input));
    alert("Pokemon created successfully");
    setInput({
      name: "",
      height: "",
      weight: "",
      image: "",
      types: [],
    });
  }

  function handleNameChange(e) {
    const value = e.target.value;
    const maxLength = 16;
    const containsNumbers = /\d/;

    if (value.length > maxLength) {
      setErrorMessage("Name should be 16 characters or less");
    } else if (containsNumbers.test(value)) {
      setErrorMessage("Name should not contain numbers");
    } else {
      setInput({
        ...input,
        name: value,
      });
      setErrorMessage("");
    }
  }

  return (
      <div className={s.formContainer}>
        <h1>Create your Pokemon</h1>
        <form onSubmit={(e) => handleSubmit(e)} >
        <div className={s.formGroup}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={input.name}
            onChange={(e) => handleNameChange(e)}
            required
          />
          {errorMessage && <p className={s.errorMessage}>{errorMessage}</p>}
        </div>


        <div className={s.formGroup}>
        <label>Height</label>
        <input
          type="number"
          name="height"
          step="0.1"
          min="0"
          max="3"
          value={input.height}
          onChange={(e) => handleHeightChange(e)}
          required
        />
                <input
          type="range"
          name="height"
          min="0"
          max="3"
          step="0.1"
          value={input.height}
          onChange={(e) => handleHeightChange(e)}
          required
        />
      </div>
      
      <div className={s.formGroup}>
        <label>Weight</label>
        <input
          type="number"
          name="weight"
          min="0"
          max="3000"
          value={input.weight}
          onChange={(e) => handleWeightChange(e)}
          required
        />
                <input
          type="range"
          name="weight"
          min="0"
          max="300"
          step="1"
          value={input.weight}
          onChange={(e) => handleWeightChange(e)}
          required
        />
      </div>



      <div className={s.formGroup}>
        <label>speed</label>
        <input
          type="range"
          name="speed"
          min="0"
          max="300"
          step="1"
          value={input.speed}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="number"
          name="speed"
          min="0"
          max="300"
          value={input.speed}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className={s.formGroup}>
        <label>hp</label>
        <input
          type="range"
          name="hp"
          min="0"
          max="300"
          step="1"
          value={input.hp}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="number"
          name="hp"
          min="0"
          max="300"
          value={input.hp}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className={s.formGroup}>
        <label>attack</label>
        <input
          type="range"
          name="attack"
          min="0"
          max="300"
          step="1"
          value={input.attack}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="number"
          name="attack"
          min="0"
          max="300"
          value={input.attack}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
      <div className={s.formGroup}>
        <label>defense</label>
        <input
          type="range"
          name="defense"
          min="0"
          max="300"
          step="1"
          value={input.defense}
          onChange={(e) => handleChange(e)}
          required
        />
        <input
          type="number"
          name="defense"
          min="0"
          max="300"
          value={input.defense}
          onChange={(e) => handleChange(e)}
          required
        />
      </div>
        <div className={s.formGroup}>
          <label>Image</label>
          <input
            type="text"
            name="image"
            value={input.image}
            onChange={(e) => handleChange(e)}
            required
          />
        </div>
        <div className={s.formGroup}>
          <label>Types</label>
          <select onChange={(e) => handleSelect(e)}>
            <option value="normal">normal</option>
            <option value="fighting">fighting</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
            <option value="unknown">unknown</option>
            <option value="shadow">shadow</option>
          </select>
          <select onChange={(e) => handleSelect(e)}>
          <option value="normal">normal</option>
            <option value="fighting">fighting</option>
            <option value="flying">flying</option>
            <option value="poison">poison</option>
            <option value="ground">ground</option>
            <option value="rock">rock</option>
            <option value="bug">bug</option>
            <option value="ghost">ghost</option>
            <option value="steel">steel</option>
            <option value="fire">fire</option>
            <option value="water">water</option>
            <option value="grass">grass</option>
            <option value="electric">electric</option>
            <option value="psychic">psychic</option>
            <option value="ice">ice</option>
            <option value="dragon">dragon</option>
            <option value="dark">dark</option>
            <option value="fairy">fairy</option>
            <option value="unknown">unknown</option>
            <option value="shadow">shadow</option>
          </select>

        </div>
        <button type="submit">Create</button>
      </form>
      <Link to="/home">
        <button>Back</button>
      </Link>
    </div>
  );
}
