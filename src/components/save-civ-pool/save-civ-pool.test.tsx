import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';

import civsReducer from '../../store/slices/civs-slice';
import draftResultReducer from '../../store/slices/draft-result-slice';
import { FetchStatus } from '../../store/fetch-status-service';
import {
  configureMockStore,
  getMockCivs,
} from '../../store/mock-state-service';

import { SaveCivPool } from '.';
import { MOCK_STATE } from '../../store/mock-state-service/mock-state';

describe('save civ pool component', () => {
  describe('renders save civ pool', () => {
    it('renders save civ pool', () => {
      const mockStore = configureMockStore();

      const { container: saveCivPool } = render(
        <Provider store={mockStore}>
          <SaveCivPool />
        </Provider>
      );

      expect(screen.getByText('Save current civ pool')).toBeInTheDocument();
    });
  });

  describe('save button', () => {
    it('saves civ pool', () => {
      const mockStore = configureMockStore();

      const { container: saveCivPool } = render(
        <Provider store={mockStore}>
          <SaveCivPool />
        </Provider>
      );

      Object.assign(navigator, {
        clipboard: {
          writeText: jest.fn().mockImplementation(() => Promise.resolve()),
        },
      });

      const clipboardSpy = jest.spyOn(navigator.clipboard, 'writeText');

      expect(clipboardSpy).not.toHaveBeenCalled();
      fireEvent.click(screen.getByText('Save current civ pool'));
      expect(clipboardSpy).toHaveBeenCalled();
    });
  });
});
