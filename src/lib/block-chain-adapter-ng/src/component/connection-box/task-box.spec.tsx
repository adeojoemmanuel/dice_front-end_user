import { render } from '@testing-library/react';

import TaskBox from './task-box';

describe('TaskBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <TaskBox points={500} completed={true} header={<></>}>
        Tasks
      </TaskBox>
    );
    expect(baseElement).toBeTruthy();
  });
});
