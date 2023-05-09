import { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";
import logo from '../../assets/PokemonLogo.svg'

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<img src={logo} alt="Logo" className="logo" />
			<nav ref={navRef}>
			<Link to="/home">Home</Link>
			<Link to="/my-work">My work</Link>
			<Link to="/blog">Blog</Link>
			<Link to="/about-me">About me</Link>
			<Link to="/play">Play</Link>
			<Link to="/cards">Cards</Link>
				
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button
				className="nav-btn"
				onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;