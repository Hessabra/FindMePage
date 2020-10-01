import React from "react"
import styled from "styled-components"

import "../global.css"

import Container from "../components/Container"
import Findme from "../assets/img/findme.jpg"

import { SiWattpad, SiPatreon, SiGoodreads, SiTwitter } from 'react-icons/si';

const LeftImg = styled.div`
	position: fixed;
	width: 45%;
	@media only screen and (max-width: 768px)  {
		position: initial;
		display: flex;
		justify-content: center;
		width: 100%;
	}
`
const SmolBack = styled.div`
	display: none;
	@media only screen and (max-width: 768px)  {
		position: absolute;
		display: flex;
		justify-content: center;
		background-color: #694C4A;
		width: 100%;
		height: 50vw;
		z-index: -1;
	}
`

const Img = styled.img`
	width: 100%;
	height: 100vh;
	@media only screen and (max-width: 768px)  {
		margin-top: 10vh;
		width: 40%;
		height: 50%;
	}
`

const RightSpace = styled.div`
	margin-left: 45vw;
	width: 55%;
	@media only screen and (max-width: 768px)  {
		margin-left: 0;
		width: 100%;
	}
`

const Title = styled.h1`
	margin: 0;
	font-family: Milk;
	font-size: 4rem;
	color: #E76758;

	@media only screen and (max-width: 330px)  {
		font-size: 3rem;
	}

`

const Label = styled.label`
	font-family: Nunito;
	font-size: 1.5rem;
	color: #2E2C2B;
`
const Text = styled.div`
	font-family: Nunito;
	font-size: 1.1rem;
	color: #2E2C2B;
	text-align: justify;
	box-sizing: border-box;
	padding: 7vw;
`
const Topping = styled.div`
	box-sizing: border-box;
	padding: 10vw 10vw 0 10vw;	
`

const Seprator = styled.hr`
	margin-left: 10vw;
	height: 0.5px;
`
const CircleS = styled.div`
	width: 2.5rem;
	height: 2.5rem;
	background: rgb(231,103,88);
	background: radial-gradient(circle,rgba(231,103,88,1) 0%,rgba(231,103,88,1) 0%,rgba(231,103,88,1) 35%,rgba(95,73,77,1) 87%,rgba(231,103,88,1) 95%);
	filter: blur(13px);
	border-radius: 100%;
	position: absolute;
	top: 0;
	right: 0;
	margin: 5vh 5vw;
	@media only screen and (max-width: 768px)  {
		display: none;
	}
`
const CircleM = styled.div`
	width: 2rem;
	height: 2rem;
	border-radius: 100%;
	position: absolute;
	top: 0;
	right: 0;
	margin: 10vh 10vw;
	background: rgb(231,103,88);
	background: radial-gradient(circle,rgba(231,103,88,1) 0%,rgba(231,103,88,1) 0%,rgba(231,103,88,1) 35%,rgba(95,73,77,1) 87%,rgba(231,103,88,1) 95%);
	filter: blur(13px);
	@media only screen and (max-width: 768px)  {
		display: none;
	}
`
const CircleL = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 100%;
	position: absolute;
	top: 0;
	right: 0;
	margin: 15vh 15vw;
	background: rgb(231,103,88);
	background: radial-gradient(circle,rgba(231,103,88,1) 0%,rgba(231,103,88,1) 0%,rgba(231,103,88,1) 35%,rgba(95,73,77,1) 87%,rgba(231,103,88,1) 95%);
	filter: blur(13px);
	@media only screen and (max-width: 768px)  {
		display: none;
	}
`
const Social = styled.div`
	font-family: Nunito;
	font-size: 1.5rem;
	color: #2E2C2B;

	display: flex;
	align-items: center;

	padding: 0vw 10vw 10vh 10vw;	

	flex-wrap: wrap;
`
const SocialCirlce = styled.a`
	height: 50px;
	width: 50px;
	border-radius: 100%;
	background-color: rgb(231,103,88);
	box-shadow: 2px 4px 15px 2px rgba(0, 0, 0, 0.25);
	margin: 0 0 0 2vw;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	:hover {
		color: rgb(231,103,88);
		background-color: white;
	}
}
`
const Footer = styled.footer`
	box-sizing: border-box;
	padding: 20px;
	padding-left: 50vw;
	background-color: #2E2C2B;
	color: #797777;
	font-family: Nunito;
	@media only screen and (max-width: 768px)  {
		padding-left: 5vw;
	}
`

export default function Home() {
  return (
	  <>
		<Container>
			<CircleL />
			<CircleM />
			<CircleS />
			<SmolBack />
			<LeftImg>
				<Img src={Findme} />
			</LeftImg>
			<RightSpace>
				<Topping>
					<Title>Find me</Title>
					<Label> By: Tahereh Mafi</Label>
				<Seprator />
				</Topping>
				<Text>In Shadow Me, Juliette is still reeling from Warner's betrayal, and Kenji is trying to balance his friendship with her with his responsibilities as a leader of the resistance against the Reestablishment. Things get even more interesting when an unexpected person from Omega Point’s past surfaces.

						<br /><br />The fourth novella brings readers back to the Shatter Me world one last time before the final novel installment in the series hits shelves in 2020.

						<br /><br />The Shatter Me series is perfect for fans who crave action-packed young adult novels with tantalizing romance like Divergent and The Hunger Games. This captivating story was praised as "a thrilling, high-stakes saga of self-discovery and forbidden love" by Ransom Riggs, bestselling author of Miss Peregrine's Home for Peculiar Children.</Text>
				<Social> Find it on:
					<SocialCirlce href="#Goodreads"><SiGoodreads /></SocialCirlce>
					<SocialCirlce href="#Twitter"><SiTwitter /></SocialCirlce>
					<SocialCirlce href="#Wattpad"><SiWattpad /></SocialCirlce> 
					<SocialCirlce href="#Patreom"><SiPatreon /></SocialCirlce>
				</Social>
			</RightSpace>
		</Container>
		<Footer>Use and change to your heart content</Footer>
	  </>
  )
}
