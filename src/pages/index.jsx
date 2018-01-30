import React from 'react';

const mainStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: '100vh',
  padding: '1rem',
  cursor: 'default',
};

const linkStyles = {
  color: '#2196F3',
  lineHeight: '1.625',
  textDecoration: 'none',
};

const IndexPage = () => (
  <main style={mainStyles}>
    <div>
      <h1>Ivan Gerasimov</h1>

      <div>
        <a
          style={linkStyles}
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="https://www.upwork.com/freelancers/~010d15364e8cf3268d"
        >
          Front-end
        </a>
        <span style={{ marginLeft: '.5rem' }}>(JavaScript, React, AngularJS)</span>
      </div>

      <div>
        <a
          style={{
            ...linkStyles,
            display: 'block',
            marginLeft: 'auto',
            textAlign: 'right',
          }}
          target="_blank"
          rel="nofollow noopener noreferrer"
          href="mailto:contact@gerasimov.pw"
        >
          contact@gerasimov.pw
        </a>
      </div>
    </div>
  </main>
);

export default IndexPage;
