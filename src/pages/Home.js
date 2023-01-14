import React from "react";
import meAndPooh from '../images/meAndPooh.jpeg';
import mayday from '../images/mayday.jpeg';
import oriental from '../images/oriental.jpeg';
import squidwardWow from '../images/squidwardWow.jpeg';
import {
    Link
  } from "react-router-dom"

function Home() {
    return (
      <div id="content">
        <div id="intro">
          <div>
                <h1 id="title">Welcome to my personal website!</h1>
                <div className="section">
                    <p>
                        Hi, I am Shiyu, a first-year Math of Computation major at UCLA. <br></br>
                        I love reading, photography, badminton, and animes. <br></br>
                        I speak three languages: Mandarin, English, and Japanese. <br></br>
                        My dream pet is a border collie.
                    </p>

                    <p>
                        <Link to="/japanese">Here</Link> is a Japanese version of my self introduction:D
                    </p>
                </div>
          </div>

          <img width="500px" src={meAndPooh} alt="Me and Pooh" />
        </div>

        <div className="section">
            <div className="bridge">
                Shanghai, my hometown
            </div>

            <div className="section">
                <p>
                    To me, Shanghai is the best city in the world. 
                    Born and rasied in Shanghai, 
                    I absolutely love <em>everything</em> about it(except the quarantine).
                    From 生煎锅贴油条粢饭豆浆小笼包白斩鸡 to 龙之梦五角场十号线武康路迪士尼人民广场, 
                    I guess Shanghai has infiltrated my core in every single way.
                    Fun fact about me is I can't speak Shanghainese:'(
                </p>
                <p>
                    Below is a photo I took by the Bund in Shanghai. To see more photos that I took, visit <Link to="/gallery">Gallery</Link>.
                </p>
                <br></br>

                <div className="flex" style={{justifyContent: "flex-end", alignItems: "flex-end"}}>
                    <div className="quote">
                        <p style={{fontStyle: "oblique"}}>
                            “If you are lucky enough to have lived in Shanghai as a young man, 
                            then wherever you go for the rest of your life, it stays with you, 
                            for Shanghai is a moveable feast,” 
                        </p>
                        <p style={{textAlign: "right", fontSize: "20px"}}>
                            so goes Shiyu Ye <br></br>
                            (sorry Hemmingway).
                        </p>
                    </div>

                    <img height="400px" src={oriental} alt="the Oriental Pearl TV Tower" />
                </div>
            </div>
        </div>

        <div className="background">
            <div className="section">
                <div className="bridge" style={{color: "white", textAlign: "right", marginTop: "30px"}}>
                    Skills & Interests
                </div>

                <div className="section">
                    <div>
                        <ul style={{fontWeight: "bold"}}>
                            <li>Adobe Photoshop</li>
                            <li>Adobe Premiere</li>
                            <li>Microsoft Office</li>
                            <li>C++</li>
                            <li>Java</li>
                            <li>Basic Javascript (after learning to make this website)</li>
                        </ul>
                    </div>
                    
                    <div id="center">
                        <img height="200px" src={squidwardWow} alt="squidwardWow" />
                    </div>
                    

                    <div>
                        <p>
                            Before I came to UCLA, all I knew was basic Java and C++.
                            That said, I managed to make this website through learning from Hackschool workshops, recordings, slides, etc.
                            It's definitely tough, but I was able to learn sooo much about web dev during this process.
                        </p>
                        <p>
                            SO SHOUTOUT TO THE COOLEST CLUB 💜<a href="https://hack.uclaacm.com/">ACM Hack</a>💜!!!
                        </p>
                    </div>
                    
                </div>
            </div>
        </div>

        <div className="section">
            <div className="bridge">
                Oh and there is one more thing:
            </div>

            <div className="section">
                <p>
                    Introducing to you, my favorite band...
                </p>
            </div>

            <div className="section">
                <div id="mayday">
                    <div style={{marginTop: "-40px", marginBottom: "60px"}}>
                        Mayday五月天!!!
                    </div>
                    <img width="800px" src={mayday} alt="Mayday" />
                </div>
            </div>
        </div>

        <div className="background">
            <div className="section">
                <div className="chinese">
                    <div className="flex">
                        <div>
                            <h2>如煙</h2>
                            <iframe width="650" height="500" src="https://www.youtube.com/embed/Qd9YGu3FWgc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p style={{textAlign: "end"}}>
                                有沒有那麼一個世界 永遠不天黑<br></br>
                                星星太陽萬物都 聽我的指揮<br></br>
                                月亮不忙著圓缺 春天不走遠<br></br>
                                樹梢緊緊擁抱著樹葉 有誰能聽見
                            </p>
                        </div>
                        <div>
                            <h2>玫瑰少年</h2>
                            <iframe width="650" height="500" src="https://www.youtube.com/embed/65IKNssGRPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            <p style={{textAlign: "end"}}>
                                別讓誰去 改變了你<br></br>
                                你是你 或是妳 都行<br></br>
                                會有人 全心的 愛你
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
  }

export default Home;