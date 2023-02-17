import styled from 'styled-components/macro'

export const CourseTitleAndDurationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`
export const CourseTitle = styled.h1`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 700;
  color: #171f46;
  line-height: 1.3;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`

export const DurationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Duration = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  color: #1e293b;
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`

export const CourseDescription = styled.p`
  font-size: 10px;
  font-family: 'Roboto';
  line-height: 1.5;

  @media screen and (min-width: 768px) {
    font-size: 12px;
  }
`

export const CourseTagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 0px;
  padding: 0px;
`

export const CourseTagItem = styled.li`
  list-style-type: none;
`

export const CourseTag = styled.p`
  color: #25262c;
  background-color: #e2e8f0;
  font-size: 6px;
  font-family: 'Roboto';
  padding: 10px;
  line-height: 1.6;
  margin-right: 8px;

  @media screen and (min-width: 768px) {
    font-size: 8px;
  }
`
