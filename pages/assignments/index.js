import Head from 'next/head'
import Page from '../../components/page'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2022)</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Page>
        <h2>Assignments</h2>

        <p>This offering of CSC2541 will contain the following assignments (shown below with their grading breakdowns).</p>

        <h4>Problem Set (15%)</h4>
        <h6>Release: October 3 / Due: October 17, at 11:59PM ET</h6>
        <p>In this assignment, you will have a chance to practice the content from the lecture. It is individual work.</p>
        <h4><a href="assignments/papersummary">Paper Summary Assignment (15%)</a></h4>
        <h6>Due: October 31, at 11:59PM ET.</h6>
        <p>In this assignment, you will summarize four papers from a set of suggested papers.</p>

        <h4><a href="assignments/paperpresentation">Paper Presentation Assignment (15%)</a></h4>
        <h6>Due: Varies based on presentation slot.</h6>
          <p>In this assignment, you will form a group of <span style={{fontWeight: 'bold'}}> 3 </span> to present a 25-minute deep dive into one of the papers from a list.</p>

        <h4>Course Final Project</h4>
        <p>In addition to the guidelines for each component of your final project, we've also put together a collection of <a href={"/projectresources"}>project ideas</a> that you may find helpful.</p>
        <h5><a href="assignments/projectproposal">Project Proposal (5%)</a></h5>
        <h6>Due: October 10, at 11:59PM ET.</h6>
        <p>In your proposal, you will choose an original research question related to the course content to serve as your course final project.</p>
        <h5><a href="assignments/projectpresentation">Project Presentation (15%)</a></h5>
        <h6>Due: Varies based on presentation slot.</h6>
        <p>You will prepare a brief presentation of your project, experiments, and results to share with your peers.</p>
        <h5><a href="assignments/projectreport">Project Report (35%)</a></h5>
        <h6>Due: December 9, at 11:59PM ET.</h6>
        <p>You will prepare a conference-abstract-style write-up of your work and critically evaluate your contribution within the context of the causality and machine learning literature.</p>

        </Page>
    </div>
  )
}
