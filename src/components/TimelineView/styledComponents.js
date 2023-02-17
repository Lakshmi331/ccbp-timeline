import styled from 'styled-components/macro'

export const TimelineContainer = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export const ResponsiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`
export const Heading = styled.h1`
  color: '#171f46';
  text-align: center;
  font-size: 18px;
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const CCBPHeading = styled.span`
  color: '#2b237c';
  font-size: 25px;
  font-family: 'Roboto';

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`
