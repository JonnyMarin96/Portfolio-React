import './RedesSociales.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const RedesSociales = () => {
    return(
        <div className='RedesSocialesContainer'>
            <GitHubIcon color='SocialMediaIcon' className='RedesSocialesIcon'/>
            <LinkedInIcon color='SocialMediaIcon' className='RedesSocialesIcon'/>
            <InstagramIcon color='SocialMediaIcon' className='RedesSocialesIcon'/>
        </div>
    )
}

export default RedesSociales