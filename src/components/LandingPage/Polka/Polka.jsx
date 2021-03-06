import styles from './Polka.module.scss';
import DownloadIcon from '@mui/icons-material/Download';
import polkaIcon from '../../../assets/Polka/PolkaIcon.svg';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
// import { Link } from 'react-router-dom';

const Polka = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.block}>
          <div className={styles.icon}>
            <img src={polkaIcon} alt='' />
          </div>
          <div className={styles.text}>
            L&apos;extension et un compte polkadot seront nécessaires pour
            continuer.
            <br />
            N&apos;hésitez pas à suivre les instructions si vous êtes perdu 
          </div>
          {/* <Link to='instructions'>
            <div className={styles.button}>
              <div className={styles.download}>INSTRUCTIONS</div>
              <div className={styles.dll}>
                <MenuBookIcon />
              </div>
            </div>
          </Link> */}
          <a
            href='https://polkadot.js.org/extension/'
            target='_blank rel="noreferrer" '
          >
            <div className={styles.button}>
              <div className={styles.download}>DOWNLOAD EXTENSION</div>
              <div className={styles.dll}>
                <DownloadIcon />
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Polka;
