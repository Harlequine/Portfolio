import Reac, { forwardRef } from 'react'

import Pic from '../../assets/pic.png'

//frontend
import html from '../../assets/tech/htmllogo.png'
import css from '../../assets/tech/csslogo.png' 
import react from '../../assets/tech/reactlogo2.png' 

//backend
import nodejs from '../../assets/tech/nodelogo.png'
import mongodb from '../../assets/tech/mongodb.png'
import mysql from '../../assets/tech/mysql.png'
import express from '../../assets/tech/expresslogo2.png'

//devops
import git from '../../assets/tech/gitlogo.png'
import github from '../../assets/tech/githublogo.png'
import npm from '../../assets/tech/npm.png'

//languages
import cplusplus from '../../assets/tech/c++.png'
import java from '../../assets/tech/java.png'
import js from '../../assets/tech/jslogo.png'

//tools
import vscode from '../../assets/tech/vscode.png'
import postman from '../../assets/tech/postman.png'

import './about.css'

const about = forwardRef(( props, ref ) => {
  return (
    <section id="about" ref={ref}>
      <h1>About Me</h1>
      <div className="details">
        <div className="image-container">
          <img src={Pic} alt="" />
        </div>
        <div className="paragraph">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi voluptatibus dolore blanditiis consequuntur voluptates quia, ad aspernatur nulla placeat. Quos quod molestiae, beatae consequuntur iure aliquam sed praesentium blanditiis!</p>
        </div>
      </div>
      <div className="technologies">
        <h2>Technologies I've Worked With</h2>
        <div className="tech-containers">
          <div className="row">
            <div className="container">
              <div className="title"><h4>FRONTEND</h4></div>
              <div className="tech-icons">
                <img src={html} alt="" />
                <img src={css} alt="" />
                <img src={react} alt="" />
              </div>
            </div>
            <div className="container">
              <div className="title"><h4>BACKEND</h4></div>
              <div className="tech-icons">
                <img src={nodejs} alt="" />
                <div className="resize">
                  <img src={express} alt="" />
                </div>
                <img src={mongodb} alt="" />
                <div className="resize">
                  <img src={mysql} alt="" />
                </div>
              </div>
            </div>
            <div className="container">
              <div className="title"><h4>DEVOPS</h4></div>
              <div className="tech-icons">
                <img src={git} alt="" />
                <img src={github} alt="" />
                <img src={npm} alt="" />
              </div>
            </div>
          </div>
          
          <div className="row">
            <div className="container">
              <div className="title"><h4>LANGUAGES</h4></div>
              <div className="tech-icons">
                <img src={cplusplus} alt="" />
                <img src={java} alt="" />
                <img src={js} alt="" />
              </div>
            </div>
            <div className="container">
              <div className="title"><h4>TOOLS  </h4></div>
              <div className="tech-icons">
                <img src={vscode} alt="" />
                <img src={postman} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
})

export default about