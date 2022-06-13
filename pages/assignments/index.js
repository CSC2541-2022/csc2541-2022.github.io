import Head from 'next/head'
import Page from '../../components/page'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2021)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
        <h2>Assignments</h2>

        <p>This offering of CSC2541 will contain the following assignments (shown below with their grading breakdowns).</p>

        <h4><a href="assignments/papersummary">Paper Summary Assignment (15%)</a></h4>
        <h6>Due: October 29, at 11:59PM ET.</h6>
        <p>In this assignment, you will summarize four papers from the required reading for this course.</p>

        <h4><a href="assignments/paperpresentation">Paper Presentation Assignment (15%)</a></h4>
        <h6>Due: Varies based on presentation slot.</h6>
        <p>In this assignment, you will work with a partner to present a 25-minute deep dive into one of the papers from the required reading for this course.</p>

        <h4>Course Final Project</h4>
        <p>In addition to the guidelines for each of the components of your final project, we've also put together a collection of <a href="/projectresources">project resources</a> which you may find helpful.</p>
        <h5><a href="assignments/projectproposal">Project Proposal (10%)</a></h5>
        <h6>Due: October 1, 2021, at 11:59PM ET.</h6>
        <p>In your proposal, you will propose a novel contribution to the medical machine learning space to serve as your course final project.</p>
        <h5><a href="assignments/projectpresentation">Project Presentation (15%)</a></h5>
        <h6>Due: Varies based on presentation slot.</h6>
        <p>In this assignment, you will prepare a brief presentation of your project, experiments, and results, to share with your peers.</p>
        <h5><a href="assignments/projectreport">Project Report (40%)</a></h5>
        <h6>Due: December 8, at 11:59PM ET.</h6>
        <p>In this assignment, you will prepare a conference-abstract-style write-up of the work that you did, and critically evaluate your contribution within the context of the medical machine learning literature.</p>

        </Page>
    </div>
  )
}
