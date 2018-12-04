import React, { Component } from 'react';

/*
return <img src={this.props.image.url} />;
*/

//defining the component as a React Component
class Image extends Component {
    render() {
       <div style={{display:'flex', flexDirection:'row'}}>
         {images.map.map(img => {
                console.log(img.url);
                <img src={img.url}/>
             })}
       </div>
    }
 }

 export default Image;