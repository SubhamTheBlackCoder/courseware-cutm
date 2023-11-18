import React from "react";
import { Link } from "react-router-dom";
function DescriptionAero() {
  const containerStyle = {
    width: "80%",
    margin: "0",
    padding: "20px",
    textAlign: "left",
  };
  const linkStyle = {
    display: "block",
    marginBottom: "10px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
    textAlign: "left",
  };

  const subheadingStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginTop: "20px",
    marginBottom: "10px",
  };

  const paragraphStyle = {
    fontSize: "16px",
    marginBottom: "20px",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "20px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>
Course Name : Aerodynamic</h1>
      <h1>
        <p style={headingStyle}>Code(Credit) : CUTM1096(3-1-0)</p>
      </h1>

      <h2 style={subheadingStyle}>Course Objectives</h2>
      <p style={paragraphStyle}>
        To impart basic knowledge on regulatory authorities and agencies
        governing the manufacture and sale of pharmaceuticals.
      </p>

      <h2 style={subheadingStyle}>Learning Outcomes</h2>
      <p style={paragraphStyle}>
        To recognize, understand, and apply the language, theory, and models of
        the field of business analytics.
      </p>

      <h2 style={subheadingStyle}>Course Syllabus</h2>
      <p style={subheadingStyle}>Module I: Overview of Business Analytics:</p>
      <ul style={listStyle}>
        <li style={paragraphStyle}>
          Definition, Evolution, Architecture, Benefits, Future.
        </li>
        <li style={paragraphStyle}>
          Business, Analytics as a Solution for Business Challenges.
        </li>
        <li style={paragraphStyle}>
          Effective Predictive Analytics, Integrating Analytics in Business
          Processes, Unstructured Data Analytics, Balanced Scorecard,
          Dashboards, KPI based on Dashboard and Scorecard, LOFT effect, Data
          Quality, Master Data Management, Data Profiling.
        </li>
        <li style={paragraphStyle}>Why are Business Analytics important</li>
      </ul>

      <p style={subheadingStyle}>
        Module 2: Descriptive Analytics, Predictive Analytics, and Prescriptive
        Analytics:
      </p>
      <ul style={listStyle}>
        <li style={paragraphStyle}>
          Introduction to Descriptive Analytics, Visualizing and Exploring Data,
          Descriptive Statistics, Sampling and Estimation, Introduction to
          Probability Distributions.
        </li>
        <li style={paragraphStyle}>
          Introduction to Predictive Analytics, Predictive Modeling
          (Logic-driven models and data-driven models).
        </li>
        <li style={paragraphStyle}>
          Introduction to Prescriptive Analytics, Prescriptive Modeling,
          Non-linear Optimization.
        </li>
      </ul>

      <p style={subheadingStyle}>Module 3: Data Issues:</p>
      <ul style={listStyle}>
        <li style={paragraphStyle}>
          Organization/sources of data, Importance of data quality, Dealing with
          missing or incomplete data, Data Classification.
        </li>
        <li style={paragraphStyle}>
          Data Warehouse: Definition, Features, Applications, Types of data
          warehouse.
        </li>
        <li style={paragraphStyle}>
          Architecture: Business Analysis framework, 3-tier data warehouse
          framework.
        </li>
        <li style={paragraphStyle}>
          Data Warehouse Models: Virtual Warehouse, Data Mart, and Enterprise
          warehouse.
        </li>
        <li style={paragraphStyle}>
          Metadata: Meaning and Categories, Role of metadata, Metadata
          respiratory, Challenges for metadata management, Data Cube.
        </li>
        <li style={paragraphStyle}>
          Online Analytical Processing Server (OLAP): Types, OLAP operations,
          OLAP Vs Operational Database (OLTP).
        </li>
        <li style={paragraphStyle}>
          SCHEMA: Star Schema, Snowflake schema, Fact Constellation schema.
        </li>
      </ul>

      <p style={subheadingStyle}>
        Module 4: Data Mining and Testing: Definition, Concepts, Applications,
        and Methods.
      </p>
      <p style={subheadingStyle}>
        Module 5: Security: Security requirements, User Access, Data
        classification, User Classification, Data Movement, And Impact of
        security on design.
      </p>
      <p style={subheadingStyle}>
        Module 6: Decision Modelling and Forecasting:
      </p>
      <ul style={listStyle}>
        <li style={paragraphStyle}>
          Optimization: Using Excel to solve business problems (e.g., Marketing
          Mix, Portfolio optimization, etc.).
        </li>
        <li style={paragraphStyle}>
          Linear Programming: Introduction, Types of Linear programming
          problems/Models, Linear programming Model elements, Model formulation
          procedure, Computer-based solutions for linear programming using
          Simplex method.
        </li>
        <li style={paragraphStyle}>
          Duality and Sensitivity Analysis: What is Duality?, Duality and
          Sensitivity analysis problems.
        </li>
        <li style={paragraphStyle}>
          Integer Programming: Introduction, Solving IP problems/Models.
        </li>
        <li style={paragraphStyle}>
          Forecasting: Introduction, Types of Variation in Time series data,
          Simple Regression Model, Multiple Regression Models.
        </li>
        <li style={paragraphStyle}>
          Simulation: Introduction, Types of Simulation.
        </li>
        <li style={paragraphStyle}>
          Decision Theory: Introduction, Decision theory model elements, types
          of decision environments, decision theory formulation, decision making
          under uncertainty and risk, Decision trees.
        </li>
      </ul>

      <p style={subheadingStyle}>Module 7: Fundamentals of R Language:</p>
      <ul style={listStyle}>
        <li style={paragraphStyle}>
          Introduction, Basic Statistical Analysis using R, Process of Business
          Analytics.
        </li>
        <li style={paragraphStyle}>BA Process-Walk through with R.</li>
        <li style={paragraphStyle}>
          Multiple regression- Theory and Walk through with R.
        </li>
        <li style={paragraphStyle}>
          Clustering and Segmentation- Theory and Walk through with R.
        </li>
      </ul>

      <h2 style={subheadingStyle}>Text Books Recommended</h2>
      <ul style={listStyle}>
        <li style={paragraphStyle}>
          Fundaments of Business Analytics by RN Prasad and Seema Acharya, Wiley
          India Publication.
        </li>
        <li style={paragraphStyle}>
          Win With Advanced Business Analytics by Jean Paul Isson and Jesse S.
          Harroitt, Wiley Publication, 2013.
        </li>
        <li style={paragraphStyle}>
          Successful Business Intelligence: Secrets to Making BI a Killer App by
          Cindi Howson, Tata McGraw Hill Edition 2012.
        </li>
        <li style={paragraphStyle}>
          Analytics at Work by Thomas H. Davenport, Jeanne G. Harris, and Robert
          Morison, Harvard Business Press.
        </li>
      </ul>

      <h2 style={subheadingStyle}>Session Plan</h2>
      {/*session 1 */}
      <h2 style={subheadingStyle}>Session 1</h2>
      <p style={paragraphStyle}>Provisions of RBI Act 1935</p>
      <a href="/session1-theory" style={linkStyle}>
        Theory Link
      </a>
      <a href="/session1-video" style={linkStyle}>
        Video Link
      </a>
      {/*session 2 */}
      <h2 style={subheadingStyle}>Session 2</h2>
      <p style={paragraphStyle}>Description of Various Acts</p>
      <a href="/session2-theory" style={linkStyle}>
        Theory Link
      </a>
      <a href="/session2-video" style={linkStyle}>
        Video Link
      </a>
      {/*session 2 */}
      <h2 style={subheadingStyle}>Session 3</h2>
      <p style={paragraphStyle}>Banking Regulation Act 1949</p>
      <Link to="/session3-theory" style={linkStyle}>
        Theory Link
      </Link>
      <Link to="/session3-video" style={linkStyle}>
        Video Link
      </Link>

      {/* Session 4 */}
      <h2 style={subheadingStyle}>Session 4</h2>
      <p style={paragraphStyle}>Prevention of Money Laundering Act 2002</p>
      <Link to="/session4-theory" style={linkStyle}>
        Theory Link
      </Link>
      <Link to="/session4-video" style={linkStyle}>
        Video Link
      </Link>

      {/* Session 5 */}
      <h2 style={subheadingStyle}>Session 5</h2>
      <p style={paragraphStyle}>Anti Money Laundering</p>
      <Link to="/session5-theory" style={linkStyle}>
        Theory Link
      </Link>
      <Link to="/session5-video" style={linkStyle}>
        Video Link
      </Link>

      {/* Session 6 */}
      <h2 style={subheadingStyle}>Session 6</h2>
      <p style={paragraphStyle}>Branch Licensing Policy</p>
      <Link to="/session6-theory" style={linkStyle}>
        Theory Link
      </Link>
      <Link to="/session6-video" style={linkStyle}>
        Video Link
      </Link>

      {/* Session 7 */}
      <h2 style={subheadingStyle}>Session 7</h2>
      <p style={paragraphStyle}>Powers of RBI for opening new banks</p>
      <Link to="/session7-theory" style={linkStyle}>
        Theory Link
      </Link>
      <Link to="/session7-video" style={linkStyle}>
        Video Link
      </Link>

      {/* Session 8 */}
      <h2 style={subheadingStyle}>Session 8</h2>
      <p style={paragraphStyle}>Case Study</p>
      <Link to="/session8-theory" style={linkStyle}>
        Theory Link
      </Link>
      <Link to="/session8-video" style={linkStyle}>
        Video Link
      </Link>

      {/* Session 9 */}
      <h2 style={subheadingStyle}>Session 9</h2>
      <p style={paragraphStyle}>
        Responsibility of Paying and Collecting Banker
      </p>
      <Link to="/session9-theory" style={linkStyle}>
        Theory Link
      </Link>
      <Link to="/session9-video" style={linkStyle}>
        Video Link
      </Link>

      {/* Session 10 */}
      <h2 style={subheadingStyle}>Session 10</h2>
      <p style={paragraphStyle}>Indemnities and Guaranties</p>
      <Link to="/session10-theory" style={linkStyle}>
        Theory Link
      </Link>
      <Link to="/session10-video" style={linkStyle}>
        Video Link
      </Link>
    </div>
  );
}

export default DescriptionAero;
