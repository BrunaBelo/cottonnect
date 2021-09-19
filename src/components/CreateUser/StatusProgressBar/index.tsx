import React from 'react';
import { ProgressCircle, Circle } from './styles';

const StatusProgressBar: React.FC = () => {
  return (
    <div className="status-progress-bar">
      <ProgressCircle>
        <Circle className="active">1</Circle>
        <Circle>2</Circle>
        <Circle>3</Circle>
        <Circle>4</Circle>
      </ProgressCircle>
    </div>
  );
};

export default StatusProgressBar;
