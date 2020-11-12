import React from 'react';
import {  Hover, Img, DisplayOver, SubTitle, Paragraph, Background } from "./style"


export const index = ({ chars }) => {
  const {
    image,
    name,
    species,
    gender
  } = chars
  return (
    <div className="App">
          <Background>
            <Img src={image} alt="rick and morty" />
            <DisplayOver>
              <Hover>
                <SubTitle>{name}</SubTitle>
                <Paragraph>
                  Especie: {species}
                </Paragraph>
                <Paragraph>
                  Genero: {gender}
                </Paragraph>
              </Hover>
            </DisplayOver>
          </Background>
    </div>
  )
};

export default index;