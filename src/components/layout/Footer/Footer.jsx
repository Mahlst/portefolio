import './Footer.scss'

export default function Footer() {
    return(
        <>
            <footer className='section__footer'>
                <p className="section__footer-text">Designer et développé par Rothländer Peter</p>
                <p className="section__footer-text">Réalisé avec <span className="section__footer-span">React.js</span>. Propulsé par <span className="section__footer-span">Vercel</span>.</p>
            </footer>
        </>
    )
}