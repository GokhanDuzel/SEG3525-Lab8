import React from "react";
import Button from "react-bootstrap/Button";
import Popup from "reactjs-popup";


const PopupExample = () => (
  <Popup
     trigger={<Button className="float-right button" variant="warning text-secondary">Explore it!</Button>}
     modal
     closeOnDocumentClick
   >
     <span> Modal content </span>
   </Popup>
);

class Home extends React.Component {

render = () => {
   return (
     <div className="container">
     <br/>
      <PopupExample/>
      <br/><br/>
        <div className="d-flex justify-content-center">
          <h1 className="text-secondary float-none"><strong>Gblizz</strong></h1>
        </div>
        <h4 className="text-secondary" style={{"textAlign":"center"}}>"Your friendly game reviewer"</h4><br/>

      <div className="container">
        <div className="card bg-warning" style={{"textAlign":"center"}}>
          <img className="card-img-top" src={require('./img/wow.jpg')} height="360px" alt="World of Warcraft"/>
        <div className="card-body text-secondary">
          <h4 className="card-title"><strong>World Of Warcraft</strong></h4>
          <p className="card-text">World of Warcraft (WoW) is a massively multiplayer
           online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment.
           It is the fourth released game set in the Warcraft fantasy universe.
            World of Warcraft takes place within the Warcraft world of Azeroth,
            approximately four years after the events at the conclusion of Blizzard's
            previous Warcraft release, Warcraft III: The Frozen Throne. The game
            was announced in 2001, and was released for the 10th anniversary of the
            Warcraft franchise on November 23, 2004. Since launch, World of Warcraft
            has had eight major expansion packs produced for it: The Burning Crusade,
            Wrath of the Lich King, Cataclysm, Mists of Pandaria, Warlords of Draenor,
            Legion, Battle for Azeroth, and Shadowlands. </p>
        </div>
        </div><br/>
        </div>

                  <div className="container">
                      <div className="card flex-row flex-wrap bg-warning text-secondary">
                          <div className="card-header border-0">
                              <img src={require('./img/ffxv.jpg')} height="300px" width="220px" alt="FFXV"/>
                          </div>
                          <div className="card-block px-2"> <br/>
                              <h4 className="card-title"><strong>Final Fantasy XV</strong></h4>
                              <p className="card-text">Final Fantasy XV is an action role-playing game developed and published by Square Enix as part of the <br/>Final Fantasy series. It was released for the PlayStation 4 and Xbox One in 2016, Microsoft Windows in 2018, <br/> and Stadia as a launch title in 2019. The game features an open world environment and action-based battle <br/> system, incorporating quick-switching weapons, elemental magic, and other features such as vehicle travel and <br/> camping. The base campaign was later expanded with downloadable content (DLC), adding further gameplay <br/> options such as additional playable characters and multiplayer. </p>
                          </div>
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card flex-row flex-wrap bg-warning text-secondary">
                          <div className="card-header border-0">
                              <img src={require('./img/styx.jpg')} height="300px" width="220px" alt="styx"/>
                          </div>
                          <div className="card-block px-2"> <br/>
                              <h4 className="card-title"><strong>Styx</strong></h4>
                              <p className="card-text">Styx: Master of Shadows is a stealth video game developed by Cyanide Studios for Microsoft Windows, <br/>PlayStation 4 and Xbox One. The game is a prequel, and the second video game to take place in the world<br/> established by 2012's Of Orcs and Men.</p>
                          </div>
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card flex-row flex-wrap bg-warning text-secondary">
                          <div className="card-header border-0">
                              <img src={require('./img/witcher3.jpg')} height="300px" width="220px" alt="witcher3"/>
                          </div>
                          <div className="card-block px-2"> <br/>
                              <h4 className="card-title"><strong>The Witcher 3</strong></h4>
                              <p className="card-text">The Witcher 3: Wild Hunt is a 2015 action role-playing game developed and published by Polish developer<br/> CD Projekt and is based on The Witcher series of fantasy novels by Andrzej Sapkowski. It is the sequel to the<br/> 2011 game The Witcher 2: Assassins of Kings and the third main installment in The Witcher's video game series,<br/> played in an open world with a third-person perspective.</p>
                          </div>
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card flex-row flex-wrap bg-warning text-secondary">
                          <div className="card-header border-0">
                              <img src={require('./img/tboi.png')} height="300px" width="220px" alt="tboi"/>
                          </div>
                          <div className="card-block px-2"> <br/>
                              <h4 className="card-title"><strong>The Binding of Isaac</strong></h4>
                              <p className="card-text">The Binding of Isaac is an indie roguelike video game designed by Edmund McMillen and Florian Himsl,<br/> initially released in 2011 for Microsoft Windows; the game was later ported for OS X, and Linux.<br/>The game's title and plot are inspired by the Biblical story of the Binding of Isaac. In the game, Isaac's mother<br/> receives a message from God demanding the life of her son as proof of her faith, and Isaac, fearing for his life,<br/> flees into the monster-filled basement of their home where he must fight to survive.</p>
                          </div>
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card flex-row flex-wrap bg-warning text-secondary">
                          <div className="card-header border-0">
                              <img src={require('./img/valorant.jpg')} height="300px" width="220px" alt="valorant"/>
                          </div>
                          <div className="card-block px-2"> <br/>
                              <h4 className="card-title"><strong>Valorant</strong></h4>
                              <p className="card-text">Valorant is a free-to-play multiplayer tactical first-person shooter developed and published by Riot Games, <br/>for Microsoft Windows. Announced under the codename Project A in October 2019, the game began a closed <br/>beta with limited access on April 7, 2020, and was fully released on June 2, 2020.</p>
                          </div>
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/>

                  <div className="container">
                      <div className="card flex-row flex-wrap bg-warning text-secondary">
                          <div className="card-header border-0">
                              <img src={require('./img/undertale.jpg')} height="300px" width="220px" alt="undertale"/>
                          </div>
                          <div className="card-block px-2"> <br/>
                              <h4 className="card-title"><strong>Undertale</strong></h4>
                              <p className="card-text">Undertale is a role-playing video game created by indie developer Toby Fox. The player controls a child who <br/>has fallen into the Underground: a large, secluded region under the surface of the Earth, separated by <br/>a magic barrier. The player meets various monsters during the journey back to the surface. Some monsters <br/>might engage the player in a fight.</p>
                          </div>
                          <div classNames="w-100"></div>
                      </div>
                  </div><br/><br/>


      </div>
   )
 }
}

export default Home;
