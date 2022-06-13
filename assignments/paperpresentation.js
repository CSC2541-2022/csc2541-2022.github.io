import Head from 'next/head'
import Page from '../../components/page'
import { Table } from 'react-bootstrap'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2021)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>

          <h2>Paper Presentation</h2>
          <h5>Due: Varies based on presentation slot.</h5>

          <p>Through your paper presentation, you will work with a partner to present a deep dive into one of the assigned reading papers for the class.</p>

          <p>To ensure that the presented papers are aligned with each week’s lecture, we’ve pre-filled papers from the required reading list, as well as presentation dates, in the Sign-Up Google Sheet (link to be provided via course announcement). To sign up to present a paper on a given date, write your name - and your partner’s name - in the corresponding row for that paper and date. Please sign up on the sheet in pairs, once you and your partner have agreed upon the paper and date you wish to present. Sign ups for the paper presentation will be first come, first serve.</p>

          <p>When preparing your presentation, keep your intended audience in mind: you may assume that your fellow students have given the paper a light read, but do not assume that they have the same intimate familiarity with the work that you do. Additionally, it would be fruitful to give a brief overview and background of the broad class of machine learning techniques to which the paper belongs, if you anticipate your classmates may not be familiar with the concept (a good rule of thumb for this is, “in preparing my presentation, did I need to research additional background on this to feel comfortable with the paper?”). For example, graph neural networks are a prominent feature of the machine learning research landscape, but are not typically covered in the intro machine learning courses which are a prerequisite for this class. Therefore, if you are presenting a graph neural network paper, you may want to begin your presentation by briefly walking students through a description of how a basic GNN works in a tutorial style, before discussing the specific GNN implementation and results presented in the paper.</p>

          <p>For a 25 minute presentation you should aim to have no more than 20 slides.</p>

          <p>Here are some pointers to keep in mind when presenting:</p>
          <ul>
            <li>What motivated the work? Who should care about it and what potential clinical applications do you foresee this work being useful for?</li>
            <li>What problem is the paper trying to solve?</li>
            <li>What is the approach used in the paper? How is it different from what has been done before?</li>
            <li>Describe the core technical or clinical contributions of the paper - explain why the paper is new to the literature and what it allows practitioners to do which could not be done before.</li>
            <li>What are the limitations of the work? What would you have done to improve upon the work?</li>
          </ul>

          <p>You'll notice below that we've included a requirement wherein you present a rehearsal walkthrough of your talk to a TA in the week preceding your presentation date. More information on signing up for these sessions will be released as a course announcement closer to the paper presentation dates.</p>

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
                <td>Explains the experiments and/or results. Discussion of what the medical machine learning community stands to gain from this work.</td>
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

