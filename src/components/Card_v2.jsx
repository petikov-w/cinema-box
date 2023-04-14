import styled from "styled-components";
import dsd from '../images/img-default.png'
import {Link} from 'react-router-dom'


const CardBox = styled.div`
    background-image: url(${props => props.bg}); 
    background-repeat: no-repeat;    
    background-size: cover;   
    overflow: hidden;
    box-shadow: 0 2px 20px #e1e5ee;
    border-radius: 0.5rem;
    width: 13rem;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: transform 200ms ease-in;    
    margin-bottom: 20px; 
    &:hover {
      transform: scale(1.05);
    }
`;

const CardLink = styled(Link)`
 padding: 1rem 1.5rem;
 color: var(--colors-card-link); 
 font-size: 0.8rem;
 font-weight: var(--fw-light);
 text-decoration: none;
 cursor: pointer;
 &:hover {
      color: var(--colors-card-link-hover);      
    }
`;  

export const Card_v2 = (props, bg) => {
    const {filmId, nameRu, year, rating, posterUrl} = props;

    return (
      <CardLink to={`/films/${filmId}`} state={nameRu}>
        <CardBox bg={posterUrl} />
      </CardLink>      
    );
  }

  
