import styled from 'styled-components';

export const ProgressCircle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 3em 0;
  flex: 1;
`;

export const Circle = styled.li`
  display: inline-block;
  position: relative;
  margin: 0 5em;

  width: 2em;
  height: 2em;
  border-radius: 1em;
  
  background: var(--status-bar-complete);

  // numbers
  color: var(--white);
  font-weight: bolder;
  line-height: 2em;
  text-align: center;

  &::before{
    content: '';
    position: absolute;
    top: .9em;
    left: -10em;
    width: 10em;
    height: .2em;
    background: var(--status-bar-complete);
  }

  &:first-child::before {
    display: none;
  }

  .active {
    background: var(--status-bar-complete);
  }

  .active ~ & {
    background: var(--status-bar-incomplete);
    color: var(--font-color);
  }

  .active ~ &::before {
    background: lightblue;
  }
`;
