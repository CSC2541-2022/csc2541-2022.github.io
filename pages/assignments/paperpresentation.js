import Head from 'next/head'
import Page from '../../components/page'
import { Table } from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2022)</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
        <Page>

          <h2>Paper Presentation</h2>
          <h5>Due: Varies based on presentation slot.</h5>

          <p>Through your paper presentation, you will form a group of 3 to present a 25-minute deep dive into one of the papers from a set of suggested papers.</p>

          <p>We will send you a Sign-Up Google Sheet, including the list of papers and presentation dates. Sign ups for the paper presentation will be first come, first serve.</p>

          <p>When preparing your presentation, keep your intended audience in mind: you may assume that your fellow students have given the paper a light read, but do not assume that they have the same intimate familiarity with the work that you do. Additionally, it would be fruitful to give a brief overview and background of the broad class of machine learning techniques to which the paper belongs, if you anticipate your classmates may not be familiar with the concept (a good rule of thumb for this is, “in preparing my presentation, did I need to research additional background on this to feel comfortable with the paper?”). </p>

          <p>For a 25 minute presentation you should aim to have no more than 20 slides.</p>

          <p>Here are some pointers to keep in mind when presenting:</p>
          <ul>
            <li>What motivated the work? Who should care about it and what potential applications do you foresee this work being useful for?</li>
            <li>What problem is the paper trying to solve?</li>
            <li>What is the approach used in the paper? How is it different from what has been done before?</li>
            <li>Describe the core technical or practical contributions of the paper - explain why the paper is new to the literature and what it allows practitioners to do which could not be done before.</li>
            <li>What are the limitations of the work? What would you have done to improve upon the work?</li>
          </ul>

          <p>You'll notice below that we've included a requirement wherein you present a rehearsal walkthrough of your talk to the TA in the week preceding your presentation date. More information on signing up for these sessions will be released as a course announcement closer to the paper presentation dates.</p>

          <h5>Rubric</h5>

            <Table bordered id="tabular">
            <thead>
              <tr>
                <th>Criterion</th>
                <th>Weight</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Clearly motivates and defines the problem.</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>If applicable, presents requisite background on the techniques implemented in the paper.</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Clearly explains at least one the main ideas from the paper.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Creates a compelling new visual representation of the main idea.</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Explains the experiments and/or results. Discussion of what the machine learning community stands to gain from this work.</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Provide a conclusion which is clear-eyed about both the strengths and limitations of the paper.</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Finish under time (25 minutes).</td>
                <td>5%</td>
              </tr>
              <tr>
                <td>Complete a rehearsal presentation in advance for feedback from a TA.</td>
                <td>10%</td>
              </tr>
            </tbody>
          </Table>
        </Page>
    </div>
  )
}

