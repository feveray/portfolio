import React from 'react';
import styled from 'styled-components';
import thumb from '../img/project.png';
import { Link } from 'react-router-dom';

const Card = ({ project }) => {
  return (
    <StyledWrapper>
      <Link to="/projetos" className="block-link">
      <article className="article-wrapper">
        <div className="rounded-lg container-project">
          <img src={thumb} alt="Project thumbnail" className="project-thumb" />
        </div>
        <div className="project-info">
          <div className="flex-pr">
            <div className="project-title text-nowrap">Projetos</div>
            <div className="project-hover">
              <svg style={{color: '#51572c'}} xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" color="black" strokeLinejoin="round" strokeLinecap="round" viewBox="0 0 24 24" strokeWidth={2} fill="none" stroke="currentColor">
                <line y2={12} x2={19} y1={12} x1={5} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </div>
          </div>
          <div className="types">
            <span style={{backgroundColor: 'rgba(165, 96, 247, 0.43)', color: 'rgb(85, 27, 177)'}} className="project-type">• UX/UI •</span>
            <span className="project-type">• Front-end •</span>
          </div>
        </div>
      </article>
      </Link>
      {project ? (
        project.route ? (
          <Link to={project.route} className="text-primary hover:underline">Abrir projeto</Link>
        ) : project.liveLink ? (
          <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Abrir projeto</a>
        ) : null
      ) : null}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .article-wrapper {
    width: 250px;
    -webkit-transition: 0.15s all ease-in-out;
    transition: 0.15s all ease-in-out;
    border-radius: 10px;
    padding: 5px;
    border: 4px solid transparent;
    cursor: pointer;
    background-color: #fffdf2;
  }

  .article-wrapper:hover {
    /* sombras deslocadas para a esquerda (ficam "atrás" quando o card sobe e vai para a direita) */
    -webkit-box-shadow:
      -10px 10px 0 #aabf91,
      -20px 20px 0 rgba(147, 104, 141, 1);
    box-shadow:
      -10px 10px 0 #aabf91,
      -20px 20px 0 rgba(147, 104, 141, 1);
    border-color: #31572c;
    -webkit-transform: translate(20px, -20px); /* sobe e vai para a direita */
    -ms-transform: translate(20px, -20px);
    transform: translate(20px, -20px);
  }

  .article-wrapper:active {
    -webkit-box-shadow: none;
    box-shadow: none;
    -webkit-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    transform: translate(0, 0);
  }

  .types {
    gap: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    place-content: flex-start;
  }

  .rounded-lg {
    /* class tailwind */
    border-radius: 10px;
  }

  .article-wrapper:hover .project-hover {
    -webkit-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    transform: rotate(-45deg);
    background-color: #aabf91;
  }

  .project-info {
    padding-top: 20px;
    padding: 10px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 20px;
  }

  .project-title {
    font-size: 2em;
    margin: 0;
    font-weight: 600;
    /* depend de la font */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #51572c;
  }

  .flex-pr {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
  }

  .project-type {
    background: #b2b2fd;
    color: #1a41cd;
    font-weight: bold;
    padding: 0.3em 0.7em;
    border-radius: 15px;
    font-size: 12px;
    letter-spacing: -0.6px;
  }

  .project-hover {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    padding: 9px;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }

  .container-project {
    width: 100%;
    height: 170px;
    background: gray;
    overflow: hidden;
    display: block;
  }

  .container-project .project-thumb {
    width: 100%;
    height: 100%;
    object-fit: cover; /* preenche sem distorcer */
    display: block;
    border-radius: 8px; /* ajustar para coincidir com o arredondamento do container */
  }
    `;

export default Card;
