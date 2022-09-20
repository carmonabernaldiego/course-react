import logoFacebook from '../assets/img/facebook.svg'
import logoTwitter from '../assets/img/twitter.svg'
import logoYoutube from '../assets/img/youtube.svg'
import '../assets/style/footer.css'

function Footer() {
  return (
    <footer>
        <img src={logoFacebook} alt="Logo Facebook"></img>
        <img src={logoTwitter} alt="Logo Twitter"></img>
        <img src={logoYoutube} alt="Logo Youtube"></img>
    </footer>
  );
}
export default Footer;