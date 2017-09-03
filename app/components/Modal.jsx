import React from 'react';

import BootstrapNative from 'bootstrap.native/dist/bootstrap-native-v4';

class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    const errorModal = document.getElementById('error-modal');
    this.modal = new BootstrapNative.Modal(errorModal);
  }

  componentDidUpdate() {
    if (this.props.errorMessage) {
      this.modal.show();
    }
  }

  handleClose() {
    this.modal.hide();
  }

  render() {
    return (
      <div id="error-modal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="errorModal" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" aria-label="Close" onClick={this.handleClose}>
                <span aria-hidden="true">×</span>
              </button>
              <h4 className="modal-title" id="errorModal">Error</h4>
            </div>
            <div className="modal-body">
              {this.props.errorMessage}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" onClick={this.handleClose}>Close</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Modal;