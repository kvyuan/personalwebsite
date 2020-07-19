<template>
  <div>
    <GeneralHeader content="It ain't much, but it's honest work"/>
    <div class="resume-inner">
      <div class="education-outer">
        <div class="education-col">
          <h2>Education</h2>
        </div>
        <div class="education-inner">
          <Education degreeGpa = "M.Eng Mechanical and Industrial Engieering, GPA: 3.93"
          schoolLocationYears = "University of Toronto, Toronto, CA, Expected May 2021"/>
          <Education degreeGpa = "B.S Industrial Engineering and Computer Science, GPA: 3.50"
          schoolLocationYears = "University of Wisconsin-Madison, Madison, WI, Received May 2019"/>
        </div>
      </div>
      <div class="experience-outer">
        <div class="experience-col">
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
      <div class="skills-outer">
        <div class="skills-col">
          <h2>Skills</h2>
        </div>
        <div class="skills-inner">
        <Skills skills="Progamming: Java, Python, Javascript, Matlab, React,
        Vue, Django, Julia, AMPL, MATLAB"/>
        <Skills skills="Analytics: Scikitlearn, SQLite, Hive, Spark, MS
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
  location:relative;
  height: 2000px;
}

.education-outer{
  display: grid;
  overflow: hidden
}

.education-col{
  font-size: 30px;
  font-family: proxima-nova;
  color: black;
  text-align: left;
  position: absolute;
  left: 12%;
}

.education-inner{
  position: absolute;
  left: 35%
}

.experience-outer{
  display: grid;
}

.experience-col{
  position: absolute;
  left: 12%;
  top: 22.5%;
  font-size: 30px;
  font-family: proxima-nova;
  color: black;
  text-align: left;
}

.experience-inner{
  position: absolute;
  left: 35%;
  top: 24.5%
}

.skills-outer{
  display: grid;
}

.skills-col{
  position: absolute;
  left: 12%;
  top: 81%;
  font-size: 30px;
  font-family: proxima-nova;
  color: black;
  text-align: left;
}

.skills-inner{
  height:200px;
  position: absolute;
  top:83.5%;
  left: 35%
}


</style>
