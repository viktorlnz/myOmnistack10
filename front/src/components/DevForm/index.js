import React, { useState, useEffect } from 'react';

import '../../global.css';
import './styles.css';

import api from '../../services/api';

function DevForm( {onSubmit} ){
    

    const [github_username, setGitHubUsername] = useState('');
    const [techs, setTechs] = useState('');

    const[latitude, setLatitude] = useState('');
    const[longitude, setLongitude] = useState('');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition(
            (position) => {
            const { latitude, longitude } = position.coords;
            setLatitude(latitude);
            setLongitude(longitude);
        },
        (err) => {
            console.log(err);
        },
        {
            timeout: 30000
        }
        )
    }, []);

    async function handleSubmit(e) {
      e.preventDefault();
      await onSubmit({
        github_username,
        techs,
        latitude,
        longitude
    });

      setGitHubUsername('');
      setTechs('');
    }

    return(
    <aside>
        <strong>Cadastrar</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github:</label>
            <input name="github_username" id="github_username" value={github_username} onChange={e=>setGitHubUsername(e.target.value)} required/>
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias:</label>
            <input name="techs" id="techs" value={techs} onChange={e=>setTechs(e.target.value)} required/>
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude:</label>
              <input type="number" name="latitude" id="latitude" value= {latitude} onChange={e=>setLatitude(e.target.value)} required/>
            </div>
            <div className="input-block">
              <label htmlFor="longitude">Longitude:</label>
              <input type="number" name="longitude" id="longitude" value={longitude} onChange={e=>setLongitude(e.target.value)} required/>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
    </aside>
    );
}

export default DevForm;