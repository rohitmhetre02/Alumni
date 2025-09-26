import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProfilePage.css';

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState('overview');

    const [editModes, setEditModes] = useState({
        overview: false,
        experience: false,
        education: false,
        skills: false,
        achievements: false,
        interests: false,
    });

    const [userData, setUserData] = useState({
        name: 'Priya Sharma',
        avatar: 'https://i.pravatar.cc/150?u=priya',
        cover: 'https://placehold.co/1200x400/6A5ACD/FFFFFF?text=Cover',
        headline: 'Data Scientist passionate about AI and machine learning | Driving data-driven decisions',
        title: 'Data Scientist',
        company: 'Flipkart',
        location: 'Bangalore, Karnataka, India',
        about: 'With a strong background in data science and AI, I specialize in building predictive models that enhance business outcomes...',
        experience: [
            { role: 'Data Scientist', company: 'Flipkart', duration: '2020 - Present', location: 'Bangalore', description: 'Develop AI models for product recommendations, resulting in 30% uplift in user engagement.' },
            { role: 'Data Analyst', company: 'Infosys', duration: '2019 - 2020', location: 'Hyderabad', description: 'Analyzed customer data to inform business strategies.' }
        ],
        education: [
            { degree: 'M.Tech in Data Science', institution: 'IIT Delhi', year: '2019', field: 'AI & ML', gpa: '8.5/10' },
            { degree: 'B.Tech in Computer Science', institution: 'NIT Surat', year: '2017', field: 'Computer Science', gpa: '8.2/10' }
        ],
        skills: ['Python', 'Machine Learning', 'SQL', 'Tableau', 'Power BI'],
        achievements: [
            'Developed an AI model that improved product recommendations by 30%.',
            'Published paper on Ethical AI in E-commerce.',
            'Won Kaggle Competition for Predictive Modeling (Top 5%).'
        ],
        interests: ['AI Ethics', 'Open Source Contributions', 'Mentoring', 'Hiking'],
        socials: { linkedin: '#', github: '#', twitter: '#' },
        contact: { email: 'priya.sharma@email.com', phone: '+91-9876543210' },
        yearsExperience: 5,
        connections: 500
    });

    const toggleEdit = (section) => {
        setEditModes(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const handleChange = (e, section, index = null) => {
        const { name, value } = e.target;
        setUserData(prev => {
            const copy = { ...prev };
            if (index !== null && Array.isArray(copy[section])) {
                copy[section][index][name] = value;
            } else {
                copy[section][name] = value;
            }
            return copy;
        });
    };

    const handleSave = (section) => {
        toggleEdit(section);
    };

    const SectionCard = ({ title, sectionKey, children }) => {
        const isEditing = editModes[sectionKey];
        return (
            <div className="card mb-4 shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5>{title}</h5>
                    {isEditing ? (
                        <div>
                            <button onClick={() => toggleEdit(sectionKey)} className="btn btn-sm btn-secondary me-2">Cancel</button>
                            <button onClick={() => handleSave(sectionKey)} className="btn btn-sm btn-success">Save</button>
                        </div>
                    ) : (
                        <button onClick={() => toggleEdit(sectionKey)} className="btn btn-sm btn-primary">Edit</button>
                    )}
                </div>
                <div className="card-body">{children}</div>
            </div>
        );
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'experience':
                return (
                    <SectionCard title="Experience" sectionKey="experience">
                        <div className="timeline">
                            {userData.experience.map((exp, idx) => (
                                <div className="timeline-item" key={idx}>
                                    <div className="timeline-dot"></div>
                                    <div className="timeline-content">
                                        {editModes.experience ? (
                                            <>
                                                <input type="text" className="form-control mb-1" name="role" value={exp.role} onChange={(e) => handleChange(e, 'experience', idx)} />
                                                <input type="text" className="form-control mb-1" name="company" value={exp.company} onChange={(e) => handleChange(e, 'experience', idx)} />
                                                <input type="text" className="form-control mb-1" name="duration" value={exp.duration} onChange={(e) => handleChange(e, 'experience', idx)} />
                                                <textarea className="form-control" name="description" value={exp.description} onChange={(e) => handleChange(e, 'experience', idx)} />
                                            </>
                                        ) : (
                                            <>
                                                <h6>{exp.role} at {exp.company}</h6>
                                                <small className="text-muted">{exp.duration} | {exp.location}</small>
                                                <p>{exp.description}</p>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </SectionCard>
                );
            case 'education':
                return (
                    <SectionCard title="Education" sectionKey="education">
                        <div className="education-grid">
                            {userData.education.map((edu, idx) => (
                                <div className="education-card" key={idx}>
                                    {editModes.education ? (
                                        <>
                                            <input type="text" className="form-control mb-1" name="degree" value={edu.degree} onChange={(e) => handleChange(e, 'education', idx)} />
                                            <input type="text" className="form-control mb-1" name="institution" value={edu.institution} onChange={(e) => handleChange(e, 'education', idx)} />
                                            <input type="text" className="form-control mb-1" name="year" value={edu.year} onChange={(e) => handleChange(e, 'education', idx)} />
                                        </>
                                    ) : (
                                        <>
                                            <h6>{edu.degree}</h6>
                                            <p className="text-muted">{edu.institution} ({edu.year})</p>
                                            <p className="text-muted">{edu.field} | GPA: {edu.gpa}</p>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </SectionCard>
                );
            case 'overview':
            default:
                return (
                    <>
                        <SectionCard title="About" sectionKey="overview">
                            {editModes.overview ? (
                                <textarea className="form-control" value={userData.about} onChange={(e) => setUserData(prev => ({ ...prev, about: e.target.value }))} />
                            ) : (
                                <p>{userData.about}</p>
                            )}
                        </SectionCard>

                        <SectionCard title="Skills" sectionKey="skills">
                            {editModes.skills ? (
                                <input type="text" className="form-control" value={userData.skills.join(', ')} onChange={(e) => setUserData(prev => ({ ...prev, skills: e.target.value.split(',').map(s => s.trim()) }))} />
                            ) : (
                                <div>{userData.skills.map((s, i) => <span key={i} className="badge bg-info me-2">{s}</span>)}</div>
                            )}
                        </SectionCard>

                        <SectionCard title="Achievements" sectionKey="achievements">
                            {editModes.achievements ? (
                                <textarea className="form-control" value={userData.achievements.join('\n')} onChange={(e) => setUserData(prev => ({ ...prev, achievements: e.target.value.split('\n') }))} />
                            ) : (
                                <ul>
                                    {userData.achievements.map((a, i) => <li key={i}>{a}</li>)}
                                </ul>
                            )}
                        </SectionCard>

                        <SectionCard title="Interests" sectionKey="interests">
                            {editModes.interests ? (
                                <input type="text" className="form-control" value={userData.interests.join(', ')} onChange={(e) => setUserData(prev => ({ ...prev, interests: e.target.value.split(',').map(s => s.trim()) }))} />
                            ) : (
                                <div>{userData.interests.map((i, idx) => <span key={idx} className="badge bg-secondary me-2">{i}</span>)}</div>
                            )}
                        </SectionCard>
                    </>
                );
        }
    };

    return (
        <div className="profile-page-container">
            {/* Header */}
            <div className="profile-header" style={{ backgroundImage: `url(${userData.cover})` }}>
                <div className="header-content">
                    <img src={userData.avatar} alt={userData.name} className="profile-avatar" />
                    <div className="header-info">
                        <h2>{userData.name}</h2>
                        <p>{userData.title}</p>
                        <p className="location">{userData.location} | {userData.company}</p>
                        <p className="headline">{userData.headline}</p>
                    </div>
                    <div className="header-actions">
                        <Link to="/digital-card" className="btn btn-primary me-2">Digital Card</Link>
                        <button className="btn btn-outline-secondary">Connect</button>
                    </div>
                    <div className="social-links-bar mt-2">
                        <a href={userData.socials.linkedin} className="me-2">LinkedIn</a>
                        <a href={userData.socials.github} className="me-2">GitHub</a>
                        <a href={userData.socials.twitter}>Twitter</a>
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="profile-tabs mt-4">
                <button className={`tab ${activeTab==='overview'?'active':''}`} onClick={()=>setActiveTab('overview')}>Overview</button>
                <button className={`tab ${activeTab==='experience'?'active':''}`} onClick={()=>setActiveTab('experience')}>Experience</button>
                <button className={`tab ${activeTab==='education'?'active':''}`} onClick={()=>setActiveTab('education')}>Education</button>
            </div>

            {/* Content */}
            <div className="profile-content mt-3">
                {renderTabContent()}
            </div>
        </div>
    );
}
