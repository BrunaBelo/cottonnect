import styled from 'styled-components';

export const ProgressCircle = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 2em 0;
`;

export const Circle = styled.li`
  display: inline-block;
  position: relative;
  margin: 0 2em;

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
    left: -4em;
    width: 4em;
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

  @media (max-width: 800px) {
    img{
      display: none;
    }
  }
`;
