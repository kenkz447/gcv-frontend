import React from 'react';
import { Modal } from 'react-bootstrap';
import { CsLineIcons } from '@/ui/cs-line-icons';
import SearchInput from './SearchInput';

const SearchModal = ({ show, setShow }) => {
  return (
    <Modal
      id='searchPagesModal'
      className='modal-under-nav modal-search modal-close-out'
      size='lg'
      show={show}
      onHide={() => setShow(false)}
    >
      <Modal.Header className='border-0 p-0' />
      <Modal.Body className='ps-5 pe-5 border-0 pb-0'>
        <SearchInput show={show} setShow={setShow} />
      </Modal.Body>
      <Modal.Footer className='border-top justify-content-start ps-5 pe-5 border-0 pb-3 pt-3'>
        <span className='text-alternate d-inline-block me-3 m-0'>
          <CsLineIcons
            icon='arrow-bottom'
            size='15'
            className='text-alternate me-1 align-middle'
          />
          <span className='text-medium align-middle'>Navigate</span>
        </span>
        <span className='text-alternate d-inline-block me-3 m-0'>
          <CsLineIcons
            icon='arrow-bottom-left'
            size='15'
            className='text-alternate me-1 align-middle'
          />
          <span className='text-medium align-middle'>Select</span>
        </span>
      </Modal.Footer>
    </Modal>
  );
};

export default SearchModal;
