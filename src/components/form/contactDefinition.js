import validators from './validators';
import formatters from './formatters';

import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

export default [
  {
    name: 'firstName',
    placeHolder: 'First',
    inputType: 'text',
    label: 'First Name',
    icon: faUser,
    validator: validators.validName,
  },
  {
    name: 'lastName',
    placeHolder: 'Last',
    inputType: 'text',
    label: 'Last Name',
    icon: faUser,
    validator: validators.validName,
  },
  {
    name: 'email',
    placeHolder: 'user@domain.com',
    inputType: 'email',
    label: 'Email',
    icon: faEnvelope,
    validator: validators.validEmail,
  },
  {
    name: 'phone',
    placeHolder: '(555) 555-5555',
    inputType: 'tel',
    label: 'Phone Number',
    icon: faPhone,
    validator: validators.validPhoneNumber,
    formatter: formatters.formattedPhoneNumber,
  },
];