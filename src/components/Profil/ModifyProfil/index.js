import React from 'react';
import { useHistory } from "react-router-dom";
import Field from './Field';
import PropTypes from 'prop-types';

import './modify-profil.scss';

const ModifyProfil = ({email,
  password,
  pseudonym,
  picture,
  changeSelect,
  changeField,
  modifySubmit,}) => {

  let history = useHistory();

  const handleSubmit = (evt) => {
      evt.preventDefault();
      history.push("/");
      modifySubmit();
    };

  const handleSelect = (e) => {
    const newSelect = e.target.value;
    changeSelect(newSelect);
  }

  return (
    <div className="registration">
      <h2 className="registration__title">Modifier mon profil</h2>

      <form autoComplete="off" className="registration__element" onSubmit={handleSubmit}>
          <div className="registration__file">

            <Field className="registration__picture"
              type="file"
              name="picture"
              placeholder="avatar"
              onChange={changeField}
              value={picture}
            />
            <h3 className="registration__avatar">Choisir un avatar (optionnel)</h3>

            <select name="select" id="visibility-select" required onChange={handleSelect}>
              <option className="registration__select" value="">--Choisir sa visibilité--</option>
              <option value="1">Privé</option>
              <option value="2">Public</option>
            </select>

            <Field
              name="pseudonym"
              placeholder="pseudo"
              onChange={changeField}
              value={pseudonym}
              required
            />

            <Field
              name="email"
              placeholder="Adresse Email"
              onChange={changeField}
              value={email}
              required
            />

            <Field
              name="password"
              type="password"
              placeholder="Mot de passe"
              onChange={changeField}
              value={password}
              required
            />

            <button
              type="submit"
              className="registration__button"
              id="registration-button-id"
            >
            Valider
          </button>
          </div>
        </form>
  </div>
  );
};

ModifyProfil.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  pseudonym: PropTypes.string.isRequired,
  // picture: PropTypes.string.isRequired,
  changeSelect: PropTypes.func.isRequired,
  changeField: PropTypes.func.isRequired,
  modifySubmit: PropTypes.func.isRequired,
}


export default ModifyProfil;
