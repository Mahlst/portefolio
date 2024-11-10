import './SocialButton.scss';

export default function SocialButton({ href, icon: Icon, label, variant = 'default' }) {
    return (
        <a 
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`social-button social-button--${variant}`}
        >
            {Icon && <Icon className="social-button__icon" />}
            <span className="social-button__label">{label}</span>
        </a>
    );
}