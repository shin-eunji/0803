import styled from 'styled-components';

export default styled.div`
box-sizing: border-box;

${({ maxWidth }) => maxWidth && `${maxWidth}px`}
${({ centered }) => centered && `margin: 0 auto;`}
${({ margin }) => margin && `margin: ${margin}`}
${({ padding }) => padding && `padding: ${padding};`}
${({ width }) => `width: ${width || '100%'}`}
`;
