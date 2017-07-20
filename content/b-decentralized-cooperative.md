---
title: "Research field B: (De-)centralized cooperative traffic management"
date: 2017-05-17
menu:
  main:
    name: "Research field B"
    weight: 70
weight: 70
---

{{< toc >}}

## Research field B: (De-&#x2060;)centralized cooperative traffic management

### B1. Sustainable cooperative traffic management for urban environments (Prof. Friedrich)

{{< img src="/images/b-decentralized-cooperative/B11und12_web.jpg" height="180px" >}}

#### B1.1 [Qinrui Tang:](.) Left Turn Prohibition Problem combining Traffic Assignment

#### B1.2 [Aleksandar Trifunović:](.) (Re)design of public transport network to integrate shared modes of transport

---

### B2. Distributed intelligent and cooperative systems (Prof. Müller)

{{< img src="/images/b-decentralized-cooperative/B21und22_web-neu.jpg" height="180px" >}}

#### B2.1 [Malte Aschermann:](https://github.com/masc) A mechanism for automatic coordination of cooperative driving manoeuvres: Fairness vs. Efficiency

{{< fig src="/images/b-decentralized-cooperative/malte/summary.nosvgo.svg" width="800px" align="left" title="Figure B2.1.1: Coordination of Vehicles by Means of Policies" >}}

* **[Cooperative Lane Management and Traffic flow Optimisation](https://github.com/SocialCars/colmto/blob/master/readme.md)**
  <br>
  To answer my research questions regarding coordination mechanisms on 2+1 roadways, I developed the platform *Cooperative Lane Management and Traffic flow Optimisation (CoLMTO)*.
  <br>
  * **Execution Model**<br>
  The execution model of CoLMTO, developed to conduct my simulation studies, is depicted in the following figure.
  {{% fig src="/images/b-decentralized-cooperative/malte/CoLMTO-Execution-Model.nosvgo.svg" title="Figure B2.1.2: The CoLMTO Execution Model" align="left" %}}
  * **Architecture**<br>
  The software architecture is structured as follows:
  {{% fig src="/images/b-decentralized-cooperative/malte/CoLMTO-EWGT2017-Architecture.nosvgo.svg" title="Figure B2.1.2: The CoLMTO Simulation Architecture as of release [v0.1.1](https://github.com/SocialCars/colmto/releases/tag/v0.1.1)" width="600px" align="left" %}}
  * **[Source code](https://github.com/SocialCars/colmto)**<br>
  CoLMTO 
  [![CircleCI badge](https://circleci.com/gh/SocialCars/colmto.svg?style=badge)](https://circleci.com/gh/SocialCars/colmto)
  the build process at [CircleCI](https://circleci.com).<br>
  Unit tests, asserting the correctness of the code, provide a code coverage of
  [![codecov badge](https://codecov.io/gh/SocialCars/colmto/branch/master/graph/badge.svg)](https://codecov.io/gh/SocialCars/colmto).<br>
  The documentation can be [viewed online (html)](http://socialcars.github.io/colmto/docs/sources/index.html) or [downloaded as pdf](http://socialcars.github.io/colmto/docs/CoLMTO-doc.pdf).
  * **2017-04-06:** [Released v0.1.1](https://github.com/SocialCars/colmto/releases/tag/v0.1.1) of CoLMTO, referenced as [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.801531.svg)](https://doi.org/10.5281/zenodo.801531).<br>
  It was used for simulating *satisfaction*, *fairness* and *efficiency* on 2+1 roadways.
  The findings were submitted as EWGT 2017 paper *Towards Fair and Efficient Traffic Flow Coordination Mechanisms for 2+1 Roadways*. The resulting/related dataset is available as [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.495742.svg)](https://doi.org/10.5281/zenodo.495742).
  * **2017-05-31:** Paper got accepted for publication at EWGT 2017.

* **[LightJason AgentSpeak(L++)](https://lightjason.github.io)** (a joint project with [Philipp Kraus](https://github.com/flashpixx))
  * **2016-10-19:** Our paper [LightJason: A BDI Framework Inspired by Jason](https://lightjason.github.io/publication/2016-eumas.pdf) got accepted for publication at [EUMAS 2016](http://eumas-at2016.webs.upv.es).
  * **2016-11-20:** We published a [technical report about LightJason](https://lightjason.github.io/publication/2016-ifi-techreport.pdf) in the IfI Technical Report Series.
  * **2016-12-15:** We [presented](https://lightjason.github.io/publication/2016-eumas-slides.pdf) our paper at EUMAS 2016.

* **Related student research projects (supervised by me)**
  * [Platooning models for autonomous vehicles in SUMO](https://github.com/sinziana-sebe/sumo)
  * [Vehicle following models with social force](https://github.com/TranKhacDat/SocialForceVehicles)
  * [Agent-based simulation of cooperative driving manoeuvres of autonomous cars](https://github.com/adityaraj52/AgentDrive_BachelorsThesis)
  * Aufdeckung von regelwidrigem Verhalten von Agenten im Verkehrskontext (*Revealing rule-adverse behaviour of agents in traffic context*)
  * Entwicklung eines institutionellen Frameworks für multiagentenbasierte Verkehrssimulationen (*Developing an institutional framework for multiagent-based traffic simulations*)

  
  

#### B2.2 [Sophie Dennisen:](https://github.com/sdennisen) Collective Decision-Making Mechanisms in Urban Traffic

* **[LightVoting](https://github.com/SocialCars/LightVoting)**
  * [![CircleCI](https://circleci.com/gh/SocialCars/LightVoting/tree/master.svg?style=shield)](https://circleci.com/gh/SocialCars/LightVoting/tree/master)
  * Documentation ([Project](http://socialcars.github.io/LightVoting/), [Source Code](http://socialcars.github.io/LightVoting/sources/index.html))


#### B2.3 [Fatema Tuj Johora:](https://github.com/Fatema080136) Scalable micro-simulation of Mixed Traffic based on cognitive and hybrid models


#### B2.4 [Sinziana Sebe:](https://github.com/sinziana-sebe) Collective decision-making for online coordination of same day delivery with mixed autonomous fleets
