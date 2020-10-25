import * as React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import * as GifPlayer from 'react-gif-player';

import '../styles/Projects.css';

import * as websiteIcon from '../../images/website_icon.svg';
import * as codeIcon from '../../images/code_icon.svg';

export default class Projects extends React.Component {
  static Name = 'Halden Lin';

  render() {
    const cards = Projects.ProjectsInfo.map((projectInfo, i) => {
      return <ProjectCard {...projectInfo} key={i}/>
    })

    return (
      <div className="Projects">
        <ScrollableAnchor id="projects">
          <h3 className="title">other projects</h3>
        </ScrollableAnchor>
        <div className="cards">
          {cards}
        </div>
      </div>
    )
  }

  static ProjectsInfo = [
    {
      mp4: './static/gifs/parametric-press.mp4',
      name: 'The Hidden Cost of Digital Consumption',
      subtitle: "Parametric Press: Issue 02",
      authors: ["Halden Lin", "Aishwarya Nirmal", "Shobhit Hathi", "Lilian Liang"],
      type: "Interactive Web Article, October 2020",
      tidbit: "How does information get to your screen, and at what environmental cost?",
      links: {
        website: 'https://parametric.press/issue-02/streaming',
        code: 'https://github.com/ParametricPress/02-streaming'
      },
      technologies: 'Idyll, React, and Vega',
      width: 295,
      height: 480
    },
    {
      gif: './static/gifs/draco-editor.gif',
      name: "Draco-Editor",
      subtitle: "A web-based visualization recommendation editor",
      type: "Web Application, June 2018",
      authors: ["Halden Lin", "Dominik Moritz"],
      tidbit: "An online editor for Draco. The Draco system + WASM compiled Clingo solver work to provide a visualization recommendation editor. See the Draco paper for more information about the system itself.",
      links: {
        website: 'https://uwdata.github.io/draco-editor/#/editor',
        code: 'https://github.com/uwdata/draco-editor'
      },
      technologies: "React & Vega-Lite",
      width: 295,
      height: 480
    },
    {
      gif: './static/gifs/change-in-times.gif',
      name: "Change In Times",
      subtitle: "An interactive exploration of Seattle's economic landscape",
      authors: ["Halden Lin", "Shobhit Hathi", "Lilian Liang", "Gunnar Olson"],
      type: "Interactive Web Article, June 2017",
      award: "Best Explanatory Project, CSE 442 Spring 2017",
      tidbit: "A series of interactive data visualizations that explore business and housing data in Seattle between 2010 and 2016, sourced from The City of Seattle, Zillow, and Redfin.",
      links: {
        website: 'https://cse442-17s.github.io/Citiviz/final/'
      },
      technologies: "D3",
      width: 295,
      height: 480
    }
  ]
}

interface ProjectCardProps {
  gif?: string;
  mp4?: string;
  name: string;
  subtitle: string;
  authors?: string[];
  type: string;
  award?: string;
  tidbit: string;
  thumbnail?: any;
  links: ProjectLinks,
  technologies: string;
  width: number;
  height: number;
}

interface ProjectLinks {
  website?: string;
  code?: string;
}

class ProjectCard extends React.Component<ProjectCardProps, any> {
  render() {
    return (
      <div className="ProjectCard" style={{width: this.props.width, height: this.props.height}}>
        <div className="main">
          { this.props.gif ?
            <div className="gif-container">
              <img className="gif" src={this.props.gif} />
            </div>
            :
            <div className="gif-container">
              <video className="gif" autoPlay loop muted playsInline>
                <source src={this.props.mp4} type="video/mp4" />
              </video>
            </div> 
          }
          <div className="content">
            { this.props.name ? <div className="name">{this.props.name}</div> : null }
            { this.props.subtitle ? <div className="subtitle">{this.props.subtitle}</div> : null }
            <div className="type">
              {this.props.type}
              {this.props.award ? <span><span className="separator"> | </span><span className="award">{this.props.award}</span></span>: null}
            </div>
            { this.props.authors ? <div className="authors">
              {
              this.props.authors.map((author, i) => {
                  const authorName = author === Projects.Name ? <b>{author}</b> : author
                  if (i === 0) {
                    return <span key={i}>{authorName}</span>
                  } else {
                    return <span key={i}>, {authorName}</span>
                  }
                })
              }
            </div> : null }
            { this.props.tidbit ? <div className="tidbit">{this.props.tidbit}</div> : null }
            <div className="technologies">with {this.props.technologies}</div>
          </div>
        </div>
        <div className="resources">
          { this.props.links.website ?  <ResourceButton name="website" url={this.props.links.website} icon={websiteIcon} /> : null }
          { this.props.links.code ?  <ResourceButton name="code" url={this.props.links.code} icon={codeIcon} /> : null }
        </div>
      </div>
    )
  }
}

const ResourceButton = ({name, url, icon}: any) => {
  return (
    <div className="resource">
      <div className="tooltip">{name}</div>
      <a href={url} target="_blank">
        <img className="resource-icon" src={icon} />
      </a>
    </div>
  )
}