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
          <h2>Paper Summary Assignment</h2>
          <h5>Due: October 29, at 11:59PM ET.</h5>

          <p>In the paper summary assignment, you will select and summarize four papers of your choosing from the required reading list. In summarizing each paper, contextualize the paper within the research landscape, discuss the motivation and problem definition, the key approach of the paper - including the features that make it especially unique from other contemporary literature, and results/implications of the work for the medical - and medical machine learning - community.</p>

          <p>Each summary should be roughly half a page using the provided LaTeX template. Some papers leave more to unpack and discuss than others, you’re welcome to have some summaries which are longer, and some which are shorter - however, your entire submission is to be at least two but not greater than three pages using the <a href="https://www.overleaf.com/latex/templates/neurips-2021/bfjnthbqvhgs" target="_blank">LaTeX template</a> (you do not need to include the title or authorship segments - since your name is included with your submission - if you would prefer to omit them to save on space).</p>

          <p>If you’d like inspiration of how to summarize papers effectively, consider reading the following blog posts:</p>
          <ul>
            <li><a href="https://www.inference.vc/invariant-risk-minimization/" target="_blank">Invariant Risk Minimization: An Information Theoretic View (Ferenc Huszár)</a></li>
            <li><a href="https://lilianweng.github.io/lil-log/2021/07/11/diffusion-models.html" target="_blank">What are Diffusion Models? (Lilian Weng)</a></li>
          </ul>

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
                <td>Demonstrates sophisticated knowledge of the context behind each paper.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Clearly discusses the motivation behind each paper, and the way in which the paper defined the problem..</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Shows sophisticated knowledge of the nuances of the approach behind each paper’s technique.</td>
                <td>30%</td>
              </tr>
              <tr>
                <td>Discussion of research implications - including a clear-eyed discussion of where each paper’s drawbacks may limit the research implications or applications of the work.</td>
                <td>20%</td>
              </tr>
              <tr>
                <td>Remains within the page limit.</td>
                <td>10%</td>
              </tr>
            </tbody>
          </Table>
        </Page>
    </div>
  )
}

