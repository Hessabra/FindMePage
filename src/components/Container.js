import React from "react"
import styled from "styled-components"

const Cont  = styled.div`
	margin: 0;
	padding: 0;
	backgroud-color: floralwhite;
	min-height: 100vh;
	animation:fadeIn 0.5s;
	@keyframes fadeIn{
		0%{opacity:0.1;}  
		80%{opacity:0.8;}
		100%{opacity:1;}
	}
`;

export default function Container({children}) {
	return(
		<Cont>
			{children}
		</Cont>
	)
}