import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import actions from 'actions';
import classNames from 'classnames';
import core from 'core';
import selectors from 'selectors';

import SignatureIcon from 'components/SignaturePanel/SignatureIcon';
import Icon from 'components/Icon';
import WidgetLocator from '../WidgetLocator';
import useFocusHandler from 'hooks/useFocusHandler';

import './WidgetInfo.scss';

export const renderPermissionStatus = ({
  isCertification,
  ModificationPermissionsStatus,
  permissionStatus,
  translate,
}) => {
  let content;

  switch (permissionStatus) {
    case ModificationPermissionsStatus.e_invalidated_by_disallowed_changes:
      content = translate(
        'digitalSignatureVerification.permissionStatus.invalidatedByDisallowedChanges'
      );
      break;
    case ModificationPermissionsStatus.e_has_allowed_changes:
      content = translate(
        'digitalSignatureVerification.permissionStatus.hasAllowedChanges'
      );
      break;
    case ModificationPermissionsStatus.e_unmodified:
      content = `${translate('digitalSignatureVerification.permissionStatus.unmodified')
      } ${isCertification
        ? translate('digitalSignatureVerification.certified')
        : translate('digitalSignatureVerification.signed')
      }.`;
      break;
    case ModificationPermissionsStatus.e_permissions_verification_disabled:
      content = translate(
        'digitalSignatureVerification.permissionStatus.permissionsVerificationDisabled'
      );
      break;
    case ModificationPermissionsStatus.e_no_permissions_status:
      content = translate(
        'digitalSignatureVerification.permissionStatus.noPermissionsStatus'
      );
      break;
  }

  return <p>{content}</p>;
};

const propTypes = {
  name: PropTypes.string.isRequired,
  collapsible: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  field: PropTypes.instanceOf(window.Core.Annotations.Forms.Field),
};

const WidgetInfo = ({ name, collapsible, field }) => {
  const verificationResult = useSelector((state) => selectors.getVerificationResult(state, name));
  const [isExpanded, setIsExpanded] = useState(true);
  const [locatorRect, setLocatorRect] = useState(null);
  const [signatureDetailsExpanded, setSignatureDetailsExpanded] = useState(false);
  const { VerificationResult, VerificationOptions } = window.Core.PDFNet;
  const { TimeMode } = VerificationOptions;
  const { ModificationPermissionsStatus } = VerificationResult;
  const [translate] = useTranslation();

  const {
    signed,
    signTime,
    verificationStatus,
    permissionStatus,
    disallowedChanges,
    trustVerificationResultBoolean,
    timeOfTrustVerificationEnum,
    trustVerificationTime,
    badgeIcon,
    isCertification,
    contactInfo,
    location,
    reason,
    signerName,
  } = verificationResult;

  const dispatch = useDispatch();

  const handleArrowClick = (e) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
  };

  /**
   * Side-effect function that highlights the SignatureWidgetAnnotation
   * pertaining to the text element that was clicked by using core code to find
   * the coordinates of the widget on the page it is placed on
   *
   * @param {Annotations.Forms.Field} field The field pertaining
   * to the text element clicked in the Signature Panel
   */
  const jumpToWidget = (field) => {
    if (!field.widgets.length) {
      return;
    }
    const widget = field.widgets[0];
    core.jumpToAnnotation(widget);

    const { scrollLeft, scrollTop } = core.getScrollViewElement();
    const rect = widget.getRect();
    const windowTopLeft = core
      .getDisplayModeObject()
      .pageToWindow({ x: rect.x1, y: rect.y1 }, widget.PageNumber);
    const windowBottomRight = core
      .getDisplayModeObject()
      .pageToWindow({ x: rect.x2, y: rect.y2 }, widget.PageNumber);

    setLocatorRect({
      x1: windowTopLeft.x - scrollLeft,
      y1: windowTopLeft.y - scrollTop,
      x2: windowBottomRight.x - scrollLeft,
      y2: windowBottomRight.y - scrollTop,
    });
  };

  /**
   * Function that invokes the necessary methods when a user interacts with
   * the title of the widget
   *
   * interaction
   */
  const titleInteraction = () => {
    jumpToWidget(field);
  };

  const renderTitle = () => {
    let content = isCertification
      ? translate('digitalSignatureVerification.Certified')
      : translate('digitalSignatureVerification.Signed');
    content += ` ${translate('digitalSignatureVerification.by')} ${signerName || translate('digitalSignatureModal.unknown')}`;
    if (signTime) {
      content += ` ${translate('digitalSignatureVerification.on')} ${signTime}`;
    }
    return (
      <div
        className="title collapsible"
        onClick={titleInteraction}
        onKeyDown={titleInteraction}
        tabIndex={0}
      >
        {collapsible && (
          <button
            className={classNames({
              arrow: true,
              expanded: isExpanded,
            })}
            onClick={handleArrowClick}
            tabIndex={0}
          >
            <Icon glyph="ic_chevron_right_black_24px" />
          </button>
        )}
        <SignatureIcon badge={badgeIcon} size="small" />
        <p>{content}</p>
      </div>
    );
  };

  const renderVerificationStatus = () => {
    const verificationType = isCertification
      ? translate('digitalSignatureVerification.Certification')
      : translate('digitalSignatureVerification.Signature');
    return (
      <div className="title">
        <p>
          {
            verificationStatus
              ? translate('digitalSignatureVerification.verificationStatus.valid', { verificationType })
              : translate('digitalSignatureVerification.verificationStatus.failed', { verificationType })
          }
        </p>
      </div>
    );
  };

  const renderPermissionStatus = () => {
    let content;

    switch (permissionStatus) {
      case ModificationPermissionsStatus.e_invalidated_by_disallowed_changes:
        content = translate(
          'digitalSignatureVerification.permissionStatus.invalidatedByDisallowedChanges'
        );
        break;
      case ModificationPermissionsStatus.e_has_allowed_changes:
        content = translate(
          'digitalSignatureVerification.permissionStatus.hasAllowedChanges'
        );
        break;
      case ModificationPermissionsStatus.e_unmodified:
        content = `${translate('digitalSignatureVerification.permissionStatus.unmodified')
        } ${isCertification
          ? translate('digitalSignatureVerification.certified')
          : translate('digitalSignatureVerification.signed')
        }.`;
        break;
      case ModificationPermissionsStatus.e_permissions_verification_disabled:
        content = translate(
          'digitalSignatureVerification.permissionStatus.permissionsVerificationDisabled'
        );
        break;
      case ModificationPermissionsStatus.e_no_permissions_status:
        content = translate(
          'digitalSignatureVerification.permissionStatus.noPermissionsStatus'
        );
        break;
    }

    return <p>{content}</p>;
  };

  const renderDisallowedChanges = () => {
    return disallowedChanges.map(({ objnum, type }) => (
      <p key={objnum}>
        {
          translate(
            'digitalSignatureVerification.disallowedChange',
            { type, objnum }
          )
        }
      </p>
    ));
  };

  const renderTrustVerification = () => {
    let verificationTimeMessage;
    switch (timeOfTrustVerificationEnum) {
      case (TimeMode.e_current):
        verificationTimeMessage = (
          translate('digitalSignatureVerification.trustVerification.current')
        );
        break;
      case (TimeMode.e_signing):
        verificationTimeMessage = (
          translate('digitalSignatureVerification.trustVerification.signing')
        );
        break;
      case (TimeMode.e_timestamp):
        verificationTimeMessage = (
          translate('digitalSignatureVerification.trustVerification.timestamp')
        );
        break;
      default:
        console.warn(
          `Unexpected pdftron::PDF::VerificationOptions::TimeMode: ${timeOfTrustVerificationEnum}`
        );
    }
    return (
      <div className="trust-verification-result">
        <p>
          {
            translate(
              trustVerificationResultBoolean
                ? 'digitalSignatureVerification.trustVerification.verifiedTrust'
                : 'digitalSignatureVerification.trustVerification.noTrustVerification'
            )
          }
        </p>
        {
          /**
           * @todo Chat with @rastko when he is available to determine what
           * content from `trustVerificationResultString` could potentially
           * be important to show to users
           *
           * <div>
           *   <p className='bold'>Trust verification result:</p>
           *   {
           *     trustVerificationResultString.split('\n').map((line, idx) => {
           *       return (
           *         <p
           *           key={`trustVerificationResultString-${idx}`}
           *           className={line[0] === '\t' ? '' : 'bold'}
           *         >
           *           {line}
           *         </p>
           *       );
           *     })
           *   }
           * </div>
           */
        }
        <p>{trustVerificationTime}</p>
        <p>{verificationTimeMessage}</p>
      </div>
    );
  };

  const renderSignatureDetails = () => {
    // No additional signature details to render
    if (!contactInfo && !location && !reason) {
      return null;
    }
    return (
      <div
        className='signatureDetails'
        onClick={() => jumpToWidget(field)}
        tabIndex={-1}
      >
        <div className="title collapsible">
          <button
            className={classNames({
              arrow: true,
              expanded: signatureDetailsExpanded,
            })}
            onClick={
              () => setSignatureDetailsExpanded(!signatureDetailsExpanded)
            }
            tabIndex={0}
          >
            <Icon glyph="ic_chevron_right_black_24px" />
          </button>
          <p>
            {
              translate(
                'digitalSignatureVerification.signatureDetails.signatureDetails'
              )
            }
          </p>
        </div>
        {
          signatureDetailsExpanded
          && (
            <div className="body">
              <div>
                <p className="bold">
                  {
                    `${translate('digitalSignatureVerification.signatureDetails.contactInformation')}:`
                  }
                </p>
                <p className="result-for-header">
                  {
                    contactInfo
                    || translate('digitalSignatureVerification.signatureDetails.noContactInformation')
                  }
                </p>
              </div>
              <div>
                <p className="bold">
                  {
                    `${translate('digitalSignatureVerification.signatureDetails.location')}:`
                  }
                </p>
                <p className="result-for-header">
                  {
                    location
                    || translate('digitalSignatureVerification.signatureDetails.noLocation')
                  }
                </p>
              </div>
              <div>
                <p className="bold">
                  {
                    `${translate('digitalSignatureVerification.signatureDetails.reason')}:`
                  }
                </p>
                <p className="result-for-header">
                  {
                    reason
                    || translate('digitalSignatureVerification.signatureDetails.noReason')
                  }
                </p>
              </div>
              {
                signTime && (
                  <div>
                    <p className="bold">
                      {
                        `${translate('digitalSignatureVerification.signatureDetails.signingTime')}:`
                      }
                    </p>
                    <p className="result-for-header">
                      {
                        signTime
                        || translate('digitalSignatureVerification.signatureDetails.noSigningTime')
                      }
                    </p>
                  </div>
                )
              }
            </div>
          )
        }
      </div>
    );
  };

  const openSignatureModal = () => {
    dispatch(actions.setSignatureValidationModalWidgetName(name));
    dispatch(actions.openElement('signatureValidationModal'));
  };

  const openSignatureModalWithFocus = useFocusHandler(openSignatureModal);

  /**
   * Renders a button to open the signature modal
   */
  const renderSignaturePropertiesButton = () => {
    return (
      <button
        onClick={openSignatureModalWithFocus}
        tabIndex={0}
        className="signatureProperties link"
      >
        <p className="bold underline">{translate('digitalSignatureVerification.signatureProperties')}</p>
      </button>
    );
  };

  return (
    <div className="signature-widget-info" tabIndex='0'>
      {signed ? (
        <React.Fragment>
          {renderTitle()}
          {isExpanded && (
            <div
              className='verificationDetails'
              onClick={() => jumpToWidget(field)}
              onKeyPress={() => jumpToWidget(field)}
              tabIndex={-1}
            >
              <div className="header">
                {
                  renderVerificationStatus({
                    isCertification,
                    verificationStatus,
                  })
                }
                <div className="body">
                  {
                    renderPermissionStatus({
                      isCertification,
                      ModificationPermissionsStatus,
                      permissionStatus,
                      translate,
                    })
                  }
                  {renderDisallowedChanges()}
                  {renderTrustVerification()}
                  {renderSignaturePropertiesButton()}
                </div>
              </div>
              <div className="header header-with-arrow">
                {renderSignatureDetails()}
              </div>
            </div>
          )}
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div
            className="title link"
            tabIndex={0}
            onClick={() => jumpToWidget(field)}
            onKeyPress={() => jumpToWidget(field)}
          >
            <div
              className={classNames({
                arrow: true,
                hidden: true
              })}
            ></div>
            <p>{translate('digitalSignatureVerification.unsignedSignatureField', { fieldName: field.name })}</p>
          </div>
        </React.Fragment>
      )}
      <WidgetLocator rect={locatorRect} />
    </div>
  );
};

WidgetInfo.propTypes = propTypes;

export default WidgetInfo;
