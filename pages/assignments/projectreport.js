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
          <h2>Final Project Report</h2>
          <h5>Due: December 8, at 11:59PM ET.</h5>
          <h6>Adapted from and credit to similar work from <a href="http://www.cs.toronto.edu/~duvenaud/" target="_blank">David Duvenaud</a>.</h6>
          <p>Your project report should resemble a conference workshop abstract (<a href="https://sites.google.com/view/med-neurips-2020/abstracts" target="_blank">examples here</a>). If you feel that your project won’t cleanly fit into this rubric, please reach out to Rahul or the TAs.</p>

          <p>You should aim to produce a report of 4 to 8 pages in length (not to exceed 8 pages), not including appendices or bibliography. Don’t be afraid to keep the text short and to the point, and to include large illustrative figures.</p>

          <p>You will be evaluated on how effectively your project meets the criteria described in the subsequent sections. You may note that nowhere in the requirements do we require your model to achieve excellent results in order to produce a strong project: rather, you will be primarily evaluated on the strength of your evaluation of the problem domain, selection of methods, novelty of your contribution, and discussion of strengths and drawbacks of your chosen method(s).</p>

        <h5>Abstract (4 points)</h5>
        <p>Your abstract should summarize the main idea of the project and its contributions. Crucially, it should highlight the clinical relevance of the problem that you tackled, and should be understandable to anyone who has taken CSC 2541. In the abstract, you do not need to discuss everything you did in detail; rather, you should leave the reader with the main idea of your work, plus one or two other notable takeaways (if applicable).​</p>

        <h5>Introduction (4 points)</h5> 
        <p>Your introduction should clearly state the problem being addressed, discuss why it is interesting and important, and set the stage for why your methods are an appropriate means of approaching the problem.</p>

        <h5>Figure or diagram (8 points)</h5> 
        <p>In your report, you should create <i>a novel figure</i> which visually communicates the overall model or idea behind your contribution. Here, the idea is to make your paper accessible, especially to readers who may not have the full prerequisite background to understand the details behind your contribution, or to those who are just starting by skimming your paper. Here, we do require that the figure you create be novel - it does not fulfill the requirement to reuse a figure from another author’s work, even with attribution. Compose a caption for your figure that explains the visual clearly - for example, there is often ambiguity in figures about whether arrows indicate computational flow, conditional dependencies, or serve some other purpose. The caption describing your figure should resolve such ambiguities.</p>

        <p>To create figures, we recommend using <a href="https://www.overleaf.com/learn/latex/TikZ_package" target="_blank">TikZ</a> (a LaTeX package for drawing visuals), presentation software (like PowerPoint or Google Slides), or photo editing software (like Adobe Photoshop). When possible, do your best to use a vector graphics format such as <code>pdf</code>, <code>eps</code> or <code>svg</code> so that your figures don’t look blurry, and make sure that any text in your figures is about the same size as the text in the rest of the paper.</p>

        <h5>Formal description (16 points)</h5>
        <p>Here, provide a mathematical or algorithmic description of your model, loss function, conjecture, and/or your problem domain. Your formal description should be of sufficient clarity and detail that a reader could use it as a reference to faithfully re-implement your work.</p>
        
        <p>For this segment, we ask that you include at least one of the following:</p>
        <ul>
        <li>An algorithm box.</li>
        <li>Equations describing your model.</li>
        <li>A theorem or formally stated conjecture.</li>
        <li>A formal description of a problem domain.</li>
        </ul>
        <p>You should also highlight how your model is different from other approaches, or what the main relevant considerations are for the domain. This can be done by comparing it to an existing model, perhaps by using another diagram or in words. E.g. if you are proposing a new algorithm that only changes one line in an existing algorithm, highlight that one line, or do a side-by-side comparison.</p>
        <h5>Related work (16 points)</h5> 
        <p>Here, liberally give credit to closely related work, and to the research upon which your project is built. If your project expands upon previous work, use this section to discuss those previous contributions and to clearly distinguish your contribution from that of the previous work you describe. When you are discussing papers closely related to your own (perhaps papers using similar methods, or different approaches to the same problem domain), please include a 1-2 sentence summary of those papers, so that it is clear how your work fits into the literature landscape.</p>

        <p>We realize you might not know about all related papers (or have time to carefully read all related papers), and that is acceptable for the purposes of this project.</p>

        <p>We recommend using <a href="http://www.bibtex.org/" target="_blank">BibTeX</a> to manage your citations - though BibTeX can be annoying at first, it can be a super helpful way of managing your citations (for example, Google Scholar can directly give you BibTeX entries for papers, which LaTeX will automatically format in the correct citation style).</p>
        <h5>Comparison or demonstration (16 points)</h5>
        <p>This is the section to demonstrate how well your project achieves your given objective. This can be done in one of the following ways:</p>
        <ul>
        <li>Comparing the performance of your model against a baseline model, either a baseline sourced from the literature (the preferred option if such a baseline exists), or a baseline of your own design.</li>
        <li>A demonstration of a theorem or conjecture: for example, applying your theorem using your selected healthcare problem as an example, and demonstrating its performance.</li>
        <li>An experiment demonstrating that your model possesses some property of interest (for example, interpretability) that conventional baselines in the space do not.</li>
        </ul>
        <p>Your discussion of your experiments should also include a description of how you prepared your datasets, how you trained your model, and any tricks you used to get it working. It may also be fruitful to include toy data: though running your approach on toy data alone will be insufficient (as we require this project to contribute to the domain of machine learning in healthcare), toy data can assist in establishing intuition behind your approach, or the use cases in which your approach is most valuable.</p>

        <p>If you are doing a review paper for your final project, your comparison or demonstration should consist of a comparison of the reviewed techniques on a relevant healthcare problem (or problems) of interest.</p>

        <p>If you are including plots of your results (which is encouraged), make sure to label plot axes, and (when necessary) provide a caption explaining the plot(s) and their significance.</p>

        <h5>Limitations (12 points)</h5>
        <p>Discuss the limitations of the approach that you took for this project. Describe some of the settings in which we’d expect your approach to perform poorly, or where all existing models fail, and do your best to guess or explain why these limitations are the way they are. In this discussion, suggest ways to address these limitations (or, if addressing these limitations represents one or more open problems, indicate this), and provide some examples of possible future research which could fruitfully extend your line of work.</p>

        <h5>Conclusions (4 points)</h5>
        <p>Conclude by situating the results achieved in the context of the problem domain described in the Introduction, and repeating the main takeaways from your paper. The conclusion should be clear and concise.</p>

        <h5>Team Contributions (4 points)</h5>
        <p>Please also include a segment of your report (not counted toward the page limit) discussing the contributions of each team member toward the final project. Contributions can include (but are not limited to) problem formulation, dataset setup, running experiments, and writing the final report. A good example of this can be found in the first footnote of <a href="https://arxiv.org/pdf/1706.03762.pdf" target="_blank">Attention Is All You Need</a>.</p>

        <h5>Appendices</h5>
        <p>You are welcome to use the appendices to include additional proofs, extra details, and experiments; however, please do not use the appendices to include crucial information missing from the main text to circumvent the page limit (a good rule of thumb here is - “if the reader does not look at the appendix, will they still be able to draw the intended value and insights from this work?”), or to overwhelm the reader with irrelevant details (for example, please do not wholesale copy/paste your codebase into an appendix - although, if there are unique, nifty features of your implementation that you would like to highlight, these segments are welcomed in your appendices). If you are taking a more theoretical approach to your project, appendices are an excellent place to situate long mathematical derivations that would otherwise interrupt the flow of the paper. Similarly, if you are working with generative models, this is also a good place to situate additional generated examples which may be numerous for your paper’s main body.</p>

        <h5>Novelty (20 points)</h5> 
        <p>Novelty is graded on a sliding scale and is of course somewhat subjective, but here are a few guidelines:</p>
        <ul>
        <li><b>0 points</b>: A literature review with no new content. This is completely OK as a project, but it won’t earn an A+.</li>
        <li><b>5 to 15 points</b>: A novel combination of method and type of data. You get novelty points for making tweaks to a method to take advantage of the structure of a new dataset or domain. Think of a reason why the experiment turned out the way it did, and check if this was actually the reason.</li>
        <li><b>20 points</b>: Novel method with motivation - not just making a random tweak for no reason. For full marks, you need to check if the reason you said it should work better is actually the reason why it worked better.</li>
        </ul>

        <h5>Miscellaneous Guidelines</h5>
        <ul>
        <li>You’re free to play with the format of your paper, as long as all the required content is present and easy to find.</li>
        <li>In addition to your writeup, please submit a copy of your code, either as a .zip file, or through the inclusion of a Github link to your codebase included in one of the appendices. Please do not include any of your training/evaluation/test data in your submission, as that may exhaust the memory capacity of our submission system.</li>
        </ul>
        </Page>
    </div>
  )
}

