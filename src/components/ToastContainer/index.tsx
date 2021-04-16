import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <FiAlertCircle />

        <div>
          <strong>Algum ero</strong>
          <p>Nã foi possivel</p>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
