'use client'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const SocialMediaLinks = () => {
    return (
        <div className='flex flex-row gap-4 items-center'>
            <div className='flex flex-row gap-4 items-center'>
                <a href="https://github.com/sheetal2024" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/sheetal-sharma-815267257" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                {/* <a href="https://www.youtube.com/channel/UCfKRZUU78XIcQvh1_QsdQyA" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faYoutube} size="2x" />
                </a> */}
            </div>
            <a className='border-0 p-1 border-[#ffffff] rounded-full social-links-shadow' href="https://sheetalsharma.netlify.app/" target="_blank" rel="noopener noreferrer">
                <Image src={'/favicon.png'} width={400} height={400} className='w-6 h-6' alt={''} />
            </a>
        </div>
    );
};

export default SocialMediaLinks;