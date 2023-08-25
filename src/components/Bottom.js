import { BsGithub, BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
    return (
        <footer className="bg-rose-600 p-4">
            <div className="mx-auto">
                <p className="text-xl">Contacto:</p>
                <ul className="m-auto">
                    <li className="my-2">
                        <a href="mailto:juanmanuelzimmermann@gmail.com" target="_blank" className="flex flex-row content-center items-center gap-2"><GrMail /> juanmanuelzimmermann@gmail.com</a>
                    </li>
                    <li className="my-2">
                        <a href="https://github.com/JuanmaZimm" target="_blank" className="flex flex-row content-center items-center gap-2"><BsGithub /> JuanmaZimm</a>
                    </li>
                    <li className="my-2">
                        <a href="https://www.linkedin.com/in/juan-manuel-zimmermann/" target="_blank" className="flex flex-row content-center items-center gap-2"><BsLinkedin /> Juan Manuel Zimmermann</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;