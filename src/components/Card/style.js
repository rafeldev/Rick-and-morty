import styled from "@emotion/styled/macro";

export const Hover = styled.div({
  opacity: 0,
  transition: "opacity 350ms ease",
  textAlign: "center",
});

export const Img = styled.img({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  cursor: "pointer",
  boxShadow: "3px 3px 5px 0px rgba(163,163,163,1)",
})

export const DisplayOver = styled.div({
  height: "100%",
  left: "0",
  position: "absolute",
  top: "0",
  width: "100%",
  zIndex: 2,
  transition: "background-color 350ms ease",
  backgroundColor: "transparent",
  padding: "20px 20px 0 20px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

// export const BigTitle = styled.h2({
//   textTransform: "uppercase",
//   fontFamily: "Helvetica",
// });

export const SubTitle = styled.h2({
  fontFamily: "Helvetica",
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

export const Paragraph = styled.p({
  transform: "translate3d(0,50px,0)",
  transition: "transform 350ms ease",
});

export const Background = styled.div({
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  color: "#FFF",
  position: "relative",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [`:hover ${DisplayOver}`]: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
    transform: "translate3d(0,0,0)",
  },
  [`:hover ${Hover}`]: {
    opacity: 1,
  },
});

export const CTA = styled.a({
  position: "absolute",
  bottom: "20px",
  left: "20px",
});