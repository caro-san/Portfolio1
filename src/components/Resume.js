import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Photo from '../images/Photo_2.png';
import Education from './layout/Education';
import Experience from './layout/Experience';
import Skills from './layout/Skills';
import styled from '@emotion/styled'

const Titulo = styled.h2`
    color: #B76E79;
`;

class Resume extends Component {
    render(){



        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img
                                src="https://i.ibb.co/k9KqRq3/Photo-2.png"
                                alt="Photo"
                                style={{height: '350px'}}
                            />
                        </div>
                        <h2 style={{paddingTop: '1em'}}>Carolina Sanchez</h2>
                        <h4 style={{color: '#6E727D'}}>Programmer</h4>
                        <hr style={{borderTop: '3px solid #B76E79', width: '60%'}} />
                        <p>
                        <b>Gracias por pasarte por aqui y permitirme darme a conocer.</b> <br/>
                        Quiero que sepas un poco mas de mi.
                        Soy Carolina y soy una mujer que se considera responsable, muy puntual, curiosa,
                        resolutiva, que si no sabe algo, lo investiga.
                        Tengo buen manejo de relaciones interpersonales 
                        y facilidad para trabajar en equipo, siempre intento mantener 
                        una buena comunicación.
                        Tengo mucha disposición para aprender y
                        adaptarme a nuevas tecnologías. Aunque me inicie en la programacion POO,
                        Me incline mas hacia la programación web, actualmente soy autodidacta y
                        me gusta estudiar, aprender, experimentar y ver resultados, me
                        siento siempre lista para nuevos desafíos.
                        Quiero formar parte de un equipo de trabajo y
                        consolidarme profesionalmente en una empresa
                        que me permita crecer a nivel personal y
                        profesional. Encontrar una empresa que me
                        permita aplicar los conocimientos adquiridos y
                        aprender mucho más, contribuir con mi experiencia
                        y dedicación en cada tarea asignada.
                        </p>
                        <hr style={{borderTop: '3px solid #B76E79', width: '60%'}} />
                        <h5>Address</h5>
                        <p>Villa Ballester, Gral. San Martin. Prov. de Buenos Aires</p>
                        <h5>Phone</h5>
                        <p>(+54) 9 11 2255 6251</p>
                        <h5>Email</h5>
                        <p>jeyca0115@gmail.com</p>
                        <h5>Web</h5>
                        <p>Deluxe.com</p>
                        <hr style={{borderTop: '3px solid #B76E79', width: '60%'}} />
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <Titulo>Education</Titulo>

                        <Education 
                            startYear={2020}
                            endYear="Actual"
                            schoolName="Udemy"
                            schoolCourse="React - Guía completa: Hooks Context Redux MERN +15 Apps"
                            schoolDescription="Incluye React Hooks, Gatsby y GraphQL, Firestore, Redux, 
                            Context, MERN, Next.js, Styled Components, Custom Hooks"
                        />

                        <Education
                            startYear={2019}
                            endYear={2019}
                            schoolName="Educación IT"
                            schoolCourse="ReactJS"
                            schoolDescription="Primeros pasos con React"
                        />

                        <Education 
                            startYear={2019}
                            endYear={2019}
                            schoolName="Educación IT"
                            schoolCourse="Introducción a la programación en Javascript"
                            schoolDescription="Fundamentos de programación, para primeros pasos como programador. 
                            Aprendiendo las bases para generar cualquier tipo de desarrollo en entornos tanto Web como Mobile"
                        />

                        <Education 
                            startYear={2007}
                            endYear={2008}
                            schoolName="Institucion Universitaria Antonio Jose Camacho"
                            schoolCourse="Tecnología en Sistemas de Información"
                            schoolDescription="Completado: 4 Semestres"
                        />

                        <hr style={{borderTop: '3px solid #B76E79'}} />
                        <Titulo>Experience</Titulo>

                        <Experience
                            startYear={2019}
                            jobName="Front End Web Developer"
                            jobCompany="Doctor Walter Bargaz"
                            jobDescription=" Web programmer for dental office to update the Website, 
                            for informational purposes. Includes coding in HTML5, 
                            CSS3, Bootstrap and Javascript."
                        />

                        <Experience
                            startYear={2018}
                            endYear={2019}
                            jobName="Front End Web Developer Jr"
                            jobCompany="Royal House Institute"
                            jobDescription=" Junior web developer at an English institute to create a Website, for informational purposes. It includes
                            HTML5 and CSS3 coding."
                        />

                        <hr style={{borderTop: '3px solid #B76E79'}} />
                        <Titulo>Skills</Titulo>

                        <Skills
                            skill="Javascript"
                            progress={80}
                        />

                        <Skills
                            skill="ReactJS"
                            progress={60}
                        />
                        <Skills
                            skill="NodeJS"
                            progress={30}
                        />

                        <Skills
                            skill="HTML5/CSS3"
                            progress={100}
                        />

                        <Skills
                            skill="Bootstrap4"
                            progress={100}
                        />

                        <Skills
                            skill="Git"
                            progress={80}
                        />

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;