import { calcPopupLeft, calcPopupTop } from 'helpers/getPopupPosition';
import core from 'core';
import getRootNode from 'helpers/getRootNode';

export default (annotation, popup) => {
  if (!popup || !popup.current) {
    return;
  }
  const editorContainer = getRootNode().querySelector(
    `#pageWidgetContainer${annotation.PageNumber} [id="freetext-editor-${annotation.Id}"]`
  );

  if (!editorContainer) {
    return;
  }
  const scrollContainer = core.getScrollViewElement();
  const padding = 2 * parseFloat(annotation.StrokeThickness) * core.getZoom();
  const cBox = editorContainer.getBoundingClientRect();
  const cInfo = {
    topLeft: {
      x: cBox.left + scrollContainer.scrollLeft - padding,
      y: cBox.top + scrollContainer.scrollTop - padding
    },
    bottomRight: {
      x: cBox.right + scrollContainer.scrollLeft + padding,
      y: cBox.bottom + scrollContainer.scrollTop + padding
    }
  };
  const pBox = popup.current.getBoundingClientRect();
  return {
    left: calcPopupLeft(cInfo, pBox),
    top: calcPopupTop(cInfo, pBox)
  };
};
