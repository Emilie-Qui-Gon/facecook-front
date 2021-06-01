import React from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';

import Field from './Field';

import './registration.scss';

const Registration = ({email,
  password,
  pseudonym,
  picture,
  changeSelect,
  changeField,
  doSubmit,}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    doSubmit();
    history.push("/");
  };

  const handleSelect = (e) => {
    const newSelect = e.target.value;
    changeSelect(newSelect);
  }

  let history = useHistory();

  // function handleClick() {
  // }

  return (
    <div className="registration" id="registration-id">
      <h2 className="registration__titles">Inscription <i className="fas fa-clipboard-check"></i></h2>

      <form autoComplete="off" className="registration__element" onSubmit={handleSubmit}>
        <div className="registration__file">
        
          <label className="registration__label" htmlFor="picture">Choisir un avatar [Optionnel]</label>
          <input className="registration__input-parcourir" placeholder="avatar" onChange={changeField} value={picture} type="file" name="picture" accept="image/png, image/jpeg"></input>

          <select name="select" id="visibility-select" required onChange={handleSelect}>
            <option className="registration__select" value="">-- Visibilité du Profil --</option>
            <option value="1">privé</option>
            <option value="2">public</option>
          </select>

          <Field
            name="pseudonym"
            placeholder="Pseudo"
            onChange={changeField}
            value={pseudonym}
            required="required"
          />

          <Field
            name="email"
            placeholder="Adresse Email"
            onChange={changeField}
            value={email}
            required="required"
          />

          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={changeField}
            value={password}
            required="required"
          />

          <button
            type="submit"
            className="registration__button"
          >
            Valider
        </button>
        </div>
      </form>
    </div>
  );
};
Registration.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  pseudonym: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  changeSelect: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  doSubmit: PropTypes.func.isRequired
}

export default (Registration);
