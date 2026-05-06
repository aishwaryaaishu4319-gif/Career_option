import { useMemo, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useParams } from 'react-router-dom'
import {
  assessmentModels,
  assessmentQuestions,
  careers,
  categories,
  colleges,
  dashboardData,
  jobInsights,
  learningPlatforms,
  successStories,
  testimonials,
  trendingCareers,
} from './data/careerData'
import './App.css'

const careerMap = new Map(careers.map((career) => [career.id, career]))
const categoryMap = new Map(categories.map((category) => [category.id, category]))

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<CategoriesPage />} />
            <Route path="/categories/:categoryId" element={<CategoryDetailPage />} />
            <Route path="/careers/:careerId" element={<CareerDetailPage />} />
            <Route path="/roadmaps" element={<RoadmapsPage />} />
            <Route path="/assessment" element={<AssessmentPage />} />
            <Route path="/colleges" element={<CollegeFinderPage />} />
            <Route path="/skills" element={<SkillLearningPage />} />
            <Route path="/insights" element={<InsightsPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <Link to="/" className="brand">
          <span className="brand-mark">🚀</span>
          <div>
            <p className="brand-title">Career Compass</p>
            <p className="brand-subtitle">Find the best career path for your future</p>
          </div>
        </Link>
        <nav className="nav">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/categories">Categories</NavLink>
          <NavLink to="/roadmaps">Roadmaps</NavLink>
          <NavLink to="/assessment">Assessment</NavLink>
          <NavLink to="/colleges">Colleges</NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/insights">Insights</NavLink>
        </nav>
        <div className="header-actions">
          <Link className="button ghost" to="/assessment">
            Take Test
          </Link>
          <Link className="button" to="/dashboard">
            Student Dashboard
          </Link>
        </div>
      </div>
    </header>
  )
}

function Home() {
  const [searchTerm, setSearchTerm] = useState('')
  const searchResults = useMemo(() => {
    const normalized = searchTerm.trim().toLowerCase()
    if (!normalized) {
      return []
    }
    return careers.filter((career) => career.title.toLowerCase().includes(normalized))
  }, [searchTerm])

  const trendingList = trendingCareers
    .map((id) => careerMap.get(id))
    .filter(Boolean)

  return (
    <div className="page">
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <span className="pill">Career Guidance Platform</span>
            <h1>Discover careers, colleges, and skills in one place.</h1>
            <p className="hero-text">
              Explore career paths, understand the skills you need, and plan the right roadmap for your
              future.
            </p>
            <div className="hero-actions">
              <Link className="button" to="/assessment">
                Start Career Assessment
              </Link>
              <Link className="button ghost" to="/categories">
                Browse Categories
              </Link>
            </div>
          </div>
          <div className="hero-panel">
            <h3>Search careers</h3>
            <p>Type a career title to get instant suggestions.</p>
            <div className="search-row">
              <input
                type="search"
                placeholder="Search for Software Developer, Doctor, Pilot..."
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                aria-label="Search careers"
              />
              <button type="button" className="button small">
                Search
              </button>
            </div>
            {searchTerm ? (
              <div className="search-results">
                {searchResults.length ? (
                  searchResults.map((career) => (
                    <Link key={career.id} className="mini-card" to={`/careers/${career.id}`}>
                      <span>{career.title}</span>
                      <span className="tag">{career.salary}</span>
                    </Link>
                  ))
                ) : (
                  <p className="muted">No matches found. Try another keyword.</p>
                )}
              </div>
            ) : (
              <div className="search-results">
                {trendingList.slice(0, 3).map((career) => (
                  <Link key={career.id} className="mini-card" to={`/careers/${career.id}`}>
                    <span>{career.title}</span>
                    <span className="tag">{career.demand}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Career categories"
            subtitle="Pick a field to explore curated career options."
          />
          <div className="grid cards">
            {categories.map((category) => (
              <Link key={category.id} className="card" to={`/categories/${category.id}`}>
                <div className="card-header">
                  <span className="emoji">{category.emoji}</span>
                  <h3>{category.name}</h3>
                </div>
                <p>{category.description}</p>
                <span className="link-arrow">Explore careers →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader title="Popular careers" subtitle="Trending opportunities with strong demand." />
          <div className="grid cards">
            {trendingList.map((career) => (
              <Link key={career.id} className="card" to={`/careers/${career.id}`}>
                <div className="card-header">
                  <h3>{career.title}</h3>
                  <span className="tag">{career.salary}</span>
                </div>
                <p>{career.overview}</p>
                <div className="tag-row">
                  {career.tags.map((tag) => (
                    <span key={tag} className="tag soft">
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <div>
            <SectionHeader
              title="Career assessment test"
              subtitle="Answer personality, skill, and interest questions for tailored suggestions."
            />
            <ul className="checklist">
              <li>Personality questions for work-style mapping</li>
              <li>Skill questions to identify strengths</li>
              <li>Interest questions to match motivation</li>
              <li>Instant recommended careers</li>
            </ul>
            <Link className="button" to="/assessment">
              Take the assessment
            </Link>
          </div>
          <div className="panel">
            <h3>Assessment highlights</h3>
            <div className="stat-grid">
              <div>
                <p className="stat-title">Logical reasoning</p>
                <p className="stat-value">10 questions</p>
              </div>
              <div>
                <p className="stat-title">Creative thinking</p>
                <p className="stat-value">8 questions</p>
              </div>
              <div>
                <p className="stat-title">Analytical skills</p>
                <p className="stat-value">12 questions</p>
              </div>
            </div>
            <p className="muted">Complete in under 15 minutes and get actionable results.</p>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <SectionHeader title="Success stories" subtitle="Students who navigated their path with confidence." />
          <div className="grid cards">
            {successStories.map((story) => (
              <div key={story.name} className="card">
                <h3>{story.name}</h3>
                <p>{story.outcome}</p>
                <p className="muted">{story.highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader title="Testimonials" subtitle="What learners are saying." />
          <div className="grid testimonials">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="testimonial">
                <p>“{testimonial.quote}”</p>
                <span>{testimonial.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

function CategoriesPage() {
  return (
    <div className="page">
      <PageHeader
        title="Career categories"
        subtitle="Explore fields like technology, medical, business, law, and more."
      />
      <div className="container grid cards">
        {categories.map((category) => (
          <Link key={category.id} className="card" to={`/categories/${category.id}`}>
            <div className="card-header">
              <span className="emoji">{category.emoji}</span>
              <h3>{category.name}</h3>
            </div>
            <p>{category.description}</p>
            <div className="tag-row">
              {category.careerIds.slice(0, 3).map((id) => {
                const career = careerMap.get(id)
                return (
                  <span key={id} className="tag soft">
                    {career?.title ?? id}
                  </span>
                )
              })}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function CategoryDetailPage() {
  const { categoryId } = useParams()
  const category = categoryMap.get(categoryId)

  if (!category) {
    return <NotFoundPage />
  }

  const categoryCareers = category.careerIds
    .map((id) => careerMap.get(id))
    .filter(Boolean)

  return (
    <div className="page">
      <PageHeader title={`${category.emoji} ${category.name}`} subtitle={category.description} />
      <div className="container grid cards">
        {categoryCareers.map((career) => (
          <Link key={career.id} className="card" to={`/careers/${career.id}`}>
            <div className="card-header">
              <h3>{career.title}</h3>
              <span className="tag">{career.salary}</span>
            </div>
            <p>{career.overview}</p>
            <span className="link-arrow">View details →</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

function CareerDetailPage() {
  const { careerId } = useParams()
  const career = careerMap.get(careerId)

  if (!career) {
    return <NotFoundPage />
  }

  return (
    <div className="page">
      <PageHeader title={career.title} subtitle={career.overview} />
      <div className="container detail-grid">
        <div className="detail-card">
          <h3>Career overview</h3>
          <p>{career.overview}</p>
        </div>
        <div className="detail-card">
          <h3>Skills required</h3>
          <ul>
            {career.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="detail-card">
          <h3>Education path</h3>
          <ul>
            {career.education.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="detail-card">
          <h3>Top colleges</h3>
          <ul>
            {career.colleges.map((college) => (
              <li key={college}>{college}</li>
            ))}
          </ul>
        </div>
        <div className="detail-card">
          <h3>Salary in India</h3>
          <p className="stat-value">{career.salary}</p>
          <p className="muted">Future demand: {career.demand}</p>
        </div>
        <div className="detail-card">
          <h3>Companies hiring</h3>
          <div className="tag-row">
            {career.companies.map((company) => (
              <span key={company} className="tag soft">
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="container roadmap-section">
        <SectionHeader title="Roadmap to become one" subtitle="Step-by-step path to enter this career." />
        <Timeline steps={career.roadmap} />
      </div>
    </div>
  )
}

function RoadmapsPage() {
  const aiCareer = careerMap.get('ai-engineer')

  return (
    <div className="page">
      <PageHeader
        title="Career roadmaps"
        subtitle="Follow guided steps to reach your dream role."
      />
      <div className="container">
        {aiCareer ? (
          <div className="panel roadmap-panel">
            <h3>AI Engineer roadmap</h3>
            <p className="muted">{aiCareer.overview}</p>
            <Timeline steps={aiCareer.roadmap} />
          </div>
        ) : (
          <p className="muted">Roadmap details will appear here.</p>
        )}
      </div>
    </div>
  )
}

function AssessmentPage() {
  return (
    <div className="page">
      <PageHeader
        title="Career assessment test"
        subtitle="Answer questions to get personalized career suggestions."
      />
      <div className="container two-column">
        <div className="panel">
          <h3>Test models</h3>
          <div className="stack">
            {assessmentModels.map((model) => (
              <div key={model.title} className="mini-card static">
                <strong>{model.title}</strong>
                <span className="muted">{model.description}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <h3>Sample questions</h3>
          <ol className="question-list">
            {assessmentQuestions.map((question) => (
              <li key={question.id}>
                <span className="tag soft">{question.type}</span>
                <p>{question.question}</p>
              </li>
            ))}
          </ol>
          <div className="result-card">
            <h4>Result preview</h4>
            <p className="muted">Recommended careers based on your answers:</p>
            <div className="tag-row">
              <span className="tag">AI Engineer</span>
              <span className="tag">Business Analyst</span>
              <span className="tag">Product Manager</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function CollegeFinderPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('all')
  const [feeFilter, setFeeFilter] = useState('all')
  const [rankingFilter, setRankingFilter] = useState('all')

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const matchesSearch = college.name.toLowerCase().includes(searchTerm.trim().toLowerCase())
      const matchesLocation = locationFilter === 'all' || college.location === locationFilter
      const matchesFee =
        feeFilter === 'all' ||
        (feeFilter === 'under-2' && college.fees < 2) ||
        (feeFilter === '2-5' && college.fees >= 2 && college.fees <= 5) ||
        (feeFilter === '5-plus' && college.fees > 5)
      const matchesRanking =
        rankingFilter === 'all' ||
        (rankingFilter === 'top-10' && college.ranking <= 10) ||
        (rankingFilter === 'top-25' && college.ranking <= 25) ||
        (rankingFilter === '25-plus' && college.ranking > 25)

      return matchesSearch && matchesLocation && matchesFee && matchesRanking
    })
  }, [feeFilter, locationFilter, rankingFilter, searchTerm])

  const locations = ['all', ...new Set(colleges.map((college) => college.location))]

  return (
    <div className="page">
      <PageHeader
        title="College & course finder"
        subtitle="Filter by location, fees, and ranking to shortlist colleges."
      />
      <div className="container">
        <div className="filters">
          <input
            type="search"
            placeholder="Search colleges..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            aria-label="Search colleges"
          />
          <select
            value={locationFilter}
            onChange={(event) => setLocationFilter(event.target.value)}
            aria-label="Filter by location"
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location === 'all' ? 'All locations' : location}
              </option>
            ))}
          </select>
          <select
            value={feeFilter}
            onChange={(event) => setFeeFilter(event.target.value)}
            aria-label="Filter by fee range"
          >
            <option value="all">All fees</option>
            <option value="under-2">Under ₹2L</option>
            <option value="2-5">₹2L - ₹5L</option>
            <option value="5-plus">₹5L+</option>
          </select>
          <select
            value={rankingFilter}
            onChange={(event) => setRankingFilter(event.target.value)}
            aria-label="Filter by ranking"
          >
            <option value="all">All rankings</option>
            <option value="top-10">Top 10</option>
            <option value="top-25">Top 25</option>
            <option value="25-plus">25+</option>
          </select>
        </div>
        <div className="grid cards">
          {filteredColleges.length ? (
            filteredColleges.map((college) => (
              <div key={college.id} className="card">
                <div className="card-header">
                  <h3>{college.name}</h3>
                  <span className="tag">{college.category}</span>
                </div>
                <p className="muted">{college.location}</p>
                <div className="tag-row">
                  <span className="tag soft">Fees: ₹{college.fees}L</span>
                  <span className="tag soft">Ranking #{college.ranking}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="card empty-card">
              <h3>No matches</h3>
              <p>Try adjusting your filters to see more colleges.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function SkillLearningPage() {
  return (
    <div className="page">
      <PageHeader
        title="Skill learning"
        subtitle="Learn from top platforms and build in-demand skills."
      />
      <div className="container grid cards">
        {learningPlatforms.map((platform) => (
          <div key={platform.name} className="card">
            <h3>{platform.name}</h3>
            <p>{platform.description}</p>
            <div className="tag-row">
              {platform.tags.map((tag) => (
                <span key={tag} className="tag soft">
                  {tag}
                </span>
              ))}
            </div>
            <div className="stack">
              {platform.courses.map((course) => (
                <div key={course} className="mini-card static">
                  {course}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function InsightsPage() {
  return (
    <div className="page">
      <PageHeader
        title="Job market insights"
        subtitle="Track salary trends, demand, and future-ready careers."
      />
      <div className="container grid cards">
        {jobInsights.map((insight) => (
          <div key={insight.role} className="card">
            <div className="card-header">
              <h3>{insight.role}</h3>
              <span className="tag">{insight.demand}</span>
            </div>
            <p className="muted">Average salary: {insight.salary}</p>
            <div className="chart">
              <div className="chart-bar">
                <span style={{ width: `${insight.growth}%` }} />
              </div>
              <p className="muted">Demand growth: {insight.growth}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function DashboardPage() {
  return (
    <div className="page">
      <PageHeader
        title="Student dashboard"
        subtitle="Track your progress, saved careers, and recommendations."
      />
      <div className="container dashboard-grid">
        <div className="panel">
          <h3>Saved careers</h3>
          <ul className="stack">
            {dashboardData.savedCareers.map((career) => (
              <li key={career} className="mini-card static">
                {career}
              </li>
            ))}
          </ul>
        </div>
        <div className="panel">
          <h3>Test results</h3>
          {dashboardData.testResults.map((result) => (
            <div key={result.title} className="result-card">
              <h4>{result.title}</h4>
              <p className="stat-value">{result.score}</p>
              <p className="muted">{result.recommendation}</p>
            </div>
          ))}
        </div>
        <div className="panel">
          <h3>Learning progress</h3>
          <div className="stack">
            {dashboardData.learningProgress.map((progress) => (
              <div key={progress.title} className="progress-row">
                <div>
                  <p>{progress.title}</p>
                  <p className="muted">{progress.progress}% complete</p>
                </div>
                <div className="progress-bar">
                  <span style={{ width: `${progress.progress}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="panel">
          <h3>Recommended careers</h3>
          <div className="tag-row">
            {dashboardData.recommendations.map((career) => (
              <span key={career} className="tag">
                {career}
              </span>
            ))}
          </div>
          <Link className="button ghost" to="/assessment">
            Update recommendations
          </Link>
        </div>
      </div>
    </div>
  )
}

function NotFoundPage() {
  return (
    <div className="page">
      <PageHeader title="Page not found" subtitle="The page you are looking for does not exist." />
      <div className="container">
        <Link className="button" to="/">
          Back to home
        </Link>
      </div>
    </div>
  )
}

function PageHeader({ title, subtitle }) {
  return (
    <div className="page-header">
      <div className="container">
        <h2>{title}</h2>
        <p className="muted">{subtitle}</p>
      </div>
    </div>
  )
}

function SectionHeader({ title, subtitle }) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <p className="muted">{subtitle}</p>
    </div>
  )
}

function Timeline({ steps }) {
  return (
    <ol className="timeline">
      {steps.map((step, index) => (
        <li key={step}>
          <span className="timeline-marker">{index + 1}</span>
          <p>{step}</p>
        </li>
      ))}
    </ol>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div>
          <h3>Career Compass</h3>
          <p className="muted">
            A complete frontend-only career guidance platform for students.
          </p>
        </div>
        <div className="footer-links">
          <Link to="/assessment">Career test</Link>
          <Link to="/colleges">College finder</Link>
          <Link to="/skills">Skill learning</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </footer>
  )
}

export default App
