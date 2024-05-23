import css from './Loader.module.css';

export const Loader = ({ isStatic }) => {
const classname = isStatic ? css.staticContainer : css.fixedContainer;

  return (
    <div className={classname}>
      <div className={css.spinner}>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </div>
    </div>
  );
};
