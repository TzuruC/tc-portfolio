import fitNeeCover from "../assets/project1.png";
import sevenTaoCover from "../assets/project2.png";
import wowoRoomCover from "../assets/project3.png";

const projectList = [
  {
    id: 1,
    title: "FitNee 訓練助理",
    tech: ["Bootstrap", "JavaScript", "API介接", "檢索功能"],
    description:
      "現代人重視健康，藉由健身習慣改善身體、心理健康的人越來越多，但市面上輔助健身的工具，選擇還是很少。<br />透過本專案，使用者可以自由創建、記錄自己的訓練，與健身教練媒合平台結合，讓專案能發揮最大價值。",
    demoLink: "#",
    githubLink: "#",
    image: fitNeeCover,
  },
  {
    id: 2,
    title: "7TAO 活動訂票網",
    tech: ["HTML", "Scss", "Bootstrap"],
    description:
      "This project was created for Treehouse's Front End Web Development TechDegree",
    demoLink: "#",
    githubLink: "#",
    image: sevenTaoCover,
  },
  {
    id: 3,
    title: "SVG Animations",
    tech: ["JavaScript", "購物車功能", "C3.js"],
    description:
      "I learnt to create SVG animations using CSS. I also got to implement more advanced CSS techniques like clip-path and keyframes. I had also struggled with media queries before, but this project really helped!",
    demoLink: "#",
    githubLink: "#",
    image: wowoRoomCover,
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2
        className="mb-lg-9 mb-6 px-9 py-2 fs-2 border border-dark"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        代表作品
      </h2>
      <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
        <article className="project mb-9">
          <div className="image">
            <img src={fitNeeCover} alt="FitNee訓練助理" />
          </div>
          <div className="content">
            <h3 className="my-md-2 my-3 fw-bold text-dark">FitNee 訓練助理</h3>
            <ul className="m-0 mb-2 list-unstyled d-flex justify-content-center justify-content-lg-start">
              <li className="px-2 py-1 bg-primary text-white">#Bootstrap</li>
              <li className="px-2 py-1 bg-primary text-white">#JavaScript</li>
              <li className="px-2 py-1 bg-primary text-white">#API</li>
              <li className="px-2 py-1 bg-primary text-white">#檢索功能</li>
            </ul>
            <p className="my-md-2 mt-3 mb-4">
              現代人重視健康，培養健身訓練習慣來改善身心健康的人越來越多，但用來幫助健身的工具，卻還是選擇很少。
              <br />
              本專案是健身教練媒合平台，除了檢視教練外，使用者也可以自由創建、記錄自己的訓練，對健身教練或是學生，都很好運用。
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a
                className="me-1 btn btn-outline-secondary"
                href="https://tzuruc.github.io/fitnee-36/"
                target="_blank"
              >
                Demo Site
              </a>
              <a
                className="me-1 btn btn-outline-secondary"
                href="https://github.com/TzuruC/fitnee-36"
                target="_blank"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </article>
        <article className="project mb-9">
          <div className="image">
            <img src={sevenTaoCover} alt="7TAO活動訂票網" />
          </div>
          <div className="content">
            <h3 className="my-md-2 my-3 fw-bold text-dark">7TAO 活動訂票網</h3>
            <ul className="m-0 mb-2 list-unstyled d-flex justify-content-center justify-content-lg-start">
              <li className="px-2 py-1 bg-primary text-white">#HTML</li>
              <li className="px-2 py-1 bg-primary text-white">#Scss</li>
              <li className="px-2 py-1 bg-primary text-white">#Bootstrap</li>
            </ul>
            <p className="my-md-2 mt-3 mb-4">
              活動訂票網站上充滿著各式各樣、不同風格的活動圖片，一個以簡單的線條與矩形為風格基礎的網站視覺設計作為呈現的平台，能兼具特色也不會搶到活動的風采。
              <br />
              網站以 Bootstrap 5
              框架製作，利用跑馬燈、旋轉的卡片來增加畫面的活潑。
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a
                className="me-1 btn btn-outline-secondary"
                href="https://tzuruc.github.io/7tao-practice/"
                target="_blank"
              >
                Demo Site
              </a>
              <a
                className="me-1 btn btn-outline-secondary"
                href="https://github.com/TzuruC/7tao-practice"
                target="_blank"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </article>
        <article className="project mb-9">
          <div className="image">
            <img src={wowoRoomCover} alt="WOWOROOM窩窩家居" />
          </div>
          <div className="content">
            <h3 className="my-md-2 my-3 fw-bold text-dark">
              WOWOROOM 窩窩家居
            </h3>
            <ul className="m-0 mb-2 list-unstyled d-flex justify-content-center justify-content-lg-start">
              <li className="px-2 py-1 bg-primary text-white">#JavaScript</li>
              <li className="px-2 py-1 bg-primary text-white">#購物車功能</li>
              <li className="px-2 py-1 bg-primary text-white">#C3.js</li>
            </ul>
            <p className="my-md-2 mt-3 mb-4">
              以家具購物平台模擬介接 API來獲取後台的資料，利用 JavaScript
              打造購物車功能，並使用 c3.js 套件來呈現簡單的數據分析圖。
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <a
                className="me-1 btn btn-outline-secondary"
                href="https://tzuruc.github.io/woworoom-practice/"
                target="_blank"
              >
                Demo Site
              </a>
              <a
                className="me-1 btn btn-outline-secondary"
                href="https://github.com/TzuruC/woworoom-practice"
                target="_blank"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};
