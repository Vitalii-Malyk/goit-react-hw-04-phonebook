import styled from 'styled-components';

export const ListElementStyle = styled('ul')(() => {
  return {
    listStyle: 'none',
    padding: 0,
    fontSize: '18px',
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
  };
});

export const ItemElementStyle = styled('li')(() => {
  return {
    display: 'flex',
    gap: '8px',
  };
});

export const ButtonElementStyle = styled('button')(() => {
  return {
    border: '0',
    color: 'antiquewhite',
    padding: '4px 6px',
    fontSize: '10px',
    cursor: 'pointer',
    background: 'transparent',
  };
});
