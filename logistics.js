import Head from 'next/head'
import Page from '../components/page'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>CSC2541 (Fall 2021)</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Page>
          <h2>Logistics</h2>
          <h5>Prerequisites</h5>
          <p>The course prerequisites include a working knowledge of linear algebra and probability theory, and mastery of the material in Introduction to Machine Learning (CSC2515).</p>
          <h5>Grading</h5>
          <p>Your grade in this course will be composed of the following evaluations:</p>
          <ul>
            <li><b>5%</b>: Participation (attendance and engagement)</li>
            <li><b>15%</b>: Paper Summary Assignment (completed individually)</li>
            <li><b>15%</b>: Paper Presentations (completed in pairs)</li>
            <li><b>10%</b>: Project Proposal (completed in project groups)</li>
            <li><b>15%</b>: Project Presentation (completed in project groups)</li>
            <li><b>40%</b>: Project Final Report (completed in project groups)</li>
          </ul>
          <h5>Late Policy</h5>
          <p>All students in this class are granted two 24-hour "late days" which they may use on any written submission assignments throughout the quarter (with the exception of the Project Final Report). You do not need to inform the course staff that you are using a late day for a particular assignment: we will automatically deduct from your late day allocation if you make a submission after the deadline. Once you have used both your late days, we will apply a penalty of 30% per day for each subsequent late submission. Any assignment received more than four calendar days past its due date will not be graded.</p>
          <p>If a component of a group submission is late, <i>all members of the group</i> will be deducted the appropriate number of late days (or penalized with the 30% per day discount factor, depending on how late the submission is and how many late days each group member has remaining).</p>
          Examples:
          <ul>
            <li>If you submit your Paper Summary Assignment two days past the deadline, and your Project Proposal one day past the deadline, you would not be penalized on your Paper Summary submission; however, your Project Proposal score would be discounted by 30% since it was submitted after your late days had been exhausted.</li>
            <li>Assume that you are working in a project group of two. You submit your Paper Summary Assignment two days late, while your partner submitted their Paper Summary on time. You and your project partner then submit your Project Proposal one day past the deadline. Your grade on the Project Proposal Report would receive a 30% discount (since you had previously exhausted all your late days), while your partner's grade would not be discounted (since they still had remaining late days).</li>
          </ul>
          <h5>Accessibility</h5>
          <p>We are committed to making our classroom an accessible environment. We are currently seeking a volunteer who can scribe notes during lectures and presentations (to be posted publicly after each session) in exchange for 5% bonus credit in the course. If you are interested, please <a href="mailto:coopermj@cs.toronto.edu">email Michael</a>.</p>
          <p>If you have any other accessibility requirements or concerns, please also <a href="mailto:coopermj@cs.toronto.edu">email Michael</a>.</p>
          <br></br>
          <h2>FAQ</h2>
          <h5>Will this class provide me with compute for my final project?</h5>
          <p>As a graduate-level course, we are assuming that most students in this class have a laboratory affiliation which grants them access to computing resources which they may use for the purposes of this class. If you do not have access to compute via a laboratory affiliation, please consider using <a href="https://research.google.com/colaboratory/">Google Colab</a> to run your experiments, or contact the teaching staff <b>as early as possible</b> and we will do our best to provide some for you.</p>
        </Page>
    </div>
  )
}
