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
          <h2>Project Resources</h2>
          <p>Below, we've aggregated some resources which we hope you will find useful as you work on your final projects. This list of resources will be continually updated throughout the semester.</p>
          <h5>Datasets</h5>
          <h6><a href="https://physionet.org/content/" target="_blank">PhysioNet</a></h6>
          <p>PhysioNet presents a repository of medical research data. We would especially draw your attention to the following:</p>
          <ul>
          <li><a href="https://physionet.org/news/post/352" target="_blank">MIMIC-IV</a> - comprehensive clinical information on hospital stays for patients admitted to a tertiary academic medical center in Boston, MA. (Helpful tutorials on accessing and working with MIMIC-IV: <a href="https://alistairewj.github.io/publication/johnson-2019-mimic/" target="_blank">publication</a>, <a href="https://alistairewj.github.io/talk/2020-mimic-iv-analysis-tutorial/ " target="_blank">analysis tutorial</a>, <a href="https://alistairewj.github.io/talk/2020-mimic-iv-data-tutorial/" target="_blank">data tutorial</a>).</li>
          <li><a href="https://physionet.org/content/hirid/1.1.1/" target="_blank">HiRID</a> - critical care dataset containing data relating to almost 34 thousand patient admissions to the Department of Intensive Care Medicine of the Bern University Hospital.</li>
          <li><a href="https://physionet.org/content/mimic-cxr/2.0.0/" target="_blank">MIMIC CXR</a> - dataset of chest radiographs in DICOM format with free-text radiology reports.</li>
          </ul>

          <h6><a href="https://themmrf.org/" target="_blank">MMRF</a></h6>
          <p>Data from a 10-year observation study of 1000 newly diagnosed myeloma patients receiving various standard approved treatments. Access instructions <a href="https://isb-cancer-genomics-cloud.readthedocs.io/en/latest/sections/data/MMRF_about.html" target="_blank">here</a>.</p>
          <ul>
            <li><a href="https://github.com/clinicalml/ml_mmrf" target="_blank">ML-MMRF</a> is a GitHub repository built to process the MMRF CoMMpass Dataset and allows researchers to use these data for machine learning. It provides code to parse the raw MMRF files into tensors (stored in `numpy` matrices), clean and normalize the tensors, validate the procedure.</li>
          </ul>
          <h6><a href="https://www.med.upenn.edu/cbica/brats2020/registration.html" target="_blank">BraTS (Brain Tumor Segmentation)</a></h6>
          <p>Multi-institutional routine clinically-acquired pre-operative multimodal MRI scans of glioblastoma (GBM/HGG) and lower grade glioma (LGG), with pathologically confirmed diagnosis.</p>

          <h6><a href="https://eicu-crd.mit.edu" target="_blank">eICU</a></h6>
          <p>Dataset relating to patients who were treated as part of the Philips eICU program across intensive care units in the United States. It contains data regarding the clinical care of ICU patients. Access instructions <a href="https://eicu-crd.mit.edu/gettingstarted/access/" target="_blank">here</a>.</p>

          <h6><a href="" target="_blank">PPMI</a></h6>
          <p>Data from longitudinal study to define and measure biomarkers associated with Parkinson's disease. Access instructions <a href="https://www.ppmi-info.org/access-data-specimens/download-data" target="_blank">here</a>.</p>

          <h6><a href="https://www.kaggle.com/andrewmvd/isic-2019 " target="_blank">ISIC 2019 Challenge Dataset</a></h6>
          <p>25,331 images available for the classification of dermoscopic images among nine different diagnostic categories.</p>

          <h6><a href="https://zenodo.org/record/4498364#.YUDmfS2cZTY " target="_blank">COUGHVID</a></h6>
          <p>Crowdsourced cough recordings representing a wide range of subject ages, genders, geographic locations, and corresponding COVID-19 statuses.</p>

          <h6><a href="https://www.kaggle.com/parulpandey/covid19-clinical-trials-dataset" target="_blank">COVID-19 Clinical Trials dataset</a></h6>
          <p>Database of COVID-19 related clinical studies being conducted worldwide.</p>

        </Page>
    </div>
  )
}

