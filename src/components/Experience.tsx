import * as React from "react";
import * as classNames from 'classnames';
import ScrollableAnchor from 'react-scrollable-anchor';

import * as rubrikLogo from '../../images/rubrik_logo.png';
import * as googleLogo from '../../images/google_logo.svg';
import * as allenLogo from '../../images/allen_logo.png';

import '../styles/Experience.css';

export default class Experience extends React.Component {
  render() {
    const cards = Experience.ExperienceInfo.map((experienceInfo, i) => {
      return <ExperienceCard {...experienceInfo} key={i}/>
    })

    return (
        <div className="Experience">
          <ScrollableAnchor id="Experience">
            <h3 className="title">Experience</h3>
          </ScrollableAnchor>
          <div className="cards">
            {cards}
          </div>
        </div>
    )
  }

  static ExperienceInfo: ExperienceCardProps[] = [
    {
      companyName: "Rubrik",
      companyLogo: rubrikLogo,
      logoSize: 56,
      role: "Software Engineering Intern",
      team: "Archival",
      time: "Summer 2018",
      tidbit: "Design and implement tiered lifecycle management for data backed up to the cloud. Functionality developed for Microsoft Azure, but designed to be extensible to other platforms (e.g., Amazon S3, Google Cloud Platform)."
    },
    {
      companyName: "Google",
      companyLogo: googleLogo,
      logoSize: 32,
      role: "UX Engineering Intern",
      team: "Search",
      time: "Summer 2017",
      tidbit: "Full-stack design and development of a web application (chrome extension), including accompanying server and API, hosted on Google infrastructure"
    },
    {
      companyName: "Paul G. Allen School",
      companyLogo: allenLogo,
      logoSize: 140,
      role: "Research Assistant",
      team: "Interactive Data Lab",
      time: "2017, 2018",
      tidbit: "Visualization Recommendation Systems (Voyager / CompassQL, Draco) and visualization for Natural Language Processing."
    },
    {
      companyName: "Paul G. Allen School",
      companyLogo: allenLogo,
      logoSize: 140,
      role: "Teaching Assistant",
      team: "CSE 142, 143, 311, 512",
      time: "2016, 2017, 2018",
      tidbit: "Held office hours, grade assignments, and lead tutorials or discussion for Intro to Programming (undergrad), Foundations in Computing (undergrad), and Data Visualization (grad)."
    },
    {
      companyName: "Paul G. Allen School",
      companyLogo: allenLogo,
      logoSize: 140,
      role: "Software Developer",
      team: "TA Tools",
      time: "2016, 2017, 2018",
      tidbit: "Full-stack development of the Intro TA Tools website, used to facilitate operation of CSE 142 and 143 courses"
    }
  ]
}

interface ExperienceCardProps {
  companyName: string;
  companyLogo: any;
  logoSize: number;
  role: string;
  team: string;
  time: string;
  tidbit: string;
}

interface ExperienceCardState {
  expanded: boolean;
}

class ExperienceCard extends React.Component<ExperienceCardProps, ExperienceCardState> {
  constructor(props: ExperienceCardProps) {
    super(props)

    this.state = {
      expanded: false
    }

    this.toggleDetail = this.toggleDetail.bind(this);
  }

  render() {
    const cardClass = classNames({
      'ExperienceCard': true,
      'expanded': this.state.expanded
    })

    return (
      <div className={cardClass}

        onClick={this.toggleDetail}
      >
        <div className="card">
          <div className="logo-box">
            <img className="logo" style={{maxWidth: this.props.logoSize}} src={this.props.companyLogo}/>
          </div>
          <div className="text">
            <div><b>{this.props.companyName}</b></div>
            <div className="regular-weight">{this.props.role}</div>
            <div>{this.props.team}</div>
            <div><i>{this.props.time}</i></div>
            <br/>
            <div>{this.props.tidbit}</div>
          </div>
        </div>
      </div>
    )
  }

  private toggleDetail() {
    this.setState({
      expanded: !this.state.expanded
    })
  }
}