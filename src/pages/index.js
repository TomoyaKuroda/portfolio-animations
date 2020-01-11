import React,{useRef,useEffect,useState} from 'react'
import { Link, graphql } from 'gatsby'
import Masonry from 'react-masonry-component'
import Img from 'gatsby-image'
import Layout from "../components/layout"
import arrow from '../images/arrow-right.svg'
import firstImg from '../images/firstLaptop.jpg'
import secondImg from '../images/secondLaptop.jpg'
// import {TimelineLite ,TweenMax, Power3} from 'gsap';
import gsap from "gsap"
const IndexPage = (props,{ data }) => {
  let app = useRef(null)
  let images = useRef(null)
  let content = useRef(null)
  const [tl] = useState(gsap.timeline({ delay: 0.8 }))
  
  useEffect(() => {
    // Images Vars
    const firstImage = images.firstElementChild; // or children[0]
    const secondImage = images.lastElementChild;
    
    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    tl.to(app, 0, {css: {visibility: 'visible'}})

    //Images Animation
    tl.from(firstImage, 1.2, {y: 1280, ease: "power3.out"},'Start')
    .from(firstImage.firstElementChild, 2, {scale: 1.6, ease: "power3.out"}, .2)
    .from(secondImage, 1.4, {y: 1280, ease: "power3.out"}, .2)
    .from(secondImage.firstElementChild, 2, {scale: 1.6, ease: "power3.out"}, .2)

    //Content Animation
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children ], 1, {
      y: 44,
      ease:"power3.out",
      delay: .8
    }, .15, 'Start')
    .from(contentP, 1, {y: 20, opacity: 0, ease: "power3.out"}, 1.4)
    .from(contentButton, 1, {y: 20, opacity: 0, ease: "power3.out"}, 1.6)

  }, [tl])

return (
   <Layout>
<div className='hero' ref={el => app = el}>

    {/* <Masonry className="showcase">
      {data.allDatoCmsWork.edges.map(({ node: work }) => (
        <div key={work.id} className="showcase__item">
          <figure className="card">
            <Link to={`/works/${work.slug}`} className="card__image">
              <Img fluid={work.coverImage.fluid} />
            </Link>
            <figcaption className="card__caption">
              <h6 className="card__title">
                <Link to={`/works/${work.slug}`}>{work.title}</Link>
              </h6>
              <div className="card__description">
                <p>{work.excerpt}</p>
              </div>
            </figcaption>
          </figure>
        </div>
      ))}
    </Masonry> */}
  <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner" ref={el => content = el}>
              <h1>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">Tomoya Kuroda</div>
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">- Software Engineer</div>  
                </div>
                <div className="hero-content-line">
                  <div className="hero-content-line-inner">- Full Stack Developer</div>
                </div>
              </h1>
              <p>
              Passionate about development and collaborating with people.
              </p>
              <div className="btn-row">
                <button className="explore-button" onClick={props.handleMenu}>Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row"/>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <div ref={el => images = el}  className="hero-images-inner">
              <div className="hero-image first">
                <img src={firstImg} alt="laptop" />
              </div>
              <div className="hero-image second">
                <img src={secondImg} alt="laptop" />
              </div>
            </div>
          </div>
        </div>
      </div>


      </div>
      </Layout>
)
  }
export default IndexPage

export const query = graphql`
  query IndexQuery {
    allDatoCmsWork(sort: { fields: [position], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          excerpt
          coverImage {
            fluid(maxWidth: 450, imgixParams: { fm: "jpg", auto: "compress" }) {
              ...GatsbyDatoCmsSizes
            }
          }
        }
      }
    }
  }
`
