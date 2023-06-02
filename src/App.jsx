import { useState } from 'react';
import logo from './assets/Valve_logo.svg';
import './App.scss';
import UserFrame from './components/UserFrame/UserFrame';
import Carrousel from './components/Carrousel/Carrousel';

function App() {
  
  return (
    <>
      <header className="main_header">
        <div className="header_inner_wrapper">
          <div className="top_nav">
            <div className="logo">
              <a href="https://www.valvesoftware.com/es/">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          </div>
        </div>
        <div id="header_background_video" />
      </header>
      <div id="content-outer-wrapper">
        <div id="content-inner-wrapper">
          <div id="content">
            <section className="row">
              <div className="col_9">
                <h1>
                  At Valve we make games, Steam, and hardware.
                </h1>
              </div>
              <div className="col_3 footnotes" />
            </section>
            <section className="row popular">
              <div className="col_6">
                <h3>
                  Our games attract millions
                  <br />
                  {' '}
                  and define genres.
                </h3>
                <p>
                  Valve's debut title, Half-Life, was released in 1998. It won more than 50 game of the year awards, and PC Gamer even called it the
                  {' '}
                  <i>Best PC Game Ever</i>
                  . Since then, we've released
                  {' '}
                  <a href="https://store.steampowered.com/search/?developer=Valve" target="_blank" rel="noreferrer">dozens of titles</a>
                  {' '}
                  that changed the world. Today, millions of people play our games every day.
                </p>
                <div className="popular_games">
                  <div className="row">
                    <div className="popular_game col_6">
                      <a href="https://store.steampowered.com/app/546560/HalfLife_Alyx/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_alyx.jpg" />
                      </a>
                      <h4>
                        Half-Life: Alyx
                      </h4>
                    </div>
                    <div className="popular_game col_6">
                      <a href="https://store.steampowered.com/app/1046930/Dota_Underlords/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_underlords.jpg" />
                      </a>
                      <h4>
                        Dota Underlords
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="popular_game col_6">
                      <a href="http://store.steampowered.com/app/730/CounterStrike_Global_Offensive/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_csgo.jpg" />
                      </a>
                      <h4>
                        Counter-Strike: Global Offensive
                      </h4>
                    </div>
                    <div className="popular_game col_6">
                      <a href="http://store.steampowered.com/app/570/Dota_2/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_dota2.jpg" />
                      </a>
                      <h4>
                        Dota 2
                      </h4>
                    </div>
                  </div>
                  <div className="row">
                    <div className="popular_game col_6">
                      <a href="http://store.steampowered.com/app/583950/Artifact/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/upcoming_artifact.jpg" />
                      </a>
                      <h4>
                        Artifact
                      </h4>
                    </div>
                    <div className="popular_game col_6">
                      <a href="http://store.steampowered.com/app/440/Team_Fortress_2/" target="_blank" rel="noreferrer">
                        <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/popular_tf2.jpg" />
                      </a>
                      <h4>
                        Team Fortress 2
                      </h4>
                    </div>
                  </div>
                  <div className="genre_defining_games">
                    <p>
                      Our earlier titles were built on an innovative engine with world-className gameplay as their paramount goal, and praised by critics as games that revitalized or even invented their genres.
                    </p>
                    <div className="row">
                      <div className="genre_defining_game col_3">
                        <a href="http://store.steampowered.com/app/70/HalfLife/" target="_blank" rel="noreferrer">
                          <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_hl.jpg" />
                        </a>
                        <h5 className="game_title">
                          Half-Life
                        </h5>
                      </div>

                      <div className="genre_defining_game col_3">
                        <a href="http://store.steampowered.com/app/500/Left_4_Dead/" target="_blank" rel="noreferrer">
                          <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_l4d.jpg" />
                        </a>
                        <h5 className="game_title">
                          Left 4 Dead
                        </h5>
                      </div>
                      <div className="genre_defining_game col_3">
                        <a href="http://store.steampowered.com/app/400/Portal/" target="_blank" rel="noreferrer">
                          <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_portal.jpg" />
                        </a>
                        <h5 className="game_title">
                          Portal
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="genre_defining_game col_3">
                        <a href="http://store.steampowered.com/app/220/HalfLife_2/" target="_blank" rel="noreferrer">
                          <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_hl2.jpg" />
                        </a>
                        <h5 className="game_title">
                          Half-Life 2
                        </h5>
                      </div>
                      <div className="genre_defining_game col_3">
                        <a href="https://store.steampowered.com/app/550/Left_4_Dead_2/" target="_blank" rel="noreferrer">
                          <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_l4d2.jpg" />
                        </a>
                        <h5 className="game_title">
                          Left 4 Dead 2
                        </h5>
                      </div>
                      <div className="genre_defining_game col_3">
                        <a href="https://store.steampowered.com/app/620/Portal_2/" target="_blank" rel="noreferrer">
                          <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/catalog/catalog_p2.jpg" />
                        </a>
                        <h5 className="game_title">
                          Portal 2
                        </h5>
                      </div>
                    </div>
                  </div>
                  <div className="new_games">
                    <p>
                      We have some new games in the works, too. A couple have been announced, while others remain top secret.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col_6 games_popular_overbleed_wrapper sm_hidden">
                <div className="games_popular_overbleed_video video overbleed">
                  <video playsInline autoPlay muted loop poster="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/p-body.jpg">
                    <source src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/p-body_fullsize.webm" type="video/webm" />
                    <source src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/p-body_fullsize.mp4" type="video/mp4" />
                  </video>
                </div>
              </div>
            </section>
            <section className="image dota_tournament">
              <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/dota2-the-international-2018.jpg" />
              <div className="row">
                <div className="col_offset_9 col_3">
                  <div className="caption_wrapper">
                    <div className="image_caption caption">
                      <p>
                        The 2018 International Dota 2 Championships, hosted at Rogers Arena in Vancouver, BC, was enjoyed by millions of concurrent viewers online.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section>
              <div className="row">
                <div className="col_9">
                  <h3>
                    Our platform connects players with the world's greatest entertainment.
                  </h3>
                  <p>
                    We created
                    {' '}
                    <a href="https://store.steampowered.com/about/" target="_blank" rel="noreferrer">Steam</a>
                    {' '}
                    in 2003 to serve as a digital content distribution channel, before app stores existed. It's since grown and evolved into a platform for thousands of creators and publishers to deliver content and establish direct relationships with their customers. The Steam Community enables millions of players to do likewise, sharing entertainment and ideas, and making friends.
                  </p>
                </div>
              </div>
            </section>
            <UserFrame UsersOnline={20111111} UsersInGame={4551088} ></UserFrame>
            <section>
            <div className="row">
              <div className="col_9">
                <h3>
                  Our hardware is a happiness delivery vehicle.			</h3>
                <p>
                  We make consumer electronic devices that expand and improve gaming on the PC. Things like the <a href="http://www.steamdeck.com" target="_blank">Steam Deck</a>, <a href="https://www.valvesoftware.com/index">Valve Index</a>, <a href="http://store.steampowered.com/app/353370/Steam_Controller/" target="_blank">Steam Controller</a>, and <a href="http://store.steampowered.com/app/353380/Steam_Link/" target="_blank">Steam Link</a>. We invented the <a href="https://partner.steamgames.com/vrlicensing" target="_blank">VR technologies</a> that power the <a href="http://store.steampowered.com/app/358040/HTC_Vive/" target="_blank">Vive</a>, an interactive VR system brought to market in partnership with HTC.			</p>
              </div>
            </div>
            <Carrousel></Carrousel>
            <div className="row">
              <div className="col_9">
                <h3>
                  Iterate, test, repeat.			</h3>
                <p>
                  Just as in software development, we conduct playtests and share prototypes with our partners and players. We follow the results of this work all the way through the manufacturing process to create products people are sure to enjoy.			</p>
              </div>
            </div>
            <div class="row">
            <div class="col_12">
              <img src="https://cdn.akamai.steamstatic.com/valvesoftware/images/about/controller-protos.jpg"/>
            </div>
            <div class="col_offset_9 col_3">
              <div class="caption_wrapper">
                <div class="image_caption caption">
                  Yes, that first prototype is just barely being held together by gaffer's tape.				</div>
              </div>
            </div>
          </div>
            </section>
            <section class="row">
              <div class="col_6">
                <h3>
                  We're just getting started.		</h3>
                <p>
                  We make all of this stuff collaboratively in Bellevue, Washington, where we combine the resources and talent of a world-class company with the ethos of a small startup. With an engaged and vocal community of partners and players, our products and our company will continue to change and grow in ways we may never have predicted. <a href="https://www.valvesoftware.com/es/">Join us</a>, and help inform what's next.		</p>
              </div>
              <div class="col_6">
                <video playsInline="" autoPlay="" muted="" loop="" poster="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd.jpg">
                  <source src="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd_fullsize.webm" type="video/webm" media="screen and (min-width:800px)"/>
                  <source src="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd_fullsize.mp4" type="video/mp4" media="screen and (min-width:800px)">
                  <source src="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd_small.webm" type="video/webm" media="screen and (max-width:799px)">
                  <source src="https://cdn.akamai.steamstatic.com/valvesoftware/images/videos/hardware-hmd_small.mp4" type="video/mp4" media="screen and (max-width:799px)">
                </video>
              </div>
            </section>
          </div>
        </div>
      </div>

    </>
  );
}

export default App;
