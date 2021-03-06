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
                <h2>Schedule</h2>
                {/*<p>In the below schedule, blue PDF icons ({<FontAwesomeIcon icon={faFilePdf} size="1x" id="mandatoryNoHover"/>}) represent required readings for the week, whereas yellow icons ({<FontAwesomeIcon icon={faFilePdf} size="1x" id="optionalNoHover"/>}) represent optional readings. Highlighted cells indicate that a course deliverable is due on that date.</p>*/}
                {/*<p>Lecture slides can be found linked below; lecture recordings can be found on Quercus.</p>*/}
                <Table id="tabular">
                    <thead>
                    <tr>
                        <th></th>
                        <th></th>
                        <th></th>
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
                            <b>Introduction and Motivation </b>
                            <br/>
                            We start the course by looking at applications where statistical association cannot
                            fully capture the underlying data-generating processes. We then introduce randomized controlled
                            trials and observational studies to understand the difference between association and causation.
                            We will use the potential outcome framework to quantify the causal effects in a simple binary case.
                        </td>
                        <td> TBD </td>
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
                            <b>Causal Models</b>
                            <br/>
                            Conditional distributions are not enough to model and estimate causal effects. In this lecture,
                            we'll see how the notion of interventions is a general way to quantify causal effects.
                            In particular, we'll use causal graphs and structural causal models (SCMs) to formally define interventional distributions.
                        </td>
                        <td> TBD </td>
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
                            <b>More Advance Estimation Methods </b>
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
