<template>
  <div>
    <GeneralHeader content="It ain't much, but it's honest work"/>
    <div class="resume-inner">
      <div class="section-outer">
        <div class="section-col">
          <h2>Education</h2>
        </div>
        <div class="education-inner">
          <Education degree= "M.Eng Mechanical and Industrial Engieering"
          schoolLocationYears = "University of Toronto, Toronto, ON, Expected May 2021"
          GPA = "3.93"/>
          <Education degree = "B.S Industrial Engineering and Computer Science"
          schoolLocationYears = "University of Wisconsin-Madison, Madison, WI, Received May 2019"
          GPA = "3.50"/>
        </div>
      </div>
      <div class="section-outer">
        <div class="section-col">
          <h2>Experience</h2>
        </div>
        <div class= "experience-inner">
        <Experience position="Quantitative Developer"
        companyLocationYears="StockPortfolioBuilder, Toronto, ON, April 2020 - Present"
        description="Automated price quote retrieval process and developed hybrid
        trading strategies to generate more than 4000% return since 2004. During
        2008 financial crisis, the portfolio was down 2% and YTD return is around 10%."/>
        <Experience position="Data Scientist"
        companyLocationYears="Transaction Fraud Detection, Toronto, ON, September 2019 - December 2019"
        description="Configured Spark runtime environment and managed AWS EC2
        Linux instance including security groups, users, etc. Produced correlation
        heat map and feature histogram by label for exploratory data analysis.
        Developed Python functions that integrated parallel grid search,
        random/stratified cross-validation, and sampling to streamline modeling
        process on extremely imbalanced data with minory class ratio below 1%.
        Created a multilayer perceptron classifier model that yielded 0.875 for precision,
        0.846 for recall and 0.860 for F-score on interpolation test set."/>
        <Experience position="Operations Consultant"
        companyLocationYears="Convenience Electronics Inc., Madison, WI, January 2019 - May 2019"
        description="Improved production scheduling to save 100hr+ overtime labor
        monthly under DMAIC protocol. Analyzed past scheduling data using Tableau
        and diagnosed pain points of existing scheduling process. Created a
        nonlinear program and an Excel demo to illustrate the framework and
        received 3rd place in Ratner Award for Senior Design"/>
        <Experience position="Continuous Improvement Consultant"
        companyLocationYears="Mortara Instruments Inc., Milwaukee, WI, September 2018 - December 2018"
        description="Organized continuous improvement events onsite to identify
        root cause and key issues related to creating an integrated assembly for
        three different products. Conducted Methods-Time Measurement study to
        diagnose bottleneck of the process and balanced workstations’
        workload to reach 22% throughput increase by estimate"/>
        <Experience position="Full Stack Developer"
        companyLocationYears="TalentExchange&Meet-Up, Madison, WI, September 2018 - December 2018"
        description="Led a 9-member team to create a web application for talent swap.
        Coordiated product design and iteration planning meetings and maintained
        documents along the software development life cycle. Implemented React
        frontend and Django + PostgreSQL backend of workshop manipulation,
        email notification system, learning credit manipulation, etc. "/>
        <Experience position="Data Analytics Intern"
        companyLocationYears="CUNA Mutual Group, Madison, WI, June 2018 - August 2018"
        description="Investigated objectives and constraints of direct-mail marketing
        campaigns, and used nonlinear program to automate and optimize selection
        of mail recipients, saving 10hr+ manual efforts monthly. Collected data
        scientists and business owners’ needs for model performance visualization
        and prototyped a dashboard using Power BI. Enhanced predictive model
        validation report SQL queries and R scripts to capture errors in early
        stages. Adjusted Spark configurations to process over 400M records of
        data using validation report scripts."/>
        </div>
      </div>
      <div class="section-outer">
        <div class="section-col">
          <h2>Skills</h2>
        </div>
        <div class="skills-inner">
        <div class="filler"/>
        <Skills skills="Progamming: Python, Java, Javascript, Matlab, React,
        Vue, Django, Julia, MATLAB"/>
        <Skills skills="Analytics: AWS, Scikitlearn, SQLite, Hive, Spark, MS
        Power BI, Tableau"/>
        <Skills skills="Communication and Management: Client Speech, Technical
        Writing, Agile, DMAIC"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import GeneralHeader from '@/components/GeneralHeader.vue';
import Education from '@/components/Education.vue';
import Experience from '@/components/Experience.vue';
import Skills from '@/components/Skills.vue';
export default {
  name: 'resume',
  components: {
    GeneralHeader,
    Education,
    Experience,
    Skills
  },
};
</script>

<style>
.resume-inner{
  width: 100%;
  display: grid;
}

.section-outer{
  margin-top:2vh;
  display: grid;
  grid-template-columns: minmax(28vw, 20%) 1fr;
}

.section-col{
  font-family: proxima-nova;
  color: black;
  text-align: right;
  margin-left: auto;
  margin-right: auto;
  margin-top:0;
}

.skills-inner{
    text-align: left;
}

h2{
  font-size: 1.8vw;
}
</style>
