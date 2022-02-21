import React from 'react';
import { useState } from 'react';
import building from './Images/building.svg';
import Linechart from '../components/Graph/Linechart';
import Popup1 from '../components/Popups/Popup1';
import Popup2 from '../components/Popups/Popup2';
import Popup3 from '../components/Popups/Popup3';
import Popup4 from '../components/Popups/Popup4';
import popup1 from './Images/popup1.svg';
import popup2 from './Images/popup2.svg';
import popup3 from './Images/popup3.svg';
import popup4 from './Images/popup4.svg';
import Lits from './Images/Lits1';


function Etablissement() {
  const [button1, setButton1] = useState(false);
  const [button2, setButton2]= useState(false);
  const [button3, setButton3] = useState(false);
  const [button4, setButton4] = useState(false);

  return (
    <div className='building'>
        <div className='myBuilding'>
          <div className='score'>
            <h3 className='overallScore'>Note Globale : <b>2,28</b>/5</h3>
          </div>
          <div className='buildingName'>
            <h1>BRUNE</h1>
          </div>  
        </div>
        <div className='buildingImgTxt'>
          <div className='buildingImg'>
            <img height={1500} src={building} alt="etablissement"/>
          </div>
        <div className='buildingTxt'>


          <h2 className='room'>L'ESSENTIEL</h2>
          <p className='room1'>
            La note de la salle L'essentiel est définie en fonction du <strong>taux d'occupation</strong> enregistré le mois précédent pour l'établissement, 
            ainsi que le <strong>nombre de sorties et d'entrées</strong> sur les 6 derniers mois.
          </p>
          <button onClick={ () => setButton1(true)} className='buttons'>Voir les données</button>
          <Popup1 trigger={button1} setTrigger={setButton1}>
            <div>
              <Lits />
            </div>
          </Popup1>


          <h2 className='room'>BIEN-ETRE</h2>
          <p className='room1'>
            La note de la salle Bien-être est définie en fonction du <strong>ratio employés/résidents</strong> du mois en cours ainsi 
            que de la <strong>fréquence de l'évaluation de la douleur</strong>, de la <strong>mesure de poids</strong> et de <strong>visite médical.</strong> La <strong>note google</strong> de l'établissement est également pris en compte.
          </p>
          <button onClick={ () => setButton2(true)} className='buttons'>Voir les données</button>
          <Popup2 trigger={button2} setTrigger={setButton2}>
            <div>
            <img width={1600} src={popup2} alt="PopupBienEtre"/>
            </div>
          </Popup2>


          <h2 className='room'>INCIDENTS</h2>
          <p className='room1'>
            La note de la salle Incidents est définie en fonction de la <strong>moyenne de chutes par résident</strong> du mois précédent, du <strong>pourcentage des 
            sorties classiques contre celui des sorties cause décès</strong> ainsi que le <strong>pourcentage des décès cause chutes contre celui des décès cause vieillesse.</strong>
          </p>
          <button onClick={ () => setButton3(true)} className='buttons'>Voir les données</button>
          <Popup3 trigger={button3} setTrigger={setButton3}>
            <h3 className='title'>INCIDENTS</h3>
            <div className="block1">
            <h3 className="subtitle">SORTIES</h3>
            <div className='title2'>
              <div className='title1'>
                <h4 className="average">POURCENTAGES DE SORTIES </h4>
                <p className="caption">CALCULE PAR AN ENTRE 2014 ET 2019 SUR 100% DES SORTIES</p>
              </div>
              <div className='title1'>
                <h4 className="average">POURCENTAGES DE SORTIES DECES</h4>
                <p className="caption">CALCULE PAR AN ENTRE 2014 ET 2019 SUR 100% DES SORTIES</p>
              </div>
              </div>
              <img height={145} src={popup3} alt="blocIncidents"/>
            </div>
            <div className="block2">
                  <h3 className="subtitle">CHUTES</h3>
                  <h4 className="average1">MOYENNE DE CHUTES PAR RESIDENTS :</h4>
                  <p className="caption1">CALCULE PAR AN ENTRE 2014 ET 2019</p>
                  <div className="lineGraph">
                    <Linechart />
                  </div>
            </div>
          </Popup3>


          <h2 className='room'>PREVENTION</h2>
          <p className='room1'>
            La note de la salle Prédiction est définie en fonction du <strong>nombre de cas à risque "en attente" et "sécurisé"</strong> ainsi que <strong>l'âge des résidents</strong> dans les 2 années à venir.
          </p>
          <button onClick={ () => setButton4(true)} className='buttons'>Voir les données</button>
          <Popup4 trigger={button4} setTrigger={setButton4}>
          <div>
            <img width={1600} src={popup4} alt="PopupPrevention"/>
          </div>
          </Popup4>

          </div>
        </div>
    </div>
  );
}



export default Etablissement;
