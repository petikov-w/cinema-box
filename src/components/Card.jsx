import styled from "styled-components";
import dsd from '../images/img-default.png'
import {Link} from 'react-router-dom'


const CardBox = styled.div`
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

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 150px;
  object-fit: cover;
  object-position: center;
  box-shadow: var(--shadow);
`;

const CardTitle = styled.h5`   
    padding: 0 1.5rem;
    margin-bottom: -0.2rem;    

`

const CardDescription = styled.p`  
    font-size: 0.7rem;
    font-weight: 300;
    padding: 0 1.5rem;`


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



export const Card = (props) => {
    const handlerCardBtn = () => {
       return <Link to='/' />
    }

    return (
      <CardBox>
        <div>
          <CardImage src={dsd} />
          <CardTitle>GGGh  jkljk</CardTitle>
          <CardDescription>Take your boring salads up a knotch. This recipe is perfect for lunch
                            and only contains 5 ingredients!
          </CardDescription>         
        </div>                  
        <CardLink to={'/films/5'}>More...</CardLink>
          
      </CardBox>
    );
  }

  
