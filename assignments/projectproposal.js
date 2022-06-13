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
          <h2>Project Proposal</h2>
          <h5>Due: October 1, 2021, at 11:59PM ET.</h5>
          <h6>Adapted from and credit to <a href="http://cs231n.stanford.edu/project.html" target="_blank">CS 231N’s project proposal guidelines</a>.</h6>

          <p>The project proposal will consist of a 250-400 word submission, detailing the following about your project plan:</p>
          <ul>
          <li>Who are the members of your project group?</li>
          <li>What is the problem that you will be investigating? Why is it interesting?</li>
          <li>What related works will you examine to provide context and background?</li>
          <li>What data will you use?</li>
          <li>What method or algorithm are you proposing? If there are existing implementations, will you use them and how? How do you plan to improve or modify such implementations? You don't have to have an exact answer at this point, but you should have a general sense of how you will approach the problem you are working on.</li>
          <li>How will you evaluate your results? Qualitatively, what kind of results do you expect (e.g. plots or figures)? Quantitatively, what kind of analysis will you use to evaluate and/or compare your results (e.g. what performance metrics or statistical tests)?</li>
          <li>Where do you anticipate needing help or support - if applicable - from the CSC2541 course staff?</li>
          </ul>
          <p>Please use the <a href="https://www.overleaf.com/latex/templates/neurips-2021/bfjnthbqvhgs" target="_blank">LaTeX template</a> for formatting when writing up your proposal.</p>

        </Page>
    </div>
  )
}

