import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { cards } from './static-data'
import { userData } from './static-data'

const Header = ({userData: {logo, name, boards, pins, like, followers, following}}) => (
    <div className='header'>
        <img src={logo} alt='logo'/>
        <h1>{name}</h1>
        <nav>
            <hr />
            <a href='/boards' style={{color:'crimson', fontWeight:'bold'}}>{boards}<span>Boards</span></a>  
            <a href='/pins'>{pins}<span>Pins</span></a> 
            <a href='/like'>{like}<span>Likes</span></a> 
            <a href='/followers'>{followers}<span>Followers</span></a> 
            <a href='/following'>{following}<span>Following</span></a>
            <hr />
        </nav>
    </div>
)


const Card = ({ card: { title, owner, pin, imgs} }) => (
    <div className='card'>
        <div className='card-title'>
            <div style={{ fontWeight:'bold', paddingBottom: '5px'}}>{title}</div>
            <span style={{color: 'gray'}}>{owner}</span>
        </div>
        <ul className='image'>
            {imgs.map(img => {
                const { id, src } = img
                let image;
                image = (id === 0) 
                ? <div>
                <img src={src} width='300px' height='240px' alt={title}/>
                <div className='pin'><i className="fas fa-thumbtack"></i>{pin}</div>
                </div>
                
                : <img src={src} width='100px' height='100px' alt={title}/>
                return (
                    <li key={id}>{image}</li>
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
