import Image from 'next/image'
import logoImage from '../../../public/images/logos/topy.png'
const Logo = () => {
    return (
      <Image className="logo" src={logoImage} height={40} width={40} alt={'logo'} referrerPolicy="no-referrer"/>
    )
  };
  
  
  export default Logo