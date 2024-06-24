import React from 'react';
import PrintModalComponent from './PrintModal';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { copyMapWithDataProperties } from 'constants/map';

const NOOP = () => { };

export default {
  title: 'Components/PrintModal',
  component: PrintModal,
};

const initialState = {
  viewer: {
    disabledElements: {},
    customElementOverrides: {},
    customPanels: [],
    openElements: {
      printModal: true,
    },
    pageLabels: [],
    sortStrategy: 'position',
    colorMap: copyMapWithDataProperties('currentStyleTab', 'iconColor'),
    displayMode: 'Single',
    currentPage: 1
  },
  document: {
    printQuality: 1,
  },
  featureFlags: {
    customizableUI: false,
  },
};

const store = configureStore({
  reducer: () => initialState
});

const props = {
  isDisabled: false,
  isOpen: true,
  isApplyWatermarkDisabled: false,
  existingWatermarksRef: { current: null },
  currentPage: 1,
  setIsGrayscale: NOOP,
  setIsCurrentView: NOOP,
  setShouldFlatten: NOOP,
  setIncludeAnnotations: NOOP,
  setIncludeComments: NOOP,
  setIsWatermarkModalVisible: NOOP,
  setAllowWatermarkModal: NOOP,
  closePrintModal: NOOP,
  createPagesAndPrint: NOOP,
  pagesToPrint: [],
  setPagesToPrint: NOOP,
  count: 0,
  isPrinting: false,
};

export const PrintModal = () => (
  <Provider store={store}>
    <div>
      <PrintModalComponent
        {...props}
        isFullAPIEnabled={false}
        useEmbeddedPrint={false}
      />
    </div>
  </Provider>
);

export const EmbeddedPrintModal = () => (
  <Provider store={store}>
    <div>
      <PrintModalComponent
        {...props}
        isFullAPIEnabled={true}
        useEmbeddedPrint={true}
      />
    </div>
  </Provider>
);
