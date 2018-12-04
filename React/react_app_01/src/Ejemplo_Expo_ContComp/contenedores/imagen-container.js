import React, { Component } from 'react';
import Image from "../componentes/imagen"

/*
<Image image={image.url}/>

{this.state.images.map(img => {
                console.log(img.url);
                <Image image={img}/>
             })}
*/

class ImageContainer extends Component {
    constructor() {
       super();
       
       this.state = {
          images: []
       };
    }
 
    componentDidMount() {

        fetch('https://jsonplaceholder.typicode.com/photos')
          .then(response => response.json())
          .then(
            resultado => {
                this.setState({
                    images: resultado
                });                
        },

        error => {
            this.setState({
                error
            });
        }
        );
          
    }
 
    render() {
        const imgs = this.images;
        //console.log(imgs);
       return (
          <Image imagens={this.state.images}/>
       )
    }
 }
 export default ImageContainer