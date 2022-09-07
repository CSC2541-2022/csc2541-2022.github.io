import Head from 'next/head'
import Page from '../components/page'
import {Table} from "react-bootstrap";

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>CSC2541 (Fall 2022)</title>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Page>
                <h2>Project Ideas</h2>
                <p>Below, we’ve suggested some project ideas and resources which we hope you will find helpful for your
                    final projects.
                    This list contains only a small subset of potential directions to start brainstorming ideas in your
                    groups.
                    You are allowed to choose any original research question that is related to the course content.
                    We will continually update this page throughout the semester.</p>
                <Table className="table table-bordered">
                    <thead>
                    <tr style={{justifyContent: 'center', alignItems: 'center'}}>
                        <th>Topic</th>
                        <th>Potential questions</th>
                        <th style={{ minWidth: 150, width: 360 }}> Some resources (papers, benchmarks)</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td> Causal structure discovery</td>
                        <td>
                            <li> How to reconstruct the causal structure of a data generating process using observational and interventional data? </li> <br/>
                            <li> Implement a benchmark to compare existing causal discovery algorithms (constraint-based, score-based, etc.)
                                on various synthetic (linear/non-linear, Gaussian noise, hidden confounders, etc.) and real-world datasets with known causal graphs.</li> <br/>
                            <li> How to extend existing causal discovery algorithms to heterogeneous populations (i.e., having sub-populations with different causal structures) or time-series settings?</li> <br/>
                            <li> How to extract causal graphs from language models? </li>
                        </td>
                        <td>
                            Papers: <a href={"https://arxiv.org/pdf/1910.01075.pdf"}>link1, </a>
                                    <a href={"https://arxiv.org/pdf/2106.03480.pdf"}>link2, </a>
                                    <a href={"https://dl.acm.org/doi/pdf/10.1145/3527154"}>link3</a>
                            <br/><br/>
                            Datasets/Benchmarks: <br/>
                            - <a href={"https://webdav.tuebingen.mpg.de/cause-effect/"}>Database with cause-effect pair</a> <br/>
                            - <a href={"https://www.science.org/doi/10.1126/science.1105809"}>Sachs proteins</a> <br/>
                            - <a href={"https://adni.loni.usc.edu/"}>ADNI dataset</a> with <a href={"https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7031278/"}>known graph</a> <br/>
                            - Some useful packages:
                                    <a href={"https://github.com/quantumblacklabs/causalnex"}>link1, </a>
                                    <a href={"https://github.com/cmu-phil/causal-learn"}>link2, </a>
                                    <a href={"https://github.com/py-why/dowhy"}>link3, </a>
                                    <a href={"https://github.com/huawei-noah/trustworthyAI"}>link4</a>
                        </td>
                    </tr>
                    <tr>
                        <td> Subgroup detection in heterogeneous populations</td>
                        <td>
                            <li> How to identify sub-populations with similar treatment effects in a heterogeneous population using randomized clinical trials (RCTs), observational data,
                                both RCT and observational studies, and/or in dynamic longitudinal settings? </li>
                        </td>
                        <td>
                            <a href={"https://openreview.net/pdf?id=KB5onONJIAU"}>link1, </a>
                                    <a href={"https://openreview.net/pdf?id=83mo-LrHhR"}>link2, </a>
                                    <a href={"https://arxiv.org/pdf/2208.05844.pdf"}>link3</a>
                        </td>
                    </tr>

                    <tr>
                        <td>Causal estimation</td>
                        <td>
                            <li>Create a benchmark to compare existing methods for estimating average treatment effect (ATE) and/or conditional ATE on a set of observational datasets.
                                Evaluate each method in different settings, including continuous treatments,
                                high-dimensional covariates, small/infinite sample sizes, access to experimental data, and longitudinal datasets. </li> <br/>
                            <li> How to use causal inference for drug repurposing? </li>
                        </td>
                        <td>
                            Papers: <a href={"https://arxiv.org/abs/2002.02770"}>link1, </a>
                                    <a href={"https://arxiv.org/pdf/2202.04208.pdf"}>link2, </a>
                                    <a href={"https://arxiv.org/pdf/2101.10943.pdf"}>link3</a>
                            <br/><br/>
                            Datasets/Benchmarks: <br/>
                            - <a href={"https://www.pharmgkb.org/page/iwpc"}>IWPC dataset</a> (continuous treatment)<br/>
                            - <a href={"https://biolincc.nhlbi.nih.gov/teaching/"}>BioLINCC clinical trials</a> <br/>
                            - <a href={"https://dataverse.harvard.edu/dataset.xhtml?persistentId=hdl:1902.1/10766"}>Student teacher achievement ratio dataset </a> <br/>
                            - Other useful datasets: <a href={"https://github.com/rguo12/awesome-causality-data"}>link1, </a>
                                    <a href={"https://www.cmu.edu/dietrich/causality/projects/causal_learn_benchmarks/"}>link2, </a> <br/>
                            - Some useful packages:
                                    <a href={"https://github.com/Microsoft/EconML"}>link1, </a>
                                    <a href={"https://github.com/uber/causalml"}>link2, </a>
                                    <a href={"https://github.com/py-why/dowhy"}>link3, </a>
                                    <a href={"https://github.com/DataCanvasIO/YLearn"}>link4</a>
                        </td>
                    </tr>
                    <tr>
                        <td> Causal representation learning and transfer learning</td>
                        <td>

                        </td>
                        <td>
                            Papers:
                            <br/><br/>
                            Datasets/Benchmarks: <br/>

                        </td>
                    </tr>
                    <tr>
                        <td> Partial identification and sensitivity analysis</td>
                        <td>
                            <li>Hidden confounding often results in non-identifiability of causal estimands,
                                i.e., having multiple correct solutions. Researchers often make parametric assumptions (e.g., linearity of the SCM)
                                or specific types of graphs (instrumental variable graphs) to get informative estimation bounds on the causal estimand.
                                What other (parametric) assumptions can lead to similar results? </li> <br/>
                            <li> Most existing methods for causal estimation heavily rely on the knowledge of causal graphs.
                                 How to improve their robustness if the causal network is only known up to an approximation (e.g., Markov equivalent class)?</li>
                        </td>
                        <td>
                            <a href={"https://arxiv.org/pdf/2202.10665.pdf"}>link1, </a>
                                    <a href={"https://causalai.net/r80.pdf"}>link2, </a>
                                    <a href={"https://arxiv.org/pdf/2208.06552.pdf"}>link3</a>
                        </td>
                    </tr>
                    <tr>
                        <td>Causal reinforcement learning</td>
                        <td>
                            <li> How to develop reinforcement learning (RL) algorithms that can explore the (latent) causal structure of the environment? </li> <br/>
                            <li> How to model the prior knowledge as a (hierarchical) causal world model to increase exploration efficiency for new RL tasks?</li>
                        </td>
                        <td>
                            Papers/tutorials: <a href={"https://crl.causalai.net/"}>link1, </a>
                                    <a href={"https://arxiv.org/pdf/2202.10430.pdf"}>link2 </a>
                            <br/><br/>
                            Datasets/Benchmarks: <br/>
                            - <a href={"https://github.com/rr-learning/CausalWorld"}>CausalWorld</a> <br/>
                            - <a href={"https://causalcity.github.io/"}>CausalCity</a>
                        </td>
                    </tr>
                    <tr>
                        <td> Other topics </td>
                        <td>
                            <li>  An overview of how the human brain encodes causal information </li> <br/>
                            <li> How to learn causal relationships between high-level macro variables from micro-level measurements? </li> <br/>
                            <li> One approach for imposing fairness in predictive models is to assess the causal links between sensitive features and the outcome and adjust for that.
                                How to define “optimal” fair predictive models using the language of causality?</li>
                        </td>
                        <td>
                            <li>  <a href={"https://pubmed.ncbi.nlm.nih.gov/15817178/"}>link </a> </li> <br/>
                            <li>  <a href={"https://arxiv.org/pdf/1605.09370.pdf"}>link </a> </li> <br/> <br/>
                            <li>  <a href={"https://5harad.com/papers/causal-fairness.pdf"}>link1, </a>
                                  <a href={"https://ojs.aaai.org/index.php/AAAI/article/view/11553"}>link2</a></li>

                        </td>
                    </tr>
                    </tbody>

                </Table>
                <h5>Surveys:</h5>
                <li><a href={"https://royalsocietypublishing.org/doi/10.1098/rsos.220638"}>Causal machine learning for healthcare and precision medicine</a> </li>
                <li><a href={"https://arxiv.org/abs/2206.15475"}>Causal Machine Learning: A Survey and Open Problems</a> </li>
                <li><a href={"https://arxiv.org/abs/2206.05498"}>A Review of Causality for Learning Algorithms in Medical Image Analysis</a> </li>
                <br/>
                <h5>Workshops/Conferences/Tutorials:</h5>
                <li><a href={"https://www.cclear.cc/Acceptedpapers"}>CLeaR (Causal Learning and Reasoning) 2022</a> </li>
                <li><a href={"https://why21.causalai.net/"}>Causal Inference & Machine Learning: Why now?</a> </li>
                <li><a href={"https://www.cmu.edu/dietrich/causality/neurips20ws/"}>Causal Discovery & Causality-Inspired Machine Learning</a> </li>
                <li><a href={"https://sites.google.com/view/causalityanddeeplearning/start"}>Causality and Deep Learning: Synergies, Challenges and the Future</a> </li>
                <li><a href={"https://objects-structure-causality.github.io/papers.html"}>Elements of Reasoning: Objects, Structure, and Causality</a> </li>
            </Page>
        </div>
    )
}

