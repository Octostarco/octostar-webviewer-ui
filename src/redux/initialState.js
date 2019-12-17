import React from 'react';

import ToggleZoomOverlay from 'components/ToggleZoomOverlay';
import SignatureToolButton from 'components/SignatureToolButton';

import core from 'core';
import getHashParams from 'helpers/getHashParams';
import documentTypeParamToEngineType from 'helpers/documentTypeParamToEngineType';
import { zoomIn, zoomOut } from 'helpers/zoom';
import defaultTool from 'constants/defaultTool';
import { copyMapWithDataProperties } from 'constants/map';
import actions from 'actions';
import PageNavOverlay from '../components/PageNavOverlay/PageNavOverlay';

export default {
  viewer: {
    disabledElements: {},
    openElements: {
      header: true,
      toolsHeader: true,
    },
    headers: {
      default: [
        { type: 'toggleElementButton', img: 'icon-header-sidebar-line', element: 'leftPanel', dataElement: 'leftPanelButton', title: 'component.leftPanel' },
        { type: 'divider' },
        { type: 'toggleElementButton', img: 'icon-header-page manipulation-line', element: 'viewControlsOverlay', dataElement: 'viewControlsButton', title: 'component.viewControlsOverlay' },
        {
          type: 'customElement',
          render: () => <ToggleZoomOverlay />,
          dataElement: 'zoomOverlayButton',
          hidden: ['mobile'],
          element: 'zoomOverlay',
          style: {
            height: '100%',
          },
        },
        { type: 'divider' },
        { type: 'toolButton', toolName: 'Pan' },
        { type: 'toolButton', toolName: 'TextSelect' },
        { type: 'toolButton', toolName: 'AnnotationEdit', hidden: ['tablet', 'mobile'] },
        { type: 'spacer' },
        { type: 'toggleElementButton', dataElement: 'toggleToolsButton', element: 'toolsHeader', img: 'icon-header-annotations-line', title: 'component.searchOverlay' },
        { type: 'toggleElementButton', dataElement: 'searchButton', element: 'searchOverlay', img: 'ic_search_black_24px', title: 'component.searchOverlay' },
        { type: 'toggleElementButton', dataElement: 'toggleNotesButton', element: 'notesPanel', img: 'icon-header-chat-line', title: 'component.notesPanel' },
        { type: 'toggleElementButton', dataElement: 'menuButton', element: 'menuOverlay', img: 'icon-header-settings-line', title: 'component.menuOverlay' },
        {
          type: 'customElement',
          render: () => <PageNavOverlay />,
          dataElement: 'pageNavOverlay',
          style: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          },
        },
      ],
      // second header
      tools: [
        { type: 'spacer' },
        { type: 'toolGroupButton', toolGroup: 'freeHandTools', dataElement: 'freeHandToolGroupButton', title: 'component.freehandToolsButton' },
        { type: 'toolGroupButton', toolGroup: 'shapeTools', dataElement: 'shapeToolGroupButton', title: 'component.shapeToolsButton' },
        { type: 'toolGroupButton', toolGroup: 'textTools', dataElement: 'textToolGroupButton', title: 'component.textToolsButton' },
        { type: 'toolGroupButton', toolGroup: 'textTools2', dataElement: 'textToolGroupButton2', title: 'component.textToolsButton' },
        { type: 'toolGroupButton', toolGroup: 'measurementTools', dataElement: 'measurementToolGroupButton', title: 'component.measurementToolsButton' },
        { type: 'toggleElementButton', toolName: 'AnnotationCreateRedaction', className: 'redactHeader', dataElement: 'redactionButton', element: 'redactionOverlay', img: 'ic_annotation_add_redact_black_24px', title: 'component.redaction' },
        { type: 'toolButton', toolName: 'AnnotationCreateFreeText' },
        { type: 'toolButton', toolName: 'AnnotationCreateSticky' },
        {
          type: 'customElement',
          render: () => <SignatureToolButton />,
          dataElement: 'signatureToolButton',
        },
        { type: 'toolGroupButton', toolGroup: 'miscTools', img: 'ic_more_black_24px', dataElement: 'miscToolGroupButton', title: 'component.miscToolsButton' },
        { type: 'divider' },
        {
          type: 'actionButton',
          dataElement: 'undoButton',
          titile: 'action.close',
          img: 'icon-operation-undo',
          onClick: dispatch => {
            console.log('undo');
          },
        },
        {
          type: 'actionButton',
          dataElement: 'redoButton',
          titile: 'action.close',
          img: 'icon-operation-redo',
          onClick: dispatch => {
            console.log('redo');
          },
        },

        // { type: 'toolButton', toolName: 'UndoTool' },
        // { type: 'toolButton', toolName: 'RedoTool' },
        { type: 'toolButton', toolName: 'AnnotationEraserTool' },
        { type: 'spacer' },
        {
          type: 'actionButton',
          dataElement: 'closeToolsButton',
          titile: 'action.close',
          img: 'ic_close_black_24px',
          style: { position: 'absolute', right: 0 },
          onClick: dispatch => {
            // dispatch(actions.setActiveHeaderGroup('default'));
            // core.setToolMode(defaultTool);
            // dispatch(actions.closeElements(['viewControlsOverlay', 'searchOverlay', 'menuOverlay', 'searchPanel', 'leftPanel', 'redactionOverlay']));
            dispatch(actions.closeElements(['toolsHeader']));
          },
        },
      ],
    },
    annotationPopup: [
      { dataElement: 'annotationCommentButton' },
      { dataElement: 'annotationStyleEditButton' },
      { dataElement: 'annotationRedactButton' },
      { dataElement: 'annotationCropButton' },
      { dataElement: 'annotationGroupButton' },
      { dataElement: 'annotationUngroupButton' },
      { dataElement: 'annotationDeleteButton' },
      { dataElement: 'calibrateButton' },
    ],
    textPopup: [
      { dataElement: 'copyTextButton' },
      { dataElement: 'textHighlightToolButton' },
      { dataElement: 'textUnderlineToolButton' },
      { dataElement: 'textSquigglyToolButton' },
      { dataElement: 'textStrikeoutToolButton' },
      { dataElement: 'textRedactToolButton' },
    ],
    contextMenuPopup: [
      { dataElement: 'panToolButton' },
      { dataElement: 'stickyToolButton' },
      { dataElement: 'highlightToolButton' },
      { dataElement: 'freeHandToolButton' },
      { dataElement: 'freeTextToolButton' },
    ],
    toolButtonObjects: {
      AnnotationCreateDistanceMeasurement: { dataElement: 'distanceMeasurementToolButton', title: 'annotation.distanceMeasurement', img: 'ic_annotation_distance_black_24px', group: 'measurementTools', showColor: 'active' },
      AnnotationCreatePerimeterMeasurement: { dataElement: 'perimeterMeasurementToolButton', title: 'annotation.perimeterMeasurement', img: 'ic_annotation_perimeter_black_24px', group: 'measurementTools', showColor: 'active' },
      AnnotationCreateAreaMeasurement: { dataElement: 'areaMeasurementToolButton', title: 'annotation.areaMeasurement', img: 'ic_annotation_area_black_24px', group: 'measurementTools', showColor: 'active' },
      AnnotationCreateFreeHand: { dataElement: 'freeHandToolButton', title: 'annotation.freehand', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
      AnnotationCreateFreeHand2: { dataElement: 'freeHandToolButton2', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
      AnnotationCreateFreeHand3: { dataElement: 'freeHandToolButton3', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
      AnnotationCreateFreeHand4: { dataElement: 'freeHandToolButton4', title: 'annotation.freehand2', img: 'icon-tool-pen-line', group: 'freeHandTools', showColor: 'always' },
      AnnotationCreateTextHighlight: { dataElement: 'highlightToolButton', title: 'annotation.highlight', img: 'icon-tool-text-manipulation-highlight', group: 'textTools', showColor: 'always' },
      AnnotationCreateTextHighlight2: { dataElement: 'highlightToolButton2', title: 'annotation.highlight2', img: 'ic_annotation_highlight_black_24px', group: 'textTools', showColor: 'always' },
      AnnotationCreateTextHighlight3: { dataElement: 'highlightToolButton3', title: 'annotation.highlight2', img: 'ic_annotation_highlight_black_24px', group: 'textTools', showColor: 'always' },
      AnnotationCreateTextHighlight4: { dataElement: 'highlightToolButton4', title: 'annotation.highlight2', img: 'ic_annotation_highlight_black_24px', group: 'textTools', showColor: 'always' },
      AnnotationCreateTextUnderline: { dataElement: 'underlineToolButton', title: 'annotation.underline', img: 'ic_annotation_underline_black_24px', group: 'textTools2', showColor: 'active' },
      AnnotationCreateTextSquiggly: { dataElement: 'squigglyToolButton', title: 'annotation.squiggly', img: 'ic_annotation_squiggly_black_24px', group: 'textTools2', showColor: 'active' },
      AnnotationCreateTextStrikeout: { dataElement: 'strikeoutToolButton', title: 'annotation.strikeout', img: 'ic_annotation_strikeout_black_24px', group: 'textTools2', showColor: 'active' },
      AnnotationCreateRectangle: { dataElement: 'rectangleToolButton', title: 'annotation.rectangle', img: 'icon-tool-shape-rectangle', group: 'shapeTools', showColor: 'active' },
      AnnotationCreateEllipse: { dataElement: 'ellipseToolButton', title: 'annotation.ellipse', img: 'ic_annotation_circle_black_24px', group: 'shapeTools', showColor: 'active' },
      AnnotationCreateLine: { dataElement: 'lineToolButton', title: 'annotation.line', img: 'ic_annotation_line_black_24px', group: 'shapeTools', showColor: 'active' },
      AnnotationCreateArrow: { dataElement: 'arrowToolButton', title: 'annotation.arrow', img: 'ic_annotation_arrow_black_24px', group: 'shapeTools', showColor: 'active' },
      AnnotationCreatePolyline: { dataElement: 'polylineToolButton', title: 'annotation.polyline', img: 'ic_annotation_polyline_black_24px', group: 'shapeTools', showColor: 'active' },
      AnnotationCreatePolygon: { dataElement: 'polygonToolButton', title: 'annotation.polygon', img: 'ic_annotation_polygon_black_24px', group: 'shapeTools', showColor: 'active' },
      AnnotationCreatePolygonCloud: { dataElement: 'cloudToolButton', title: 'annotation.polygonCloud', img: 'ic_annotation_cloud_black_24px', group: 'shapeTools', showColor: 'active' },
      AnnotationCreateRedaction: { dataElement: 'redactionButton', title: 'option.redaction.markForRedaction', img: 'ic_annotation_add_redact_black_24px', showColor: 'never' },
      AnnotationCreateSignature: { dataElement: 'signatureToolButton', title: 'annotation.signature', img: 'ic_annotation_signature_black_24px', showColor: 'active' },
      AnnotationCreateFreeText: { dataElement: 'freeTextToolButton', title: 'annotation.freetext', img: 'icon-tool-text-free-text', showColor: 'active' },
      AnnotationCreateSticky: { dataElement: 'stickyToolButton', title: 'annotation.stickyNote', img: 'icon-tool-comment-line', showColor: 'active' },
      AnnotationCreateCallout: { dataElement: 'calloutToolButton', title: 'annotation.callout', img: 'ic_annotation_callout_black_24px', group: 'miscTools', showColor: 'active' },
      AnnotationCreateStamp: { dataElement: 'stampToolButton', title: 'annotation.stamp', img: 'ic_annotation_image_black_24px', group: 'miscTools', showColor: 'active' },
      Pan: { dataElement: 'panToolButton', title: 'tool.pan', img: 'icon-header-pan', showColor: 'never' },
      AnnotationEdit: { dataElement: 'selectToolButton', title: 'tool.select', img: 'icon-header-select-line', showColor: 'never' },
      TextSelect: { dataElement: 'textSelectButton', img: 'textselect_cursor', showColor: 'never' },
      MarqueeZoomTool: { dataElement: 'marqueeToolButton', showColor: 'never' },
      AnnotationEraserTool: { dataElement: 'eraserToolButton', title: 'annotation.eraser', img: 'icon-operation-eraser', showColor: 'never' },
      CropPage: { dataElement: 'cropToolButton', title: 'annotation.crop', img: 'ic_crop_black_24px', showColor: 'never', group: 'miscTools' },
    },
    activeHeaderGroup: 'default',
    activeToolName: 'AnnotationEdit',
    activeToolStyles: {},
    activeLeftPanel: 'thumbnailsPanel',
    activeToolGroup: '',
    notePopupId: '',
    isNoteEditing: false,
    fitMode: '',
    zoom: 1,
    rotation: 0,
    displayMode: 'Single',
    currentPage: 1,
    sortStrategy: 'position',
    isFullScreen: false,
    doesAutoLoad: getHashParams('auto_load', true),
    isDocumentLoaded: false,
    isReadOnly: getHashParams('readonly', false),
    customPanels: [],
    useEmbeddedPrint: false,
    pageLabels: [],
    noteDateFormat: 'MMM D, h:mma',
    colorMap: copyMapWithDataProperties('currentPalette', 'iconColor'),
    warning: {},
    customNoteFilter: null,
    zoomList: [0.1, 0.25, 0.5, 1, 1.25, 1.5, 2, 4, 8, 16, 64],
    isAccessibleMode: getHashParams('accessibleMode', false),
    measurementUnits: {
      from: ['in', 'mm', 'cm', 'pt'],
      to: ['in', 'mm', 'cm', 'pt', 'ft', 'm', 'yd', 'km', 'mi'],
    },
    maxSignaturesCount: 2,
    leftPanelWidth: 300,
    isReplyDisabledFunc: null,
  },
  search: {
    listeners: [],
    value: '',
    isCaseSensitive: false,
    isWholeWord: false,
    isWildcard: false,
    isRegex: false,
    isSearchUp: false,
    isAmbientString: false,
    activeResult: null,
    activeResultIndex: -1,
    results: [],
    isSearching: false,
    noResult: false,
    isProgrammaticSearch: false,
    isProgrammaticSearchFull: false,
  },
  document: {
    id: getHashParams('did', null),
    initialDoc: getHashParams('initialDoc', getHashParams('d', '')),
    path: null,
    ext: getHashParams('extension', null),
    filename: getHashParams('filename', null),
    file: null,
    type: null,
    pdfDoc: null,
    pdfType: getHashParams('pdf', 'auto'),
    officeType: getHashParams('office', 'auto'),
    isOffline: getHashParams('startOffline', false),
    totalPages: 0,
    outlines: [],
    bookmarks: {},
    layers: [],
    checkPassword: null,
    password: '',
    printQuality: 1,
    passwordAttempts: -1,
    documentLoadingProgress: 0,
    workerLoadingProgress: 0,
    isUploading: false,
    uploadProgress: 0,
  },
  user: {
    name: getHashParams('user', 'Guest'),
    isAdmin: getHashParams('admin', false),
  },
  advanced: {
    azureWorkaround: getHashParams('azureWorkaround', false),
    customCSS: getHashParams('css', null),
    customHeaders: { },
    defaultDisabledElements: getHashParams('disabledElements', ''),
    externalPath: getHashParams('p', ''),
    engineType: documentTypeParamToEngineType(getHashParams('preloadWorker'), getHashParams('pdftronServer', '')),
    fullAPI: getHashParams('pdfnet', false),
    pdftronServer: getHashParams('pdftronServer', ''),
    singleServerMode: getHashParams('singleServerMode', false),
    forceClientSideInit: getHashParams('forceClientSideInit', false),
    disableWebsockets: getHashParams('disableWebsockets', false),
    preloadWorker: getHashParams('preloadWorker', false),
    serverUrl: getHashParams('server_url', ''),
    serverUrlHeaders: JSON.parse(getHashParams('serverUrlHeaders', '{}')),
    cacheKey: JSON.parse(getHashParams('cacheKey', null)),
    pageSizes: null,
    streaming: getHashParams('streaming', false),
    subzero: getHashParams('subzero', false),
    useDownloader: getHashParams('useDownloader', true),
    useSharedWorker: getHashParams('useSharedWorker', false),
    disableI18n: getHashParams('disableI18n', false),
    pdfWorkerTransportPromise: null,
    officeWorkerTransportPromise: null,
    decrypt: null,
    decryptOptions: { },
    withCredentials: false,
  },
};
