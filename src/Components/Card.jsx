import React from 'react'

const Card = ({data}) => {
  return (
    <div className='container'>
      {data.map((itemData,index)=>{
        if(!itemData.urlToImage){
            return null
        }
            return(
              <div className='cont' key={index}>
                <div className='card'>
                   <img src={itemData.urlToImage} alt="image" />
                   <div className='content'>
                    <a className='title' onClick={() => {window.open(itemData.url)}}>{itemData.title}</a>
                    <p>{itemData.description}</p>
                    <button onClick={() => {window.open(itemData.url)}}>Read More</button>
                   </div>
                </div>
                </div>
            );
        
})}
    </div>
  );
};

export default Card
