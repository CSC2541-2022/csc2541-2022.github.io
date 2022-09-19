import Head from 'next/head'
import Page from '../components/page'
import {Table} from 'react-bootstrap'
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {leftTooltip} from '../helpers'
import {Col} from 'react-bootstrap'

function makeLink(
    type,
    dest,
    text
) {
    if (type === "mandatory") {
        return (
            <Col className='d-flex justify-content-center pl-3 pr-3' key={dest}>
                {leftTooltip(<a href={dest} target="_blank" key={dest} id="mandatory">
                    <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        key={dest}/>
                </a>, text)}
            </Col>
        );
    }
    if (type === "optional") {
        return (
            <Col className='d-flex justify-content-center pl-3 pr-3' key={dest}>
                {leftTooltip(<a href={dest} target="_blank" key={dest} id="optional">
                    <FontAwesomeIcon
                        icon={faFilePdf}
                        size="lg"
                        key={dest}/>
                </a>, text)}
            </Col>
        );
    }
}

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>CSC2541 (Fall 2022)</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Page>
                <h5>Textbooks</h5>
                The followings are useful textbooks for the course.<br/>
                <ul>
                <li>(C) Judea Pearl (2009) <a href={"http://bayes.cs.ucla.edu/BOOK-2K/"}> Causality</a> </li>
                <li>(CIWI) Miguel A. Hernán, James M. Robins (2020) <a href={"https://cdn1.sph.harvard.edu/wp-content/uploads/sites/1268/2021/03/ciwhatif_hernanrobins_30mar21.pdf"}> Causal Inference: What If</a> </li>
                <li>(ECI) Jonas Peters, Dominik Janzing, Bernhard Schlkopf (2017) <a href={"https://mitp-content-server.mit.edu/books/content/sectbyfn?collid=books_pres_0&id=11283&fn=11283.pdf"}>Elements of Causal Inference: Foundations and Learning Algorithms</a> </li>
                <li>(ICI) Brady Neal (2020) <a href={"https://www.bradyneal.com/Introduction_to_Causal_Inference-Dec17_2020-Neal.pdf"}>Introduction to Causal Inference</a> </li>
                <li>(PGM) Daphne Koller and Nir Friedman (2009) <a href={"https://mitpress.mit.edu/9780262013192/probabilistic-graphical-models/"}> Probabilistic Graphical Models - Principles and Techniques</a> </li>
          </ul>
            <h5>Tentative Schedule</h5>
                {/*<p>In the below schedule, blue PDF icons ({<FontAwesomeIcon icon={faFilePdf} size="1x" id="mandatoryNoHover"/>}) represent required readings for the week, whereas yellow icons ({<FontAwesomeIcon icon={faFilePdf} size="1x" id="optionalNoHover"/>}) represent optional readings. Highlighted cells indicate that a course deliverable is due on that date.</p>*/}
                {/*<p>Lecture slides can be found linked below; lecture recordings can be found on Quercus.</p>*/}
                <Table id="tabular">
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th style={{ minWidth: 150, width: 200 }}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* WEEK 1 */}
                    <tr>
                        <td><b>Date</b></td>
                        <td><b>Topic</b></td>
                        <td><b>Readings</b></td>
                    </tr>
                    <tr>
                        <td>09/12/2022</td>
                        <td>
                           <a href={"/lectures/CSC2541_lecture1_intro.pdf"}><b>Introduction and Motivation </b></a>
                            <br/>
                            We start the course by looking at applications where statistical association cannot
                            fully capture the underlying data-generating processes. We then introduce randomized controlled
                            trials and observational studies to understand the difference between association and causation.
                            We will use the potential outcome framework to quantify the causal effects in a simple binary case.
                        </td>
                        <td> CIWI 1, 2.1-2.2, 3.1-3.5 <br/>
                             ICI 1 & 2 <br/>
                             PGM 3
                            {/*<br/>*/}
                            {/*optional: {makeLink(*/}
                            {/*    "optional",*/}
                            {/*    "https://arxiv.org/pdf/1711.02582.pdf",*/}
                            {/*    "Overlap in observational studies with high-dimensional covariates")}*/}
                        </td>
                        {/*<td rowSpan="1">*/}
                        {/*  {makeLink("mandatory", */}
                        {/*  "https://www.healthaffairs.org/doi/full/10.1377/hlthaff.2014.0041", */}
                        {/*  "Big Data In Health Care: Using Analytics... (Bates et al.)")}*/}
                        {/*  <br></br>*/}
                        {/*  {makeLink("mandatory", */}
                        {/*  "https://arxiv.org/pdf/1806.00388.pdf", */}
                        {/*  "A Review of Challenges and Opportunities... (Ghassemi et al.)")}*/}
                        {/*  <br></br>*/}
                        {/*  {makeLink("optional", */}
                        {/*  "https://discovery.ucl.ac.uk/id/eprint/1598/1/A22.pdf", */}
                        {/*  "Electronic Health Records (Kalra and Ingram)")}*/}
                        {/*</td>*/}
                    </tr>

                    <tr>
                        <td>09/19/2022</td>
                        <td>
                            <a href={"/lectures/CSC2541_lecture2_causal_models.pdf"}> <b> Causal Models</b> </a>
                            <br/>
                            Conditional distributions are not enough to model and estimate causal effects. In this lecture,
                            we'll see how the notion of interventions is a general way to quantify causal effects.
                            In particular, we'll use causal graphs and structural causal models (SCMs) to formally define interventional distributions.
                        </td>
                        <td>
                        ECI 2, 6.1-6.3<br/>
                            ICI 3, 4.1-4.3 <br/>
                            C 1.2-1.4
                        </td>
                    </tr>

                    <tr>
                        <td>09/26/2022</td>
                        <td>
                            <b>Identification </b>
                            <br/>
                            In order to estimate causal effects from data,
                            we first need to convert them to a function of data (observational distribution).
                            This process is known as identification.
                            We use causal graphs to study sufficient conditions for identification, such as
                            Back-door and Front-door criteria. We then introduce <i>do</i>-calculus as a complete non-parametric identification algorithm.
                        </td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>10/03/2022</td>
                        <td>
                            <b>Estimation </b>
                            <br/>
                            Once we have identified a causal query, we still need to build efficient estimators to estimate it
                            from finite data. This lecture focuses on some well-known estimators in the literature,
                            including parametric g-formula, propensity scores, inverse propensity weighting, and matching.
                        </td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>10/10/2022</td>
                        <td>No Class - Thanksgiving </td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>10/17/2022</td>
                        <td>Student Paper Presentation </td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>10/24/2022</td>
                        <td><b>Instrumental Variables </b> + Student Paper Presentation

                        </td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>10/31/2022</td>
                        <td>
                            <b>Causal Representation Learning </b> +
                            Student Paper Presentation
                        </td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>11/07/2022</td>
                        <td>No Class - Reading Week</td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>11/14/2022</td>
                        <td>
                            <b>Invariant Learning </b>
                            +
                            Student Paper Presentation
                        </td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>11/21/2022</td>
                        <td>
                            <b>More Advanced Estimation Methods </b>
                            +
                            Student Project Presentation
                        </td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>11/28/2022</td>
                        <td>Student Project Presentation</td>
                        <td> TBD </td>
                    </tr>

                    <tr>
                        <td>12/05/2022</td>
                        <td>Student Project Presentation</td>
                        <td> TBD </td>
                    </tr>
                    </tbody>
                </Table>
            </Page>
        </div>
    )
}
