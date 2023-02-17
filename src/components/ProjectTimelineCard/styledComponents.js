import styled from 'styled-components/macro'

export const ProjectCardContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const ProjectImage = styled.img`
  width: 100%;
  height: 50%;
`
export const ProjectTitleAndDurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const ProjectTitle = styled.h1`
  font-size: 18px;
  font-family: 'Roboto';
  color: #171f46;

  @media screen and (min-width: 768px) {
    font-size: 25px;
  }
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Duration = styled.p`
  font-size: 15px;
  font-weight: 700;
  font-family: 'Roboto';
  color: #171f46;
`
export const ProjectDescription = styled.p`
  font-size: 15px;
  font-family: 'Roboto';
  color: #1e293b;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const VisitLink = styled.a`
  color: #0967d2;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
