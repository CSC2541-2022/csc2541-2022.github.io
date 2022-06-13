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

          <h2>Project Presentation</h2>
          <h5>Due: Varies based on presentation slot.</h5>

          <p>The final project presentation is your chance to showcase the hard work that you’ve done in your course projects this quarter. These presentations are to be completed in the same manner as the partnered paper presentations, except that these will be done in your project groups of up to four students (while your paper presentations were done in groups of two). It is not expected that all group members have a speaking role in the presentation, but it is expected that all team members contribute to the presentation component of the project.</p>

          <p>The same pointers and guidelines apply to the project presentation as applied to the paper presentations:</p>
          <ul>
          <li>What motivated the work? Who should care about it and what potential clinical applications do you foresee this work being useful for?</li>
          <li>What problem is your paper trying to solve?</li>
          <li>What is the approach you are taking? How is it different from what has been done before?</li>
          <li>Describe the core technical or clinical contributions of your project - explain why your project is novel to the literature and what it allows practitioners to do which could not be done before.</li>
          <li>What are the limitations of your work? What would you have done to improve upon your work?</li>
          </ul>
          <p>If you don’t yet have results to show on your project because you're presenting early, simply explain what you’re planning to do and your anticipated results.</p>

          <p>As in the paper presentation, you should also create a novel visual to clearly and succinctly showcase your approach to the problem: this must be a novel visual that you have created for the purpose of your paper and presentation and not something you pulled from a related paper. The only exception to this requirement would be for theory papers, in which case a singular lemma or proof may stand in for a novel visual.</p>

          <p>As with the paper presentation, we've included a requirement wherein you present a rehearsal walkthrough of your presentation to a TA in the week preceding your presentation date. More information on signing up for these sessions will be released as a course announcement closer to the project presentation dates.</p>

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
                <td>20%</td>
              </tr>
              <tr>
                <td>Briefly mentions, discusses related work.</td>
                <td>10%</td>
              </tr>
              <tr>
                <td>Clearly explains at least one of the main ideas of your project/paper.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Creates a compelling visual representation of the main idea.</td>
                <td>15%</td>
              </tr>
              <tr>
                <td>Explains planned experiments and/or results.
                <ul>
                  <li>Clearly describes the planned or completed experiments (5%).</li>
                  <li>Reports minimum viable experimental results and visualizations (10%). We understand, at this point, that the results may not be final, but we expect you to have started your experiments and be able to present some corresponding visual.</li> 
                  <li>Explains the anticipated results of the experiments which will be completed between the presentation and submission of the final report. (5%).</li>
                  </ul>
                  </td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Finishes under time (25 minutes).</td>
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

