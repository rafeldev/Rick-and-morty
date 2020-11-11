import React from 'react';
import {  Hover, Img, DisplayOver, SubTitle, Paragraph, Background } from "./style"


export const index = (props) => {
  return (
    <div className="App">
          <Background>
            <Img src={props.chars.image} alt="rick and morty" />
            <DisplayOver>
              <Hover>
                <SubTitle>{props.chars.name}</SubTitle>
                <Paragraph>
                  {props.chars.species}
                </Paragraph>
                <Paragraph>
                  {props.chars.gender}
                </Paragraph>
              </Hover>
            </DisplayOver>
          </Background>
    </div>
  )
};

export default index;