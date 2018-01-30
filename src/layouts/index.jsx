import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ivan Gerasimov | Иван Герасимов"
      meta={[
        { name: 'description', content: 'Front end developer' },
        { name: 'keywords', content: 'javascript, js, react, angular' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func.isRequired,
};

export default TemplateWrapper;
