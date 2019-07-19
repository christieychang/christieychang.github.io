import React from "react"
import Image from "../components/image"
import "./temp_layout.css"
import { Link } from "gatsby"

const ListLink = props => (
  <li className="listlink">
    <a href={props.to} className="link" target="_blank">{props.children}</a>
  </li>
)

export default ({children}) => (
  <div className="container">
  	<Image />
  	{children}
  	<ul>
      <ListLink to="mailto:cchang2@alumni.cmu.edu">email</ListLink>
      <ListLink to="https://www.linkedin.com/in/christieychang/">linkedin</ListLink>
    </ul>
  </div>
)