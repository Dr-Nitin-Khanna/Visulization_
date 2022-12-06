import React from "react";
import TitleAndDescription from "../components/TitleAndDescription";
import Layout from "../components/Layout";
import Container from "react-bootstrap/Container";
import Contact from "../components/Contact";
import Row from "react-bootstrap/Row";
import ChartImageContainer from "../components/ChartImageContainer";
import ChartFamilySection from "../components/ChartFamilySection";
import { Link } from "gatsby";
import { Matplotlib, Seaborn } from "../components/MiscellaneousLogos"
import { Col } from "react-bootstrap";
import CodeChunk from "../components/CodeChunk"
import ChartImage from "../components/ChartImage";
import Spacing from "../components/Spacing";

const chartDescription =
  "<p>A <a href='https://www.data-to-viz.com/graph/histogram.html'>Histogram</a> represents the distribution of a numeric variable for one or several groups. The values are split in bins, each bin is represented as a bar. This page showcases many histograms built with python, using both the <code>seaborn</code> and the <code>matplotlib</code> libraries.</p>";

const quickCode = `# library & dataset
import seaborn as sns
df = sns.load_dataset('iris')

# Plot the histogram thanks to the distplot function
sns.distplot( a=df["sepal_length"], hist=True, kde=False, rug=False )
`

const quickCodeMatplotlib = `# library & dataset
import matplotlib.pyplot as plt
hours = [17, 20, 22, 25, 26, 27, 30, 31, 32, 38, 40, 40, 45, 55]

# Initialize layout
fig, ax = plt.subplots(figsize = (9, 9))

#plot
ax.hist(hours, bins=5, edgecolor="black");
`

export default function ViolinPlot() {

  return (

    <Layout title="Histogram" isTocEnabled seoDescription="A collection of histogram examples made with Python, coming with explanation and reproducible code">

      <TitleAndDescription
        title="Histogram"
        description={chartDescription}
      />

      <Container>
        <h2 id="Quick (Seaborn)">&#9201; Quick start (Seaborn)</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p><code>Seaborn</code> is definitely the best library to quickly build a histogram thanks to its <code>distplot()</code>.</p><p>Note the importance of the <code>bins</code> parameter: try several values to see which represents your data the best. 🔥</p>
          </Col>
          <Col md={6}>
            <Link to={"/20-basic-histogram-seaborn"}>
              <ChartImage imgName="20_Basic_Histogram_seaborn2"
                caption="The most basic histogram one can make with python and seaborn" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCode}</CodeChunk>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Seaborn"><Seaborn />Histogram charts with <code>Seaborn</code></h2>
        <p>
          <code>Seaborn</code> is a python library allowing to make better
          charts easily. It is well adapted to build histogram thanks to
          its <code>distplot</code> function. The following charts will guide you
          through its usage, going from a very{" "}
          <Link to="">basic histogram</Link> to something much more{" "}
          <Link to="">customized</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="20_Basic_Histogram_seaborn1"
            caption="The most basic histogram with seaborn. It adds a density on top by default"
            linkTo="/20-basic-histogram-seaborn"
          />
          <ChartImageContainer
            imgName="20_Basic_Histogram_seaborn2"
            caption="Play with the bin parameter to control the number of bars"
            linkTo="/20-basic-histogram-seaborn"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist1"
            caption="Remove the density chart on top of the seaborn histogram"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist2"
            caption="Add rug on top of the histogram"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist3"
            caption="Customize the rug: color, size and more"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="21_Display_Rug_and_distribution_on_hist4"
            caption="Customize the appearance of the density chart displayed on top of the histogram"
            linkTo="/21-control-rug-and-density-on-seaborn-histogram"
          />
          <ChartImageContainer
            imgName="24_Histogram_with_boxplot_on_top"
            caption="How to split the chart window to display a boxplot on top of the histogram"
            linkTo="/24-histogram-with-a-boxplot-on-top-seaborn"
          />
          <ChartImageContainer
            imgName="25_Histogram_of_several_variables1"
            caption="Compare the distribution of several groups on the same chart"
            linkTo="/25-histogram-with-several-variables-seaborn"
          />
          <ChartImageContainer
            imgName="25_Histogram_of_several_variables2"
            caption="Use small multiple to compare the distribution of several groups"
            linkTo="/25-histogram-with-several-variables-seaborn"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot1"
            caption="Histogram can be added around a scatterplot to show each variable distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
          <ChartImageContainer
            imgName="82_seaborn_jointplot6"
            caption="Histogram can be added around a 2d density chart to show x and y variable distributions"
            linkTo="/82-marginal-plot-with-seaborn"
          />
        </Row>
      </Container>

      <Spacing />

      <Container>
        <h2 id="Quick (matplotlib)"><Matplotlib/> Quick start (Matplotlib)</h2>
        <Row className="align-items-center">
          <Col md={6}>
            <p><Link to="/matplotlib">Matplotlib</Link> can also build decent histograms easily. It provides a <code>hist()</code> function that
            accept a vector of numeric values as input.</p>
            <p>It also provides all the options you can think of to customize the binning and the genreral appearance.</p>
          </Col>
          <Col md={6}>
            <Link to={"/basic-histogram-in-matplotlib"}>
              <ChartImage imgName="basic-histogram-in-matplotlib"
                caption="The most basic histogram one can make with python and matplotlib" />
            </Link>
          </Col>
        </Row>
        <CodeChunk>{quickCodeMatplotlib}</CodeChunk>
      </Container>


      <Spacing />

      <Container>
        <h2 id="Matplotlib"><Matplotlib />Histograms with <code>Matplotlib</code></h2>
        <p>
          As usual <Link to="/matplotlib">matplotlib</Link> is perfectly skilled to build nice histogram, but require
          some more work camparing to <Link to="/seaborn">seaborn</Link> to get a good looking figure.
        </p>
        <p>The examples below should help you to get started with matplotlib histograms. They go from
          a very <Link to="/basic-histogram-in-matplotlib">basic version</Link> and then show how to customize it, like adding <Link to="/basic-histogram-in-matplotlib">annotation</Link>.
        </p>
        <Row>
          <ChartImageContainer
            imgName="basic-histogram-in-matplotlib"
            caption="The most basic histogram with matplotlib."
            linkTo="/basic-histogram-in-matplotlib"
          />
          <ChartImageContainer
            imgName="basic-histogram-in-matplotlib2"
            caption="Reduce chart opacity and add annotation (median represented in vertical line)"
            linkTo="/basic-histogram-in-matplotlib"
          />
          <ChartImageContainer
            imgName="density-mirror-histogram"
            caption="Mirror density chart to compare the distribution of 2 variables"
            linkTo="/density-mirror"
          />
        </Row>
      </Container>

      <Spacing />

      <div className="greySection" id="related">
        <Container>
          <ChartFamilySection chartFamily="distribution" />
        </Container>
      </div>

      <Spacing />

      <Container>
        <Contact />
      </Container>

      <Spacing />

    </Layout >
  );
}
