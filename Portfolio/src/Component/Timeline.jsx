import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWork, MdSchool, MdStar, MdFindInPage } from 'react-icons/md';


const Timeline = () => {
    return (
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(255, 255, 255)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="April25 - June25"
                dateClassName="black-timeline-date"
                dateStyle={{ color: "black" }}
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title" style={{ color: "black" }}>Outlier Ai </h3>
                <h4 className="vertical-timeline-element-subtitle" style={{ color: "black" }} >Web Developer Ai Trainer</h4>
                <p style={{ color: "black" }}>
                    • Enhanced my web development and computer science skills through real-world client-driven projects.
                    <br/>
                    • Collaborated with 15+ Al Trainers to deliver high-quality data for model training.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Mar25-Apr25"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">It Nucleus</h3>
                <h4 className="vertical-timeline-element-subtitle">Intern (Paid)</h4>
                <p>
                    • Improved SEO and site structure using semantic HTML, keyword research, and content optimization, boosting site visibility.<br />
                    • Suggested SEO changes aligned with web standards, enhancing accessibility and search performance.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Jun2024-Aug2024"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdWork />}
            >
                <h3 className="vertical-timeline-element-title">CodSoft</h3>
                <h4 className="vertical-timeline-element-subtitle">Web Developer Intern</h4>
                <p>
                    •Built and maintained responsive web pages using HTML, CSS, and JavaScript, enhancing UI consistency and user engagement.<br />
                    • Collaborated across teams to understand tech workflows, leading to better development decisions and smoother coordination.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="Present"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Master's in Computer Application</h3>
                <h2 className="vertical-timeline-element-subtitle">Software Engineering</h2>
                <p>
                    Guru Gobind Singh indraprastha university
                </p>

            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date=" 2022-2025"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">Bachelor's of Computer application</h3>
                <h4 className="vertical-timeline-element-subtitle">8.56 CGPA</h4>
                <p>
                    Guru Gobind Singh indraprastha university
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2021-2022"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">12th</h3>
                <h2 className="vertical-timeline-element-subtitle">88%</h2>
                <p>
                    Dashmesh public school
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2020 - 2021"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdSchool />}
            >
                <h3 className="vertical-timeline-element-title">High school</h3>

                <h2 className="vertical-timeline-element-subtitle">69%</h2>
                <p>
                    Dashmesh public school
                </p>
            </VerticalTimelineElement>
            
        </VerticalTimeline>
    );
};

export default Timeline;