import "./writings.scss"

export default function Writings() {
    const data = [
        {
          id: 1,
          title: "Read Article",
          img: "assets/headshot.png",
          icon: "assets/medium.png",
          desc: "Solving The Bowling Game Kata In Vanilla Javascript",
          link: "https://joekadi.medium.com/solving-the-bowling-game-kata-in-vanilla-javascript-37e25d6d2305?sk=8948d92537ad950e14b9aefbbe121d19",
         
        },
        {
          id: 2,
          title: "Read Article",
          img: "assets/headshot.png",
          icon: "assets/medium.png",
          desc:
            "The Relationship Between Bias, Variance, Overfitting & Generalisation in Machine Learning Models",
          featured: true,
          link: "https://joekadi.medium.com/the-relationship-between-bias-variance-overfitting-generalisation-in-machine-learning-models-fb78614a3f1e?sk=2a12bc701af8242c197a0532d82f2d45",
        },
        {
          id: 3,
          title: "Read Article",
          img: "assets/headshot.png",
          icon: "assets/medium.png",
          desc:
            "Understanding The Ubiquitous Nature Of Uncertainty Through The Heisenberg Uncertainty Principle",
          link: " https://joekadi.medium.com/understanding-the-ubiquitous-nature-of-uncertainty-through-the-heisenberg-uncertainty-principle-5187cc9cdb24?sk=f5376cd996122aa7ab2466375bc04178",
        },
      ];

return (
    <div className="writings" id="writings">
      <h1>Some Writings</h1>
      <div className="container">
        {data.map((d) => (
        
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
                <a href={d.link} target="_blank">
                    {d.desc}
                </a>
             
            </div>
          </div>
        ))}
      </div>
      <a href="https://joekadi.medium.com/" target="_blank"><button>View All</button></a>
    </div>
  );
}
