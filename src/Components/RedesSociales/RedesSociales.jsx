import './RedesSociales.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const RedesSociales = () => {
    return(
        <div className='RedesSocialesContainer'>
            <div className='BtnSocualMedia'>
                <a href="https://github.com/JonnyMarin96" target="blank">
                    <GitHubIcon color='SocialMediaIcon' fontSize='large'/>
                </a>
            </div>

            <div className='BtnSocualMedia'>
                <a href="https://www.linkedin.com/in/jonathan-marin/" target="blank">
                    <LinkedInIcon color='SocialMediaIcon' fontSize='large'/>
                </a>
            </div>

            <div className='BtnSocualMedia'>
                <a href="https://www.instagram.com/jonnymarin/?hl=en" target="blank">
                    <InstagramIcon color='SocialMediaIcon' fontSize='large'/>
                </a>
            </div>

        </div>
    )
}

export default RedesSociales