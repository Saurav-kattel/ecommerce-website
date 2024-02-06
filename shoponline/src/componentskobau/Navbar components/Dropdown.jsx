import Dropdown from 'react-bootstrap/Dropdown';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCircleChevronDown} from "@fortawesome/free-solid-svg-icons";

function BasicExample() {
  return (
    <Dropdown className='ml-10'>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
      <span>NPR<FontAwesomeIcon icon={faCircleChevronDown} /></span>
      </Dropdown.Toggle>

      <Dropdown.Menu className='bg-white text-black absolute'> 
        <Dropdown.Item href="#/action-1">USD</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default BasicExample;