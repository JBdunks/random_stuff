import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const BrewModal= ({ name, street, city, zip, state, web, type, phone}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div onClick={handleShow}>
        {name}
      </div>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body><p>{street}</p>
                    <p>{city},{state} {zip}</p>
                    <p>{type}</p>
        </Modal.Body>
        <Modal.Footer>
          <p><a href={`tel:${phone}`}>{phone}</a></p><p>{web ? <a href={web} target = '_blank'>on the web</a> : 'no website'} </p>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default BrewModal;
