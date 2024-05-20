import css from './Contacts.module.css';

export const Contacts = () => {
  return (
    <ul className={css.contactsList}>
      <li className={css.contactsLItem}>
        <a href="tel:+13025432012" type='button' target="_blank" rel="noreferrer noopener">+1 302 543 20 12</a>
      </li>
      <li className={css.contactsLItem}>
        <a href="mailto:info@eliftech.com">info@eliftech.com</a>
      </li>
      <li className={css.contactsLItem}>
        <a href="http://www.eliftech.com" target="_blank" rel="noreferrer noopener">www.eliftech.com</a>
      </li>
    </ul>
  )
}

