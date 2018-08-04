import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { cards } from './static-data'
import { userData } from './static-data'

const Header = ({userData: {logo, name, boards, pins, like, followers, following}}) => (
    <div className='header'>
        <img className='header-logo' src={logo} alt='logo'/>
        <h1>{name}</h1>
        <nav className='header-titles'>
            <a href='/boards' style={{color:'crimson', fontWeight:'bold'}}>{boards}<span>Boards</span></a>  
            <a href='/pins'>{pins}<span>Pins</span></a> 
            <a href='/like'>{like}<span>Likes</span></a> 
            <a href='/followers'>{followers}<span>Followers</span></a> 
            <a href='/following'>{following}<span>Following</span></a> 
        </nav>
    </div>
)


const Card = ({ card: { title, owner, imgs} }) => (
    <div className='card'>
        <div className='card-title'>
            <div style={{ fontWeight:'bold', paddingBottom: '5px'}}>{title}</div>
            <span>{owner}</span>
        </div>
        <ul className='image'>
            {imgs.map(img => {
                const { id, src } = img
                let width, height;
                id === 0 
                ?  width = height ='300px' 
                : width=height='100px'
            
                return (
                    <li key={id} >       
                        <img style={{borderRadius:'5px'}} src={src} alt={title} width={width} height={height}/>
                    </li>
                )
            })}
            <button>Follow</button>
        </ul>
    </div>
)

const Board = ({ cards }) => (
    <ul className='board'>
       {cards.map(card => (
            <li key={card.id} className='board'>
                <Card card={card}/>
            </li>
        ))}
    </ul>
   
)


const Page = ({userData, cards}) => (
    <div>
        <Header userData={userData}/>
        <Board cards={cards} />
    </div>   
)


ReactDOM.render(
    <Page cards={cards} userData={userData}/>,
     document.getElementById('root')
);
registerServiceWorker();
